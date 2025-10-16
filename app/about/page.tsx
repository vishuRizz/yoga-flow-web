import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "About Yoga Flow | Bringing Rishikesh to the World",
  description:
    "Discover the story, vision, and mission behind Yoga Flow and how we bring authentic teachings from Rishikesh to students worldwide.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-[#f5f1eb] via-[#f8f0e6] to-[#f7e3d4] pt-32 md:pt-40 pb-24">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <header className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-gray-500 mb-6">
              About Yoga Flow
            </p>
            <h1
              className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-8"
              style={{ fontFamily: "serif" }}
            >
              About Yoga Flow:
              <br />
              Bringing the Soul of Rishikesh to the World.
            </h1>
            <p
              className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: "serif" }}
            >
              Grounded in the wisdom of India&apos;s yoga capital, we honor
              tradition while embracing modern life. Yoga Flow connects
              lifelong practitioners and fresh seekers alike with experienced
              teachers, immersive classes, and a compassionate community.
            </p>
          </header>

          <section className="space-y-16">
            <article>
              <h2
                className="text-2xl md:text-3xl font-semibold text-[#d97706] mb-6"
                style={{ fontFamily: "serif" }}
              >
                Our Story
              </h2>
              <p
                className="text-lg md:text-xl text-gray-600 leading-relaxed"
                style={{ fontFamily: "serif" }}
              >
                Yoga Flow was born from a deep love for yoga and a desire to
                share its transformative power with the world. Inspired by the
                serene atmosphere and profound teachings of Rishikesh, the
                birthplace of yoga, we set out on a mission to bridge the gap
                between traditional yoga and the modern urban lifestyle. Our
                journey began with a small group of dedicated practitioners and
                teachers, united by a shared vision: to make authentic yoga
                accessible to everyone, regardless of their location or schedule.
              </p>
            </article>

            <article>
              <h2
                className="text-2xl md:text-3xl font-semibold text-[#d97706] mb-6"
                style={{ fontFamily: "serif" }}
              >
                Our Vision
              </h2>
              <p
                className="text-lg md:text-xl text-gray-600 leading-relaxed"
                style={{ fontFamily: "serif" }}
              >
                We strive to create a global yoga family where anyone, from
                beginners to advanced practitioners, can experience the
                life-changing benefits of traditional yoga. We envision a world
                where the wisdom of Rishikesh is readily available, empowering
                individuals to cultivate inner peace, strength, and well-being
                through the practice of yoga.
              </p>
            </article>

            <article>
              <h2
                className="text-2xl md:text-3xl font-semibold text-[#d97706] mb-6"
                style={{ fontFamily: "serif" }}
              >
                Our Mission
              </h2>
              <p
                className="text-lg md:text-xl text-gray-600 leading-relaxed"
                style={{ fontFamily: "serif" }}
              >
                Our mission is to make authentic teachings from Rishikesh
                accessible to everyone, regardless of their location or schedule.
                Through a diverse range of live and on-demand classes led by
                experienced instructors, we cultivate a supportive learning
                environment that nurtures personal growth, community connection,
                and holistic well-being.
              </p>
            </article>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
