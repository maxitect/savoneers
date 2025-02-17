import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-01-27.acacia",
});

interface CartItem {
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export async function POST(request: Request) {
  const { items, email } = await request.json();

  const transformedItems = items.map((item: CartItem) => ({
    price_data: {
      currency: "gbp",
      product_data: {
        name: item.name,
        images: [item.image],
      },
      unit_amount: item.price * 100,
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: transformedItems,
    mode: "payment",
    success_url: `${process.env.HOST_URL}/success`,
    cancel_url: `${process.env.HOST_URL}/cart`,
    metadata: {
      email,
    },
  });

  return NextResponse.json({ id: session.id });
}
