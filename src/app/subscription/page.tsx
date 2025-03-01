"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Title from "@/components/Title";

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
    <div className="min-h-screen bg-white">
      <Title title="Subscribe" showSearch={false} />
      
      <div className="container mx-auto px-4 py-12">
        <Card className="max-w-2xl mx-auto border-black rounded-none shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-center">
              Choose Your Plan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center space-x-4 mb-8">
              <button
                onClick={() => setPlan("monthly")}
                className={`px-6 py-2 border ${
                  plan === "monthly"
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-black"
                } rounded-none`}
              >
                Monthly
              </button>
              <button
                onClick={() => setPlan("bimonthly")}
                className={`px-6 py-2 border ${
                  plan === "bimonthly"
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-black"
                } rounded-none`}
              >
                Every 2 Months
              </button>
            </div>
            <div className="flex justify-center space-x-4 mb-8">
              <button
                onClick={() => setQuantity("basic")}
                className={`px-6 py-2 border ${
                  quantity === "basic"
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-black"
                } rounded-none`}
              >
                1 Soap + 1 Shampoo Bar
              </button>
              <button
                onClick={() => setQuantity("premium")}
                className={`px-6 py-2 border ${
                  quantity === "premium"
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-black"
                } rounded-none`}
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
            <div className="bg-yellow-100 p-4 border border-yellow-400 text-center mb-8">
              <p className="text-yellow-800 font-semibold">First Month Free!</p>
              <p className="text-sm text-yellow-700">
                Start your subscription today and enjoy your first month on us.
              </p>
            </div>
            <form>
              {/* Form fields remain the same */}
              <Button 
                type="submit" 
                className="w-full bg-black text-white border border-black rounded-none hover:bg-white hover:text-black transition-colors"
              >
                Start My Free Trial
              </Button>
            </form>
            <p className="mt-4 text-sm text-gray-600 text-center">
              By subscribing, you agree to our{" "}
              <Link
                href="/terms"
                className="text-black font-medium hover:underline"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="text-black font-medium hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
