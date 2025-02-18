"use client"

import { useBasket } from "@/contexts/BasketContext"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Trash2 } from "lucide-react"

export default function Basket() {
  const { basket, removeFromBasket, updateQuantity } = useBasket()
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const total = basket.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleCheckout = async () => {
    setIsCheckingOut(true)
    // Implement checkout logic here (e.g., redirect to Stripe Checkout)
    setIsCheckingOut(false)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-teal-800 text-center">Your Basket</h1>
      {basket.length === 0 ? (
        <div className="text-center">
          <p className="text-xl mb-4">Your basket is empty</p>
          <Link href="/products" className="text-teal-600 hover:underline">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {basket.map((item) => (
              <div key={item.id} className="flex items-center border-b py-4">
                <Image
                  src={`/${item.name.toLowerCase().replace(" ", "-")}-soap.jpg`}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-md"
                />
                <div className="ml-4 flex-grow">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">£{item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <button
                      className="bg-gray-200 px-2 py-1 rounded-l"
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value) || 1)}
                      className="w-12 text-center border-t border-b"
                    />
                    <button
                      className="bg-gray-200 px-2 py-1 rounded-r"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button className="text-red-500 hover:text-red-700" onClick={() => removeFromBasket(item.id)}>
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
          <div className="md:col-span-1">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>£{total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-semibold text-lg mt-4">
                <span>Total</span>
                <span>£{total.toFixed(2)}</span>
              </div>
              <button
                className="w-full bg-teal-500 text-white px-4 py-2 rounded-full mt-6 hover:bg-teal-600 transition duration-300 disabled:opacity-50"
                onClick={handleCheckout}
                disabled={isCheckingOut}
              >
                {isCheckingOut ? "Processing..." : "Proceed to Checkout"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

