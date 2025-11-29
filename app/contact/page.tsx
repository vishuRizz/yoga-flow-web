import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Contact Yoga Flow | Connect with Our Team",
  description:
    "Have a question about Yoga Flow classes or memberships? Reach out to our team in Rishikesh and we will be happy to help.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-[#f5f1eb] via-[#f8f0e6] to-[#f6e6d7] pt-32 md:pt-40 pb-24">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <header className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-gray-500 mb-6">
              Contact
            </p>
            <h1
              className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
              style={{ fontFamily: "serif" }}
            >
              We&apos;re Here to Support Your Practice
            </h1>
            <p
              className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: "serif" }}
            >
              Whether you&apos;re curious about our classes, need help with your
              membership, or simply want to say hello, the Yoga Flow team in
              Rishikesh is only a message away.
            </p>
          </header>

          <section className="grid gap-10 md:grid-cols-2">
            <article className="bg-white/80 backdrop-blur-sm border border-[#f0dcc8] rounded-3xl p-8 shadow-sm">
              <h2
                className="text-2xl font-semibold text-gray-900 mb-4"
                style={{ fontFamily: "serif" }}
              >
                Connect Directly
              </h2>
              <p
                className="text-gray-600 leading-relaxed mb-6"
                style={{ fontFamily: "serif" }}
              >
                Email us anytime or schedule a call with a mentor. We respond
                within 24 hours, honoring the warmth and care of our Rishikesh
                community.
              </p>
              <div className="space-y-3 text-gray-700" style={{ fontFamily: "serif" }}>
                <p>
                  <span className="font-semibold text-[#d97706]">Email:</span>{" "}
                  hello@yogaflow.com
                </p>
                <p>
                  <span className="font-semibold text-[#d97706]">Phone:</span>{" "}
                  +91 75794 71957
                </p>
                <p>
                  <span className="font-semibold text-[#d97706]">
                    Studio Hours:
                  </span>{" "}
                  Mon - Sat, 7 AM to 9 PM IST
                </p>
              </div>
            </article>

            <article className="bg-[#fef8f2] border border-[#f0dcc8] rounded-3xl p-8 shadow-sm">
              <h2
                className="text-2xl font-semibold text-gray-900 mb-4"
                style={{ fontFamily: "serif" }}
              >
                Send Us a Message
              </h2>
              <form className="space-y-5">
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="text-sm uppercase tracking-wide text-gray-500 mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    className="rounded-xl border border-[#f0dcc8] bg-white px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ff8c42]"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-sm uppercase tracking-wide text-gray-500 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    className="rounded-xl border border-[#f0dcc8] bg-white px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ff8c42]"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="message"
                    className="text-sm uppercase tracking-wide text-gray-500 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Share how we can support your practice."
                    className="rounded-xl border border-[#f0dcc8] bg-white px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ff8c42]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#ff8c42] text-white py-3 font-medium hover:bg-[#ff7a28] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </article>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
