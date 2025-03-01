"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { BasketItem, useBasket } from "@/contexts/BasketContext";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Title from "@/components/Title";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

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
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(allProducts);
  const { addToBasket } = useBasket();

  useEffect(() => {
    // Start with a fresh copy of all products
    let products = [...allProducts];

    // Apply filter
    if (filter !== "all") {
      products = products.filter((product) => product.type === filter);
    }

    // Apply search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      products = products.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.type.toLowerCase().includes(query)
      );
    }

    setFilteredProducts(products);
  }, [filter, searchQuery]);

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
    <div className="min-h-screen bg-white">
      <Title
        title="Shop"
        showSearch={true}
        searchQuery={searchQuery}
        searchPlaceholder="Search soaps..."
        onSearchChange={setSearchQuery}
      />

      <div className="container mx-auto px-10 py-8">
        <div className="mb-8">
          <Tabs defaultValue="all" className="mb-4 md:mb-0">
            <TabsList className="bg-white border border-black rounded-none">
              <TabsTrigger
                value="all"
                onClick={() => setFilter("all")}
                className="rounded-none data-[state=active]:bg-black data-[state=active]:text-white"
              >
                All Products
              </TabsTrigger>
              <TabsTrigger
                value="soap"
                onClick={() => setFilter("soap")}
                className="rounded-none data-[state=active]:bg-black data-[state=active]:text-white"
              >
                Soaps
              </TabsTrigger>
              <TabsTrigger
                value="shampoo"
                onClick={() => setFilter("shampoo")}
                className="rounded-none data-[state=active]:bg-black data-[state=active]:text-white"
              >
                Shampoo Bars
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="group border-black rounded-none overflow-hidden"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute top-2 left-2 bg-white px-2 py-1 text-xs font-medium capitalize">
                  {product.type}
                </div>
              </div>

              <CardHeader className="px-4 pt-4 pb-0">
                <h3 className="font-medium text-lg">{product.name}</h3>
              </CardHeader>

              <CardContent className="px-4 py-2">
                <div className="flex items-center text-sm text-gray-600 space-x-2">
                  <span className="capitalize">{product.type}</span>
                </div>
              </CardContent>

              <CardFooter className="px-4 pb-4 pt-0 flex justify-between">
                <p className="font-semibold mt-2">
                  £{product.price.toFixed(2)}
                </p>
                <Button
                  onClick={() => handleAddToBasket(product)}
                  className="bg-black text-white border border-black rounded-none hover:bg-white hover:text-black transition-colors"
                >
                  Add
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
