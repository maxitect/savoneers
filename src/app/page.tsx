"use client";

import Image from "next/image";
import CTAButton from "@/components/CTAButton";
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
      <Image
        src="/subscription_box.jpg"
        alt="Background Image"
        fill
        className="absolute inset-0 object-cover object-left-bottom -z-10"
      />

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
          <CTAButton
            href="/subscription"
            ariaLabel="Start your free trial subscription with Savoneers"
          >
            Start Your Free Trial
          </CTAButton>
          <p className="mt-4 text-black font-semibold">
            First month free! No commitment required.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-4 w-full">
          {items.map((item, index) => (
            <Popover key={index}>
              <PopoverTrigger asChild>
                <button className="max-w-xs mx-auto w-full text-black text-center border border-black px-4 py-2 hover:bg-black hover:text-white transition">
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
