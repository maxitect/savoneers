"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { BasketItem, useBasket } from "@/contexts/BasketContext";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);
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
      <div className="bg-gradient-to-br from-[#cc725a] to-[#ea9f84] pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-black uppercase mb-4 md:mb-0">
              Shop
            </h1>
            <div className="w-full md:w-1/3 relative">
              <Input
                type="search"
                placeholder="Search soaps..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white border-black rounded-none pr-10"
              />
              <button 
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                onClick={() => {/* Search happens live */}}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">

        <div className="mb-8">
          <Tabs defaultValue="all" className="mb-4 md:mb-0">
            <TabsList className="bg-gray-100">
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
