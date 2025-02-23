"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

export default function Home() {
  const items = [
    {
      title: "Made in England",
      text: "Crafted with care in our English workshop using traditional methods.",
    },
    {
      title: "100% Natural",
      text: "Our soaps are made with all-natural, ethically sourced ingredients.",
    },
    {
      title: "Eco-Friendly",
      text: "Sustainable packaging and production methods to minimize our impact.",
    },
  ];

  return (
    <section className="relative h-screen flex flex-col items-center px-4 py-12 text-center">
      {/* Background Image */}
      <Image
        src="/subscription_box.jpg"
        alt="Background Image"
        fill
        className="absolute inset-0 object-cover object-left -z-10"
      />

      {/* Hero Section */}
      <div className="mt-20 flex flex-col justify-between h-screen w-screen">
        <div>
          <h1 className=" text-4xl md:text-6xl font-bold text-black">
            The cleanest club in town
          </h1>
          <p className="text-xl text-black">
            Discover our luxurious, handcrafted soap bars made in England with
            100% natural ingredients.
          </p>
        </div>
        <div>
          <Link
            href="/subscription"
            className="bg-black text-white hover:bg-white hover:text-black border-2 border-black px-8 py-3 text-lg font-semibold transition duration-300"
          >
            Start Your Free Trial
          </Link>
          <p className="mt-4 text-black font-semibold">
            First month free! No commitment required.
          </p>
        </div>
        {/* Popover Buttons at the Bottom */}
        <div className="flex justify-around">
          {items.map((item, index) => (
            <Popover key={index}>
              <PopoverTrigger asChild>
                <button className="max-w-xs text-black text-center border border-black px-4 py-2 hover:bg-black hover:text-white transition">
                  <h2 className="text-2xl font-semibold">{item.title}</h2>
                </button>
              </PopoverTrigger>
              <PopoverContent className="bg-white shadow-lg max-w-md text-black text-center">
                {item.text}
              </PopoverContent>
            </Popover>
          ))}
        </div>
      </div>
    </section>
  );
}
