import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-teal-800">
          Welcome to Savoneers
        </h1>
        <p className="text-xl mb-8 text-gray-600">
          Discover our luxurious, handcrafted soap bars made in England with
          100% natural ingredients.
        </p>
        <Link
          href="/subscription"
          className="bg-teal-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-teal-600 transition duration-300"
        >
          Start Your Free Trial
        </Link>
        <p className="mt-4 text-teal-600 font-semibold">
          First month free! No commitment required.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-yellow-100 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800">
            Made in England
          </h2>
          <p>
            Crafted with care in our English workshop using traditional methods.
          </p>
        </div>
        <div className="bg-green-100 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4 text-green-800">
            100% Natural
          </h2>
          <p>
            Our soaps are made with all-natural, ethically sourced ingredients.
          </p>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">
            Eco-Friendly
          </h2>
          <p>
            Sustainable packaging and production methods to minimize our
            environmental impact.
          </p>
        </div>
      </section>

      {/* Rest of the component remains the same */}
    </div>
  );
}
