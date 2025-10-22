import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | Yoga Flow",
  description: "Terms and Conditions for using Yoga Flow services.",
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#f5f1eb] py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <Link
          href="/"
          className="inline-flex items-center text-[#ff8c42] hover:text-[#ff7a28] mb-6 transition-colors"
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
          Terms & Conditions
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
              1. Agreement to Terms
            </h2>
            <p className="text-gray-700 mb-4">
              By accessing or using Yoga Flow&apos;s website, mobile application, or
              services, you agree to be bound by these Terms and Conditions. If
              you disagree with any part of these terms, you may not access our
              services.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "serif" }}
            >
              2. Description of Services
            </h2>
            <p className="text-gray-700 mb-4">
              Yoga Flow provides online yoga classes, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                Live streaming yoga sessions from Rishikesh-based instructors
              </li>
              <li>Access to recorded yoga classes and tutorials</li>
              <li>Personalized yoga practice recommendations</li>
              <li>Community features and interaction with instructors</li>
              <li>Progress tracking and wellness resources</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "serif" }}
            >
              3. User Accounts
            </h2>
            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-4">
              3.1 Account Registration
            </h3>
            <p className="text-gray-700 mb-4">
              To access certain features, you must register for an account. You
              agree to provide accurate, current, and complete information
              during registration and to update such information to keep it
              accurate, current, and complete.
            </p>
            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-4">
              3.2 Account Security
            </h3>
            <p className="text-gray-700 mb-4">
              You are responsible for maintaining the confidentiality of your
              account credentials and for all activities that occur under your
              account. You must immediately notify us of any unauthorized use of
              your account.
            </p>
            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-4">
              3.3 Eligibility
            </h3>
            <p className="text-gray-700 mb-4">
              You must be at least 18 years old to create an account. By
              creating an account, you represent that you are of legal age to
              form a binding contract.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "serif" }}
            >
              4. Subscription and Payment
            </h2>
            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-4">
              4.1 Subscription Plans
            </h3>
            <p className="text-gray-700 mb-4">
              Yoga Flow offers monthly subscription plans at ₹499 per month.
              Your subscription automatically renews each month unless cancelled
              before the renewal date.
            </p>
            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-4">
              4.2 Payment Processing
            </h3>
            <p className="text-gray-700 mb-4">
              All payments are processed securely through Razorpay. By providing
              payment information, you authorize us to charge the applicable
              fees to your payment method.
            </p>
            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-4">
              4.3 Free Trial
            </h3>
            <p className="text-gray-700 mb-4">
              We may offer a free trial period. If you do not cancel before the
              trial ends, you will be automatically charged for the
              subscription.
            </p>
            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-4">
              4.4 Cancellation
            </h3>
            <p className="text-gray-700 mb-4">
              You may cancel your subscription at any time. Cancellation will
              take effect at the end of your current billing period. No refunds
              will be provided for partial months.
            </p>
            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-4">
              4.5 Refund Policy
            </h3>
            <p className="text-gray-700 mb-4">
              Refunds are provided on a case-by-case basis within 7 days of
              payment for valid reasons such as technical issues preventing
              access to services. Contact our support team to request a refund.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "serif" }}
            >
              5. User Conduct
            </h2>
            <p className="text-gray-700 mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                Use the services for any illegal purpose or in violation of any
                laws
              </li>
              <li>Share your account credentials with others</li>
              <li>
                Record, copy, or redistribute our content without permission
              </li>
              <li>Attempt to hack, disrupt, or interfere with the platform</li>
              <li>Harass, abuse, or harm other users or instructors</li>
              <li>Upload viruses or malicious code</li>
              <li>Use automated systems or bots to access the services</li>
              <li>Impersonate any person or entity</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "serif" }}
            >
              6. Intellectual Property
            </h2>
            <p className="text-gray-700 mb-4">
              All content on Yoga Flow, including videos, images, text,
              graphics, logos, and software, is the property of Yoga Flow or its
              licensors and is protected by copyright, trademark, and other
              intellectual property laws.
            </p>
            <p className="text-gray-700 mb-4">
              You may not reproduce, distribute, modify, create derivative
              works, publicly display, or exploit any of our content without our
              written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "serif" }}
            >
              7. Health and Safety Disclaimer
            </h2>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-4">
              <p className="text-gray-700 mb-4 font-semibold">
                IMPORTANT HEALTH NOTICE:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  Yoga involves physical activity. Consult your physician before
                  beginning any exercise program.
                </li>
                <li>
                  You participate at your own risk. Yoga Flow is not liable for
                  any injuries sustained during practice.
                </li>
                <li>
                  Listen to your body and never force yourself into
                  uncomfortable positions.
                </li>
                <li>
                  Our instructors provide guidance, but you are responsible for
                  your own safety.
                </li>
                <li>
                  If you have any medical conditions, inform your instructor
                  before class.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "serif" }}
            >
              8. Limitation of Liability
            </h2>
            <p className="text-gray-700 mb-4">
              To the maximum extent permitted by law, Yoga Flow shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages, or any loss of profits or revenues, whether
              incurred directly or indirectly, or any loss of data, use,
              goodwill, or other intangible losses.
            </p>
            <p className="text-gray-700 mb-4">
              Our total liability shall not exceed the amount you paid us in the
              twelve (12) months prior to the event giving rise to the
              liability.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "serif" }}
            >
              9. Service Availability
            </h2>
            <p className="text-gray-700 mb-4">
              We strive to provide uninterrupted access to our services, but we
              do not guarantee that our services will be available at all times.
              We may suspend or discontinue services for maintenance, updates,
              or for any other reason without liability.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "serif" }}
            >
              10. Termination
            </h2>
            <p className="text-gray-700 mb-4">
              We may terminate or suspend your account and access to our
              services immediately, without prior notice, if you breach these
              Terms. Upon termination, your right to use the services will
              immediately cease.
            </p>
            <p className="text-gray-700 mb-4">
              You may terminate your account at any time by visiting our{" "}
              <Link
                href="/delete"
                className="text-[#ff8c42] hover:text-[#ff7a28] font-medium"
              >
                Account Deletion page
              </Link>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "serif" }}
            >
              11. Privacy
            </h2>
            <p className="text-gray-700 mb-4">
              Your use of our services is also governed by our{" "}
              <Link
                href="/privacy-policy"
                className="text-[#ff8c42] hover:text-[#ff7a28] font-medium"
              >
                Privacy Policy
              </Link>
              , which describes how we collect, use, and protect your personal
              information.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "serif" }}
            >
              12. Changes to Terms
            </h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify these Terms at any time. We will
              notify you of any changes by posting the new Terms on this page
              and updating the &quot;Last updated&quot; date. Your continued use of the
              services after changes constitute acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "serif" }}
            >
              13. Governing Law
            </h2>
            <p className="text-gray-700 mb-4">
              These Terms shall be governed by and construed in accordance with
              the laws of India. Any disputes arising under these Terms shall be
              subject to the exclusive jurisdiction of the courts in Rishikesh,
              Uttarakhand, India.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "serif" }}
            >
              14. Contact Information
            </h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="bg-[#f5f1eb] rounded-lg p-6 text-gray-700">
              <p className="mb-2">
                <strong>Email:</strong> support@yogaflow.com
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
              15. Severability
            </h2>
            <p className="text-gray-700 mb-4">
              If any provision of these Terms is found to be unenforceable or
              invalid, that provision will be limited or eliminated to the
              minimum extent necessary so that these Terms will otherwise remain
              in full force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "serif" }}
            >
              16. Entire Agreement
            </h2>
            <p className="text-gray-700 mb-4">
              These Terms, together with our Privacy Policy, constitute the
              entire agreement between you and Yoga Flow regarding the use of
              our services and supersede all prior agreements and
              understandings.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/privacy-policy"
              className="px-8 py-3 bg-[#f0dcc8] text-gray-900 rounded-full font-light text-base hover:bg-[#e8d4be] transition-colors text-center"
            >
              View Privacy Policy
            </Link>
            <Link
              href="/delete"
              className="px-8 py-3 bg-[#ff8c42] text-white rounded-full font-light text-base hover:bg-[#ff7a28] transition-colors text-center"
            >
              Delete Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
