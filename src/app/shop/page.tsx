"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { BasketItem, useBasket } from "@/contexts/BasketContext";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

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

type SortOption = 
  | "price-asc" 
  | "price-desc" 
  | "name-asc" 
  | "name-desc" 
  | "newest";

export default function Shop() {
  const [filter, setFilter] = useState<"all" | "soap" | "shampoo">("all");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);
  const [sortBy, setSortBy] = useState<SortOption>("price-asc");
  const { addToBasket } = useBasket();

  useEffect(() => {
    let products = [...allProducts];
    
    // Apply filter
    if (filter !== "all") {
      products = products.filter((product) => product.type === filter);
    }
    
    // Apply sorting
    switch (sortBy) {
      case "price-asc":
        products = [...products].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        products = [...products].sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        products = [...products].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        products = [...products].sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "newest":
        // In a real app, you'd have a date field to sort by
        // For now, we'll just use the original order
        break;
    }
    
    setFilteredProducts(products);
  }, [filter, sortBy]);

  const handleAddToBasket = (product: Product) => {
    addToBasket({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
    toast.success(`${product.name} added to basket`);
  };

  const getSortLabel = (sort: SortOption): string => {
    switch (sort) {
      case "price-asc": return "Price: lowest to highest";
      case "price-desc": return "Price: highest to lowest";
      case "name-asc": return "Name: A to Z";
      case "name-desc": return "Name: Z to A";
      case "newest": return "Newest first";
    }
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-teal-800 text-center">
          Our Products
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
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

          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">SORT</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-gray-300">
                  {getSortLabel(sortBy)}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setSortBy("price-asc")}>
                  Price: lowest to highest
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("price-desc")}>
                  Price: highest to lowest
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("name-asc")}>
                  Name: A to Z
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("name-desc")}>
                  Name: Z to A
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("newest")}>
                  Newest first
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
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
                <div className="absolute top-2 left-2 bg-white text-teal-800 px-2 py-1 text-xs font-medium capitalize">
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
                <p className="font-semibold mt-2">£{product.price.toFixed(2)}</p>
              </CardContent>
              
              <CardFooter className="px-4 pb-4 pt-0">
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
