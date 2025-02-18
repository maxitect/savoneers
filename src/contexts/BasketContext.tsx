"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import Cookies from "js-cookie";

interface BasketItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface SupabaseBasketItem {
  products: {
    id: string;
    name: string;
    price: number;
  }[];
  quantity: number;
}

interface BasketContextType {
  basket: BasketItem[];
  addToBasket: (item: BasketItem) => void;
  removeFromBasket: (id: string) => void;
  clearBasket: () => void;
  updateQuantity: (id: string, quantity: number) => void;
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("useBasket must be used within a BasketProvider");
  }
  return context;
};

export const BasketProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [basket, setBasket] = useState<BasketItem[]>([]);

  useEffect(() => {
    const loadBasket = async () => {
      const user = (await supabase.auth.getUser()).data.user;
      if (user) {
        // Load basket from database
        const { data, error } = await supabase
          .from("basket_items")
          .select("products(id, name, price), quantity")
          .eq("user_id", user.id);
        if (data && !error) {
          setBasket(
            data.map((item: SupabaseBasketItem) => ({
              id: item.products[0].id,
              name: item.products[0].name,
              price: item.products[0].price,
              quantity: item.quantity,
            }))
          );
        }
      } else {
        // Load basket from cookies
        const cookieBasket = Cookies.get("basket");
        if (cookieBasket) {
          setBasket(JSON.parse(cookieBasket));
        }
      }
    };
    loadBasket();
  }, []);

  const saveBasket = async (newBasket: BasketItem[]) => {
    const user = (await supabase.auth.getUser()).data.user;
    if (user) {
      // Save basket to database
      await supabase.from("basket_items").delete().eq("user_id", user.id);
      for (const item of newBasket) {
        await supabase.from("basket_items").insert({
          user_id: user.id,
          product_id: item.id,
          quantity: item.quantity,
        });
      }
    } else {
      // Save basket to cookies
      Cookies.set("basket", JSON.stringify(newBasket), { expires: 7 });
    }
    setBasket(newBasket);
  };

  const addToBasket = (item: BasketItem) => {
    const newBasket = [...basket];
    const existingItem = newBasket.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      newBasket.push(item);
    }
    saveBasket(newBasket);
  };

  const removeFromBasket = (id: string) => {
    const newBasket = basket.filter((item) => item.id !== id);
    saveBasket(newBasket);
  };

  const clearBasket = () => {
    saveBasket([]);
  };

  const updateQuantity = (id: string, quantity: number) => {
    const newBasket = basket.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    saveBasket(newBasket);
  };

  return (
    <BasketContext.Provider
      value={{
        basket,
        addToBasket,
        removeFromBasket,
        clearBasket,
        updateQuantity,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};
