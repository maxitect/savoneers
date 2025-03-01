"use client";

import Link from "next/link";
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
import { User } from "@supabase/auth-js";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Subscribe", href: "/subscription" },
  { name: "Shop", href: "/shop" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar({
  user,
  handleSignOut,
}: {
  user: User | null;
  handleSignOut: () => void;
}) {
  const { basket } = useBasket();
  const basketItemsCount = basket.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
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
  );
}
