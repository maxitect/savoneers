import Image from "next/image";
import Title from "@/components/Title";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Title title="About" showSearch={false} />

      <div className="container mx-auto px-4 py-12">
        <Card className="border-black rounded-none shadow-md mb-12">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-8">
              <div>
                <Image
                  src="/about/story.jpeg"
                  alt="Savoneers workshop"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-teal-700">
                  Our Story
                </h2>
                <p className="mb-4 text-gray-700">
                  Today, many commercial soaps are filled with synthetic
                  chemicals and artificial additives. Ingredients like triclosan
                  and parabens have been linked to skin irritation and hormonal
                  disruptions. Additionally, the widespread use of palm oil in
                  soap production has led to significant deforestation,
                  threatening wildlife habitats and contributing to climate
                  change.
                </p>
                <p className="mb-4 text-gray-700">
                  Disheartened by these realities, Maxime founded Savoneers with
                  a simple belief: skincare should nurture the skin and be kind
                  to the planet. Partnering with local artisans across England,
                  we set out to create natural, sustainable soaps free from
                  harmful additives and environmentally damaging ingredients.
                </p>
                <h2 className="text-2xl font-semibold mb-4 text-teal-700">
                  Our Mission
                </h2>
                <p className="text-gray-700">
                  At Savoneers, our mission is to revolutionize your daily
                  cleansing routine by providing high-quality, eco-friendly soap
                  and shampoo bars that are as good for your skin as they are
                  for the environment. We are committed to:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>
                    <strong>Natural Ingredients:</strong> Our soaps are crafted
                    using plant-based oils and botanical extracts, ensuring a
                    gentle and nourishing experience for all skin types.
                  </li>
                  <li>
                    <strong>Palm Oil-Free Products:</strong> By excluding palm
                    oil from our formulations, we actively combat deforestation
                    and promote biodiversity.
                  </li>
                  <li>
                    <strong>Supporting Local Artisans:</strong> All our products
                    are proudly made in England, supporting local communities
                    and preserving traditional craftsmanship.
                  </li>
                  <li>
                    <strong>Eco-Friendly Practices:</strong> From sourcing to
                    packaging, we employ sustainable methods to minimize our
                    environmental footprint.
                  </li>
                </ul>
                <p className="text-gray-700">
                  By choosing Savoneers, you&apos;re embracing a healthier
                  skincare routine and joining a movement towards a more
                  sustainable and ethical world. Together, we can make a
                  difference—one soap bar at a time.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-black rounded-none shadow-md">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-teal-700">
              Join Our Community
            </h2>
            <p className="mb-4 text-gray-700">
              Stay updated with our latest products, artisan stories, and
              sustainability tips.
            </p>
            <a
              href="/subscription"
              className="inline-block bg-black text-white px-6 py-3 border border-black rounded-none shadow-md hover:bg-white hover:text-black transition-colors"
            >
              Subscribe to Our Newsletter
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
