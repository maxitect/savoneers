import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { BasketProvider } from "@/contexts/BasketContext";

import localFont from "next/font/local";

export const aquawax = localFont({
  src: "../fonts/AquawaxPro-Regular.woff2",
  variable: "--font-aquawax",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Savoneers - Premium Soap Bar Subscriptions",
  description:
    "Discover luxurious, handcrafted soap bars made in England, delivered to your doorstep monthly.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={aquawax.variable}>
      <body className="font-main flex flex-col min-h-screen">
        <BasketProvider>
          <Toaster />
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </BasketProvider>
      </body>
    </html>
  );
}
