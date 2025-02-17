import Image from "next/image";

const products = [
  { id: 1, name: "Lavender Dream", price: 5.99, image: "/lavender-soap.jpg" },
  { id: 2, name: "Citrus Burst", price: 5.99, image: "/citrus-soap.jpg" },
  { id: 3, name: "Ocean Breeze", price: 5.99, image: "/ocean-soap.jpg" },
  { id: 4, name: "Vanilla Bliss", price: 5.99, image: "/vanilla-soap.jpg" },
  {
    id: 5,
    name: "Eucalyptus Mint",
    price: 5.99,
    image: "/eucalyptus-soap.jpg",
  },
  { id: 6, name: "Rose Petal", price: 5.99, image: "/rose-soap.jpg" },
];

export default function Shop() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-teal-800 text-center">
        Soap Shop
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
              <button className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600 transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
