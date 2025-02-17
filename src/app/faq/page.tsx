import Link from "next/link";

const faqs = [
  {
    question: "What makes Savoneers soap special?",
    answer:
      "Our soaps are handcrafted in England using 100% natural, ethically sourced ingredients. We use traditional soap-making methods to create luxurious, long-lasting bars that are gentle on your skin and the environment.",
  },
  {
    question: "How does the subscription work?",
    answer:
      "You can choose between a monthly or bi-monthly subscription. Each delivery includes either 1 soap and 1 shampoo bar, or 2 soaps and 1 shampoo bar, depending on your chosen plan. Your first month is free, and you can cancel or modify your subscription at any time.",
  },
  {
    question: "Can I buy individual soap bars?",
    answer:
      "Yes! Individual soap bars are available for £5.99 each. You can purchase them directly from our products page without a subscription.",
  },
  {
    question: "Are your products vegan and cruelty-free?",
    answer:
      "Yes, all our products are 100% vegan and cruelty-free. We never test on animals and don't use any animal-derived ingredients.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "We typically process and ship orders within 1-2 business days. Delivery within the UK usually takes 3-5 business days. For international shipping times, please check our shipping information page.",
  },
  {
    question: "What if I'm not satisfied with my purchase?",
    answer:
      "We offer a 30-day satisfaction guarantee. If you're not happy with your purchase, please contact our customer service team, and we'll be happy to assist you with a return or exchange.",
  },
];

export default function FAQ() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-teal-800 text-center">
        Frequently Asked Questions
      </h1>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-teal-700">
              {faq.question}
            </h2>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
        <div className="mt-12 text-center">
          <p className="text-gray-700">
            Can&apos;t find the answer you&apos;re looking for?
          </p>
          <Link href="/contact" className="text-teal-600 hover:underline">
            Contact our support team
          </Link>
        </div>
      </div>
    </div>
  );
}
