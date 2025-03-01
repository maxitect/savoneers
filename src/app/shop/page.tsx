"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { BasketItem, useBasket } from "@/contexts/BasketContext";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

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
    <div className="min-h-screen bg-gradient-to-br from-[#cd745b] to-[#f4c2aa] py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-black text-center">
          Our Products
        </h1>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 bg-white/20 backdrop-blur-sm">
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
            <Card key={product.id} className="overflow-hidden border-none shadow-lg bg-white/90 backdrop-blur-sm">
              <div className="relative h-64 w-full">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-black text-white px-2.5 py-0.5 text-xs font-semibold capitalize">
                  {product.type}
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-lg font-semibold">£{product.price.toFixed(2)}</p>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() => handleAddToBasket(product)}
                  className="w-full bg-black text-white border border-black rounded-none hover:bg-white hover:text-black transition-colors"
                >
                  Add to Basket
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
