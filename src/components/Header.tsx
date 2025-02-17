"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { User } from "@supabase/auth-js";

export default function Header() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      toast.success("Signed out successfully");
      router.push("/");
    } catch (error) {
      toast.error(`Error signing out: ${(error as Error).message}`);
    }
  };

  return (
    <header className="bg-teal-500 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="Savoneers Logo" width={40} height={40} />
          <span className="ml-2 text-2xl font-bold">Savoneers</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-teal-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-teal-200">
                Products
              </Link>
            </li>
            <li>
              <Link href="/subscription" className="hover:text-teal-200">
                Subscribe
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-teal-200">
                About
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-teal-200">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-teal-200">
                Contact
              </Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link href="/account" className="hover:text-teal-200">
                    Account
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="hover:text-teal-200"
                  >
                    Sign Out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/signin" className="hover:text-teal-200">
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="hover:text-teal-200">
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
