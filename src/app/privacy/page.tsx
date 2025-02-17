export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-teal-800 text-center">
        Privacy Policy
      </h1>
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

        <h2 className="text-2xl font-semibold mb-4 text-teal-700">
          1. Introduction
        </h2>
        <p className="mb-4">
          Savoneers (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is
          committed to protecting your privacy. This Privacy Policy explains how
          we collect, use, disclose, and safeguard your information when you
          visit our website or use our services.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-teal-700">
          2. Information We Collect
        </h2>
        <p className="mb-4">
          We collect personal information that you voluntarily provide to us
          when you express an interest in obtaining information about us or our
          products and services, when you participate in activities on the
          website, or otherwise when you contact us.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-teal-700">
          3. How We Use Your Information
        </h2>
        <p className="mb-4">
          We use personal information collected via our website for a variety of
          business purposes described below. We process your personal
          information for these purposes in reliance on our legitimate business
          interests, in order to enter into or perform a contract with you, with
          your consent, and/or for compliance with our legal obligations.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-teal-700">
          4. Disclosure of Your Information
        </h2>
        <p className="mb-4">
          We may share your information with third parties that perform services
          for us or on our behalf, including payment processing, data analysis,
          email delivery, hosting services, customer service, and marketing
          assistance.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-teal-700">
          5. Security of Your Information
        </h2>
        <p className="mb-4">
          We use administrative, technical, and physical security measures to
          help protect your personal information. While we have taken reasonable
          steps to secure the personal information you provide to us, please be
          aware that despite our efforts, no security measures are perfect or
          impenetrable, and no method of data transmission can be guaranteed
          against any interception or other type of misuse.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-teal-700">
          6. Contact Us
        </h2>
        <p className="mb-4">
          If you have questions or comments about this Privacy Policy, please
          contact us at:
        </p>
        <p>
          Savoneers
          <br />
          Email: privacy@savoneers.com
          <br />
          Phone: (555) 123-4567
        </p>
      </div>
    </div>
  );
}
