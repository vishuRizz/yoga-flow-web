import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/*const teachers = [
  {
    name: "Priya Sharma",
    title: "Hatha Yoga Lead Mentor",
    description:
      "Priya blends traditional Rishikesh lineage with mindful alignment, helping students build a steady foundation and breathe with intention.",
    specialties: ["Hatha", "Pranayama", "Beginner Programs"],
    years: "12 years",
  }, 
  {
    name: "Arjun Verma",
    title: "Vinyasa Flow Guide",
    description:
      "Arjun crafts dynamic sequences that honor classical Ashtanga roots while encouraging fluid, intuitive movement.",
    specialties: ["Vinyasa", "Strength Building", "Intermediate"],
    years: "10 years",
  },
  {
    name: "Divya Kapoor",
    title: "Restorative & Yin Specialist",
    description:
      "Divya&apos;s calming presence invites students to slow down, release tension, and reconnect with inner stillness.",
    specialties: ["Restorative", "Yin", "Breathwork"],
    years: "9 years",
  },
  {
    name: "Pawan Deep Negi",
    title: "Ashtanga & Strength Coach",
    description:
      "Raised in the Himalayan foothills, Pawan channels disciplined sequencing with mindful strength training to help practitioners progress safely.",
    specialties: ["Ashtanga", "Strength Conditioning", "Advanced"],
    years: "13 years",
  },
  {
    name: "Aradhna Uniyal",
    title: "Meditation & Yin Facilitator",
    description:
      "Aradhna combines gentle Yin postures with mantra-inspired meditations, grounding every session in compassion and clarity.",
    specialties: ["Yin", "Meditation", "All Levels"],
    years: "9 years",
  },
  {
    name: "Kabir Das",
    title: "Breathwork & Sound Healer",
    description:
      "Kabir weaves pranayama, chanting, and sound baths to help students deepen their practice beyond the physical postures.",
    specialties: ["Pranayama", "Sound Healing", "Workshops"],
    years: "11 years",
  },
];
*/
export const metadata: Metadata = {
  title: "Yoga Flow Teachers | Meet Our Rishikesh Mentors",
  description:
    "Meet Yoga Flow&apos;s experienced teachers from Rishikesh who guide live and recorded classes across Hatha, Vinyasa, Restorative, and meditation practices.",
};

export default function TeachersPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-teal-50 via-teal-100 to-teal-100 pt-32 md:pt-40 pb-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <header className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-gray-500 mb-6">
              Teachers
            </p>
            <h1
              className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
              style={{ fontFamily: "serif" }}
            >
              Meet the Teachers of Yoga Flow
            </h1>
            <p
              className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: "serif" }}
            >
              Guided by the wisdom of Rishikesh, our mentors combine decades of
              experience with heartfelt teaching. Each class we offer is led by
              an instructor committed to nurturing your growth on and off the
              mat.
            </p>
          </header>

          <section className="grid gap-8 md:grid-cols-2">
            {teachers.map((teacher) => (
              <article
                key={teacher.name}
                className="relative overflow-hidden rounded-3xl border border-teal-200 bg-white/80 p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-teal-50/40 via-transparent to-transparent" />
                <div className="relative">
                  <p
                    className="text-sm uppercase tracking-wide text-[#d97706] mb-2"
                    style={{ fontFamily: "serif" }}
                  >
                    {teacher.title}
                  </p>
                  <h2
                    className="text-2xl font-semibold text-gray-900 mb-4"
                    style={{ fontFamily: "serif" }}
                  >
                    {teacher.name}
                  </h2>
                  <p
                    className="text-gray-600 leading-relaxed mb-6"
                    style={{ fontFamily: "serif" }}
                  >
                    {teacher.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    {teacher.specialties.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-teal-50 border border-teal-200 px-4 py-1 text-sm text-teal-700"
                        style={{ fontFamily: "serif" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p
                    className="text-sm text-gray-500"
                    style={{ fontFamily: "serif" }}
                  >
                    Experience: {teacher.years}
                  </p>
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
