"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { User } from "@supabase/auth-js";
import { useBasket } from "@/contexts/BasketContext";
import { ShoppingBasket, User as UserIcon, Menu, X } from "lucide-react";
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
  { name: "Shop", href: "/shop" },
  { name: "Subscribe", href: "/subscription" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [user, setUser] = useState<User | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gradient-to-br from-pink_main to-pink_secondary shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="text-2xl font-logo text-black hover:text-white"
            >
              savoneers
            </Link>

            <div className="flex items-center space-x-8">
              <nav className="hidden lg:flex items-center space-x-8">
                {navItems.map(({ name, href }) => (
                  <Button key={name} variant="ghost" asChild>
                    <Link
                      href={href}
                      className="text-sm font-medium text-black hover:text-gray-700"
                    >
                      {name}
                    </Link>
                  </Button>
                ))}
              </nav>

              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" asChild>
                  <Link
                    href="/basket"
                    className="relative text-black hover:text-gray-700"
                  >
                    <ShoppingBasket className="w-5 h-5" />
                    {basketItemsCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                        {basketItemsCount}
                      </span>
                    )}
                  </Link>
                </Button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-black hover:text-gray-700"
                    >
                      <UserIcon className="w-5 h-5" />
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

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMobileMenu}
                  className="lg:hidden text-black hover:text-gray-700"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={toggleMobileMenu}
        />
        <div
          className={`absolute right-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 pt-20">
            <nav className="space-y-6">
              {navItems.map(({ name, href }) => (
                <Button
                  key={name}
                  variant="ghost"
                  asChild
                  className="w-full justify-start text-lg"
                >
                  <Link href={href} onClick={toggleMobileMenu}>
                    {name}
                  </Link>
                </Button>
              ))}
            </nav>
            <div className="mt-8 pt-6 border-t border-gray-200">
              {user ? (
                <div className="space-y-4">
                  <Button
                    variant="ghost"
                    asChild
                    className="w-full justify-start text-lg"
                  >
                    <Link href="/account" onClick={toggleMobileMenu}>
                      Account
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      handleSignOut();
                      toggleMobileMenu();
                    }}
                    className="w-full justify-start text-lg"
                  >
                    Sign Out
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <Button
                    variant="ghost"
                    asChild
                    className="w-full justify-start text-lg"
                  >
                    <Link href="/signin" onClick={toggleMobileMenu}>
                      Sign In
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    asChild
                    className="w-full justify-start text-lg"
                  >
                    <Link href="/signup" onClick={toggleMobileMenu}>
                      Sign Up
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
