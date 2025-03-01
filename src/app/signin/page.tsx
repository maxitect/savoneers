"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Title from "@/components/Title";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Signed in successfully!");
        router.push("/account");
      } else {
        toast.error(data.error || "An error occurred during log in.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Title title="Sign In" showSearch={false} />
      
      <div className="container mx-auto px-4 py-12">
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white border border-black shadow-md p-8"
        >
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-black rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-black rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-black text-white border border-black rounded-none hover:bg-white hover:text-black transition-colors" 
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </Button>
          </div>
      </form>
      <p className="mt-4 text-center">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-teal-600 hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
