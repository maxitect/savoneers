"use client";

import Image from "next/image";
import { BasketItem, useBasket } from "@/contexts/BasketContext";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: "1",
    name: "Lavender Dream",
    price: 5.99,
    image: "/products/lavender.webp",
  },
  {
    id: "2",
    name: "Citrus Burst",
    price: 5.99,
    image: "/products/citrus.webp",
  },
  { id: "3", name: "Ocean Breeze", price: 5.99, image: "/products/ocean.webp" },
  {
    id: "4",
    name: "Vanilla Bliss",
    price: 5.99,
    image: "/products/vanilla.webp",
  },
  {
    id: "5",
    name: "Eucalyptus Mint",
    price: 5.99,
    image: "/products/eucalyptus.webp",
  },
  { id: "6", name: "Rose Petal", price: 5.99, image: "/products/rose.webp" },
];

interface Product extends Omit<BasketItem, "quantity"> {
  image: string;
}

export default function Shop() {
  const { addToBasket } = useBasket();

  const handleAddToBasket = (product: Product) => {
    addToBasket({ ...product, quantity: 1 });
    toast.success(`${product.name} added to basket`);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-teal-800 text-center">
        Our Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
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
              <p className="text-gray-600 mb-4">£{product.price.toFixed(2)}</p>
              <Button
                className="rounded-full bg-pink-500"
                onClick={() => handleAddToBasket(product)}
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
