"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { BasketItem, useBasket } from "@/contexts/BasketContext";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import soapData from "@/data/soap.json";
import shampooData from "@/data/shampoo.json";

const soaps = soapData.map((product) => ({ ...product, type: "soap" }));
const shampoos = shampooData.map((product) => ({
  ...product,
  type: "shampoo",
}));
const allProducts = [...soaps, ...shampoos];

interface Product extends Omit<BasketItem, "quantity"> {
  image: string;
  type: string;
}

export default function Shop() {
  const [filter, setFilter] = useState<"all" | "soap" | "shampoo">("all");
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(allProducts);
  const { addToBasket } = useBasket();

  useEffect(() => {
    if (filter === "all") {
      setFilteredProducts(allProducts);
    } else {
      setFilteredProducts(
        allProducts.filter((product) => product.type === filter)
      );
    }
  }, [filter]);

  const handleAddToBasket = (product: Product) => {
    addToBasket({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
    toast.success(`${product.name} added to basket`);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-teal-800 text-center">
        Our Products
      </h1>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
          <TabsTrigger value="all" onClick={() => setFilter("all")}>
            All Products
          </TabsTrigger>
          <TabsTrigger value="soap" onClick={() => setFilter("soap")}>
            Soaps
          </TabsTrigger>
          <TabsTrigger value="shampoo" onClick={() => setFilter("shampoo")}>
            Shampoo Bars
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">£{product.price.toFixed(2)}</p>
              <p className="text-gray-500 mb-4 capitalize">{product.type}</p>
              <Button
                onClick={() => handleAddToBasket(product)}
                className="w-full bg-black text-white border border-black rounded-none hover:bg-white hover:text-black transition-colors"
              >
                Add to Basket
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
