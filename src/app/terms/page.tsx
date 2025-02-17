export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-teal-800 text-center">
        Terms of Service
      </h1>
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

        <h2 className="text-2xl font-semibold mb-4 text-teal-700">
          1. Acceptance of Terms
        </h2>
        <p className="mb-4">
          By accessing and using the Savoneers website and services, you accept
          and agree to be bound by the terms and provision of this agreement.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-teal-700">
          2. Use of Website
        </h2>
        <p className="mb-4">
          You agree to use the website for lawful purposes only and in a way
          that does not infringe the rights of, restrict or inhibit anyone
          else&apos;s use and enjoyment of the website.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-teal-700">
          3. Product Information
        </h2>
        <p className="mb-4">
          We strive to provide accurate product information, but we do not
          warrant that product descriptions or other content is accurate,
          complete, reliable, current, or error-free.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-teal-700">
          4. Pricing and Availability
        </h2>
        <p className="mb-4">
          All prices are subject to change without notice. We reserve the right
          to modify or discontinue any product without notice.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-teal-700">
          5. Subscription Terms
        </h2>
        <p className="mb-4">
          By subscribing to our soap delivery service, you agree to the
          recurring billing terms specified in your chosen plan. You may cancel
          your subscription at any time, but refunds are subject to our refund
          policy.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-teal-700">
          6. Limitation of Liability
        </h2>
        <p className="mb-4">
          Savoneers shall not be liable for any indirect, incidental, special,
          consequential or punitive damages, or any loss of profits or revenues,
          whether incurred directly or indirectly, or any loss of data, use,
          goodwill, or other intangible losses.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-teal-700">
          7. Governing Law
        </h2>
        <p className="mb-4">
          These Terms shall be governed and construed in accordance with the
          laws of [Your Jurisdiction], without regard to its conflict of law
          provisions.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-teal-700">
          8. Contact Us
        </h2>
        <p>For any questions about these Terms, please contact us at:</p>
        <p>
          Savoneers
          <br />
          Email: legal@savoneers.com
          <br />
          Phone: (555) 123-4567
        </p>
      </div>
    </div>
  );
}
