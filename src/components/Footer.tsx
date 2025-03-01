import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-pink_main to-pink_secondary">
      <div className="container mx-auto px-10 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Savoneers</h3>
            <p>Handcrafted soap bars delivered monthly to your doorstep.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-teal-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-teal-200">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="hover:text-teal-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-teal-200">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2025 Savoneers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
