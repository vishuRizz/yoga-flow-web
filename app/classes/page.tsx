import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClassSchedule from "@/components/classes/ClassSchedule";

export const metadata: Metadata = {
  title: "Yoga Flow Classes | Explore Live and On-Demand Sessions",
  description:
    "Discover Yoga Flow classes tailored for every level, from beginner foundations to advanced practices and restorative sessions.",
};

export default function ClassesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-[#f5f1eb] via-[#f7efe4] to-[#f6e6d7] pt-32 md:pt-40 pb-24">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <header className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-gray-500 mb-6">
              Classes
            </p>
            <h1
              className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
              style={{ fontFamily: "serif" }}
            >
              Classes
            </h1>
            <p
              className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: "serif" }}
            >
              Find the perfect class for your practice, from sunrise
              salutations to evening flows. Explore live sessions streaming from
              Rishikesh or browse recorded journeys you can revisit anytime.
            </p>
          </header>

          <ClassSchedule />
        </div>
      </main>
      <Footer />
    </>
  );
}
