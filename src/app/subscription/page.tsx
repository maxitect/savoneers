"use client";

import { useState } from "react";
import Link from "next/link";

export default function Subscription() {
  const [plan, setPlan] = useState<"monthly" | "bimonthly">("monthly");
  const [quantity, setQuantity] = useState<"basic" | "premium">("basic");

  const prices = {
    monthly: {
      basic: 9.99,
      premium: 12.99,
    },
    bimonthly: {
      basic: 9.99,
      premium: 12.99,
    },
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-teal-800 text-center">
        Subscribe to Savoneers
      </h1>
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Choose Your Plan
        </h2>
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setPlan("monthly")}
            className={`px-6 py-2 rounded-full ${
              plan === "monthly"
                ? "bg-teal-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setPlan("bimonthly")}
            className={`px-6 py-2 rounded-full ${
              plan === "bimonthly"
                ? "bg-teal-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Every 2 Months
          </button>
        </div>
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setQuantity("basic")}
            className={`px-6 py-2 rounded-full ${
              quantity === "basic"
                ? "bg-teal-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            1 Soap + 1 Shampoo Bar
          </button>
          <button
            onClick={() => setQuantity("premium")}
            className={`px-6 py-2 rounded-full ${
              quantity === "premium"
                ? "bg-teal-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            2 Soaps + 1 Shampoo Bar
          </button>
        </div>
        <div className="text-center mb-8">
          <p className="text-3xl font-bold text-teal-800">
            £{prices[plan][quantity].toFixed(2)}
          </p>
          <p className="text-gray-600 mt-2">
            {plan === "monthly" ? "Billed monthly" : "Billed every 2 months"}
          </p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg text-center mb-8">
          <p className="text-yellow-800 font-semibold">First Month Free!</p>
          <p className="text-sm text-yellow-700">
            Start your subscription today and enjoy your first month on us.
          </p>
        </div>
        <form>
          {/* Form fields remain the same */}
          <button
            type="submit"
            className="w-full bg-teal-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-600 transition duration-300"
          >
            Start My Free Trial
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600 text-center">
          By subscribing, you agree to our{" "}
          <Link
            href="/terms-of-service"
            className="text-teal-600 hover:underline"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy-policy"
            className="text-teal-600 hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
