import Image from "next/image";
import Title from "@/components/Title";
import CTAButton from "@/components/CTAButton";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Title title="About" showSearch={false} />

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Savoneers was founded with a simple belief: skincare should nurture
            your skin and be kind to the planet. We're on a mission to create
            natural, sustainable soap bars that are effective, ethical, and
            delivered with care. Our passion lies in crafting handmade products
            for everyone who values quality and sustainability. Naturally.
          </p>
          <p className="text-lg text-gray-600 mt-4 font-medium">
            Quite simply, Savoneers is soap-making with a conscience.
          </p>
        </div>

        <div className="space-y-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-0 gap-8 items-center">
            <div className="lg:pr-12">
              <Image
                src="/about/story.jpeg"
                alt="Handcrafted soap making process"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="lg:pl-12 px-4 lg:px-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-black">
                Naturally kind skincare
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                At Savoneers we don't do chemicals, just natural ingredients
                that deliver real results.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Packed with simple, plant-based oils and botanical extracts so
                they're kinder to your skin. We only include things that do you
                good, and leave out synthetic additives, parabens, and harsh
                chemicals.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-0 gap-8 items-center">
            <div className="order-2 lg:order-1 lg:pr-12 px-4 lg:px-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-black">
                Palm oil-free promise
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We've completely eliminated palm oil from our formulations to
                protect rainforests and wildlife habitats.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By choosing alternative sustainable oils, we actively combat
                deforestation whilst maintaining the luxurious lather and
                moisturising properties you expect from premium soap bars.
              </p>
            </div>
            <div className="order-1 lg:order-2 lg:pl-12">
              <Image
                src="/about/sustainability.jpeg"
                alt="Sustainable ingredients and packaging"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-0 gap-8 items-center">
            <div className="lg:pr-12">
              <Image
                src="/about/handwash.jpeg"
                alt="Natural soap in use"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="lg:pl-12 px-4 lg:px-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-black">
                Zero plastic packaging
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our range of plastic-free products has grown beautifully and we
                couldn't be more proud.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Every piece of packaging we use is recyclable or compostable.
                From our soap wraps to shipping materials, we ensure your
                skincare routine leaves no harmful trace on the environment.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-0 gap-8 items-center">
            <div className="order-2 lg:order-1 lg:pr-12 px-4 lg:px-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-black">
                Supporting local artisans
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Born and crafted in England. All our products are handmade right
                here in the UK, allowing us to reduce transport emissions whilst
                supporting local communities.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We partner with skilled artisans who share our values,
                preserving traditional soap-making techniques whilst creating
                employment in local communities.
              </p>
            </div>
            <div className="order-1 lg:order-2 lg:pl-12">
              <Image
                src="/about/soap.jpeg"
                alt="Handcrafted soap bars"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-0 gap-8 items-center">
            <div className="lg:pr-12">
              <Image
                src="/about/products.jpeg"
                alt="Range of natural soap products"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="lg:pl-12 px-4 lg:px-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-black">
                Kind to all creatures
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our products are always vegan and cruelty-free. We don't use
                ingredients that contain animal derivatives.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We never test on animals, or work with suppliers that do. Every
                soap bar is crafted with compassion for both your skin and the
                creatures we share this planet with.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-24 bg-gradient-to-br from-pink_main to-pink_secondary p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-black">
            Transparent approach
          </h3>
          <p className="text-gray-700 mb-6 leading-relaxed max-w-3xl mx-auto">
            We pride ourselves on our transparency and strive to be open and
            honest. We rely on customer feedback to help us improve as we grow,
            creating products that truly make a difference.
          </p>
          <CTAButton
            href="/subscription"
            ariaLabel="Start your subscription journey with Savoneers"
          >
            Start Your Free Trial
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
