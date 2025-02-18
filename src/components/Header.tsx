"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { User } from "@supabase/auth-js";
import { useBasket } from "@/contexts/BasketContext";
import { ShoppingBasket, User as UserComponent } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const { basket } = useBasket();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };

    fetchUser();

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

  const basketItemsCount = basket.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="bg-teal-500 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="ml-2 text-2xl font-logo">savoneers</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Button variant="ghost" asChild>
                <Link href="/">Home</Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost" asChild>
                <Link href="/about">About</Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost" asChild>
                <Link href="/subscription">Subscribe</Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost" asChild>
                <Link href="/shop">Shop</Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost" asChild>
                <Link href="/contact">Contact</Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost" asChild>
                <Link href="/basket" className="relative">
                  <ShoppingBasket className="w-6 h-6" />
                  {basketItemsCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-pink-500 text-white rounded-full px-2 py-1 text-xs font-bold">
                      {basketItemsCount}
                    </span>
                  )}
                </Link>
              </Button>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="p-2">
                    <UserComponent className="w-6 h-6" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {user ? (
                    <>
                      <DropdownMenuItem asChild>
                        <Link href="/account">Account Settings</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={handleSignOut}>
                        Sign Out
                      </DropdownMenuItem>
                    </>
                  ) : (
                    <>
                      <DropdownMenuItem asChild>
                        <Link href="/signin">Sign In</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/signup">Sign Up</Link>
                      </DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
