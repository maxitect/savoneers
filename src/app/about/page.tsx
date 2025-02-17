import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-teal-800 text-center">
        About Savoneers
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="/about-image.jpg"
            alt="Savoneers workshop"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-teal-700">
            Our Story
          </h2>
          <p className="mb-4 text-gray-700">
            Savoneers was born out of a passion for natural skincare and a
            desire to bring high-quality, handcrafted soap bars to people&apos;s
            homes. Our journey began in a small workshop, where we experimented
            with various natural ingredients and traditional soap-making
            techniques.
          </p>
          <p className="mb-4 text-gray-700">
            Today, we&apos;re proud to offer a wide range of luxurious soap
            bars, each carefully crafted to nourish and pamper your skin. Our
            commitment to sustainability and ethical sourcing remains at the
            heart of everything we do.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-teal-700">
            Our Mission
          </h2>
          <p className="text-gray-700">
            At Savoneers, our mission is to provide our customers with the
            finest handcrafted soap bars while promoting sustainable and
            eco-friendly practices. We believe that self-care should not come at
            the expense of our planet, and we strive to create products that are
            good for both you and the environment.
          </p>
        </div>
      </div>
    </div>
  );
}
