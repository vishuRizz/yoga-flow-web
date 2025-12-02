import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Yoga Flow",
  description:
    "Privacy Policy for Yoga Flow - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-teal-50 py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <Link
          href="/"
          className="inline-flex items-center text-[#14b8a6] hover:text-[#0d9488] mb-6 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>

        <h1
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          style={{ fontFamily: "serif" }}
        >
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-8">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "serif" }}
            >
              1. Introduction
            </h2>
            <p className="text-gray-700 mb-4">
              Welcome to Yoga Flow. We respect your privacy and are committed to
              protecting your personal data. This privacy policy will inform you
              about how we look after your personal data when you visit our
              website or use our mobile application and tell you about your
              privacy rights and how the law protects you.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "serif" }}
            >
              2. Information We Collect
            </h2>
            <p className="text-gray-700 mb-4">
              We may collect, use, store and transfer different kinds of
              personal data about you:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Identity Data:</strong> First name, last name, username
                or similar identifier
              </li>
              <li>
                <strong>Contact Data:</strong> Email address, phone number, and
                billing address
              </li>
              <li>
                <strong>Financial Data:</strong> Payment card details (processed
                securely through Razorpay)
              </li>
              <li>
                <strong>Transaction Data:</strong> Details about payments and
                subscriptions
              </li>
              <li>
                <strong>Technical Data:</strong> IP address, browser type,
                device information, and usage data
              </li>
              <li>
                <strong>Profile Data:</strong> Your preferences, yoga practice
                level, and class bookings
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you use our
                website and services
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "serif" }}
            >
              3. How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-4">
              We use your personal data for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>To register you as a new user and manage your account</li>
              <li>To process and deliver your subscription services</li>
              <li>To manage payments, fees, and charges</li>
              <li>
                To provide you with access to live and recorded yoga classes
              </li>
              <li>To communicate with you about your account and services</li>
              <li>To send you marketing communications (with your consent)</li>
              <li>To improve our website and services</li>
              <li>To ensure the security of our platform</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "serif" }}
            >
              4. Data Security
            </h2>
            <p className="text-gray-700 mb-4">
              We have implemented appropriate security measures to prevent your
              personal data from being accidentally lost, used, or accessed in
              an unauthorized way. We limit access to your personal data to
              those employees, agents, contractors, and other third parties who
              have a business need to know.
            </p>
            <p className="text-gray-700 mb-4">
              Payment information is processed securely through Razorpay, a PCI
              DSS compliant payment gateway. We do not store your complete
              credit card information on our servers.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "serif" }}
            >
              5. Data Retention
            </h2>
            <p className="text-gray-700 mb-4">
              We will only retain your personal data for as long as necessary to
              fulfill the purposes we collected it for, including for the
              purposes of satisfying any legal, accounting, or reporting
              requirements.
            </p>
            <p className="text-gray-700 mb-4">
              When you request account deletion, we will delete or anonymize
              your personal data within 30 days, except where we are required to
              retain certain information for legal or regulatory purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "serif" }}
            >
              6. Your Legal Rights
            </h2>
            <p className="text-gray-700 mb-4">
              Under certain circumstances, you have rights under data protection
              laws in relation to your personal data:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Right to access:</strong> Request access to your
                personal data
              </li>
              <li>
                <strong>Right to correction:</strong> Request correction of
                inaccurate data
              </li>
              <li>
                <strong>Right to erasure:</strong> Request deletion of your
                personal data
              </li>
              <li>
                <strong>Right to object:</strong> Object to processing of your
                personal data
              </li>
              <li>
                <strong>Right to data portability:</strong> Request transfer of
                your data
              </li>
              <li>
                <strong>Right to withdraw consent:</strong> Withdraw consent at
                any time
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "serif" }}
            >
              7. Third-Party Services
            </h2>
            <p className="text-gray-700 mb-4">
              We use third-party services to help us operate our business:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Razorpay:</strong> Payment processing
              </li>
              <li>
                <strong>Analytics Services:</strong> To understand how users
                interact with our platform
              </li>
              <li>
                <strong>Email Services:</strong> To send you communications
              </li>
              <li>
                <strong>Cloud Hosting:</strong> To store and process data
              </li>
            </ul>
            <p className="text-gray-700 mt-4">
              These third parties have access to your personal data only to
              perform these tasks on our behalf and are obligated not to
              disclose or use it for any other purpose.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "serif" }}
            >
              8. Cookies
            </h2>
            <p className="text-gray-700 mb-4">
              Our website uses cookies to distinguish you from other users. This
              helps us provide you with a good experience when you browse our
              website and allows us to improve our site. You can set your
              browser to refuse all or some cookies, or to alert you when
              websites set or access cookies.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "serif" }}
            >
              9. International Transfers
            </h2>
            <p className="text-gray-700 mb-4">
              Your information may be transferred to and maintained on computers
              located outside of your state, province, country, or other
              governmental jurisdiction where data protection laws may differ.
              We ensure appropriate safeguards are in place for such transfers.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "serif" }}
            >
              10. Children&apos;s Privacy
            </h2>
            <p className="text-gray-700 mb-4">
              Our services are not intended for children under 18 years of age.
              We do not knowingly collect personal information from children
              under 18. If you are a parent or guardian and believe your child
              has provided us with personal data, please contact us.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "serif" }}
            >
              11. Changes to This Policy
            </h2>
            <p className="text-gray-700 mb-4">
              We may update this privacy policy from time to time. We will
              notify you of any changes by posting the new privacy policy on
              this page and updating the &quot;Last updated&quot; date. You are advised to
              review this privacy policy periodically for any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "serif" }}
            >
              12. Contact Us
            </h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this privacy policy or our data
              practices, please contact us:
            </p>
            <div className="bg-teal-50 rounded-lg p-6 text-gray-700">
              <p className="mb-2">
                <strong>Email:</strong> privacy@yogaflow.com
              </p>
              <p className="mb-2">
                <strong>Address:</strong> Rishikesh, Uttarakhand, India
              </p>
              <p>
                <strong>Phone:</strong> +91 XXXX XXXXXX
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "serif" }}
            >
              13. Account Deletion
            </h2>
            <p className="text-gray-700 mb-4">
              If you wish to delete your account and all associated data, please
              visit our{" "}
              <Link
                href="/delete"
                className="text-[#14b8a6] hover:text-[#0d9488] font-medium"
              >
                Account Deletion page
              </Link>
              .
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/terms"
              className="px-8 py-3 bg-teal-100 text-gray-900 rounded-full font-light text-base hover:bg-teal-200 transition-colors text-center"
            >
              View Terms & Conditions
            </Link>
            <Link
              href="/delete"
              className="px-8 py-3 bg-[#14b8a6] text-white rounded-full font-light text-base hover:bg-[#0d9488] transition-colors text-center"
            >
              Delete Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
