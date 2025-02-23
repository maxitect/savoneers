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

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Subscribe", href: "/subscription" },
  { name: "Shop", href: "/shop" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const { basket } = useBasket();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };

    fetchUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

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
    <header className="bg-transparent absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center hover:text-black text-white"
        >
          <span className="ml-2 text-4xl font-logo">savoneers</span>
        </Link>

        {/* Hamburger Button */}
        <button
          className="mr-2 lg:hidden flex flex-col justify-between w-8 h-6 cursor-pointer z-50 relative"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <div
            className={`h-1 w-full transition-all duration-500 ease-in-out ${
              menuOpen ? "rotate-45 translate-y-2 bg-white" : "bg-black"
            }`}
          ></div>
          <div
            className={`h-1 w-full transition-all duration-500 ease-in-out ${
              menuOpen ? "opacity-0" : "bg-black"
            }`}
          ></div>
          <div
            className={`h-1 w-full transition-all duration-500 ease-in-out ${
              menuOpen ? "-rotate-45 -translate-y-3 bg-white" : "bg-black"
            }`}
          ></div>
        </button>

        {/* Mobile Fullscreen Menu */}
        <div
          className={`fixed top-0 right-0 h-screen w-screen bg-teal-600 text-white flex flex-col items-center justify-center space-y-6 transition-transform duration-500 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden z-40`}
        >
          {navItems.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className="text-2xl font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </Link>
          ))}

          {/* Basket Icon */}
          <Link
            href="/basket"
            className="relative text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            <ShoppingBasket className="w-8 h-8 inline-block" />
            {basketItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white rounded-full px-2 py-1 text-xs font-bold">
                {basketItemsCount}
              </span>
            )}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-6">
          {navItems.map(({ name, href }) => (
            <li key={name}>
              <Button variant="ghost" asChild>
                <Link href={href}>{name}</Link>
              </Button>
            </li>
          ))}

          {/* Basket Icon */}
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

          {/* User Dropdown */}
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
      </div>
    </header>
  );
}
