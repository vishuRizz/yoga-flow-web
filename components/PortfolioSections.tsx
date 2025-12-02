import React from 'react';
import { MapPin, Phone, Mail, Instagram, Youtube, Award, BookOpen, Briefcase, Star } from 'lucide-react';

export default function PortfolioSections() {
  return (
    <div className="bg-[0f766e]">
      {/* Existing Research Section */}
      {/* <section className="py-20 px-6 border-b border-gray-200">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-12" style={{ fontFamily: 'serif' }}>
            Backed by Clinical Research
          </h2>

          <div className="mb-8">
            <p className="text-7xl md:text-8xl font-bold text-[#14b8a6] mb-2" style={{ fontFamily: 'serif' }}>
              5,000+
            </p>
          </div>

          <p className="text-xl md:text-2xl text-gray-500 leading-relaxed max-w-4xl mx-auto" style={{ fontFamily: 'serif' }}>
            Yoga Flow evidence-based program has helped over 5,000 urban professionals completely reverse health issues in just 24 weeks.
          </p>
        </div>
      </section> */}

      {/* New Instructors Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-16 text-center" style={{ fontFamily: 'serif' }}>
            Meet Our Instructors
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Pawan Deep Negi */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-black mb-2" style={{ fontFamily: 'serif' }}>Pawan Deep Negi</h3>
                <p className="text-[#14b8a6] font-medium text-lg mb-4">Yoga Trainer</p>

                <div className="flex flex-col gap-2 text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Rishikesh (Dehradun) Uttarakhand</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>+91 844 577 2880</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>pawanraj.negi85@gmail.com</span>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  Dedicated yoga trainer passionate about improving clients' health, wellness, and quality of life.
                  Creating yoga exercise programs using the latest techniques for teens, adults, and senior citizens
                  tailored to individual strength and needs.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-black mb-3 flex items-center gap-2">
                    <Star className="w-5 h-5 text-[#14b8a6]" /> Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Hatha & Ashtanga Yoga", "Vinyasa/Power flow", "Adjustment & Alignment", "Mantra & Meditation", "Breath awareness", "Weight training"].map((skill, i) => (
                      <span key={i} className="bg-teal-50 text-orange-800 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-black mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#14b8a6]" /> Education & Certification
                  </h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• MA in YOGA (Uttarakhand Sanskrit University)</li>
                    <li>• Bachelor of Science in Education</li>
                    <li>• Certified Yoga Instructor & TTC Trainer</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-black mb-3 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-[#14b8a6]" /> Experience
                  </h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li><span className="font-medium">2023-Present:</span> Adishakti Yogashala & Rama school of yoga</li>
                    <li><span className="font-medium">2021-2023:</span> Rishikesh Yoga Flow, Siddhi yoga & Triguna yoga</li>
                    <li><span className="font-medium">2019-2021:</span> Freelance Yoga Trainer</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Aradhna Uniyal */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-black mb-2" style={{ fontFamily: 'serif' }}>Aradhna Uniyal</h3>
                <p className="text-[#14b8a6] font-medium text-lg mb-4">Yoga Practitioner</p>

                <div className="flex flex-col gap-2 text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Rishikesh, Uttarakhand, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>+91 9897425945</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>uniyalaradhna7@gmail.com</span>
                  </div>
                  <div className="flex gap-4 mt-2">
                    <a href="https://instagram.com/aradhnayoga" className="text-pink-600 hover:text-pink-700 flex items-center gap-1">
                      <Instagram className="w-4 h-4" /> @aradhnayoga
                    </a>
                    <a href="https://youtube.com/@Aradhnayoga" className="text-red-600 hover:text-red-700 flex items-center gap-1">
                      <Youtube className="w-4 h-4" /> @Aradhnayoga
                    </a>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  Passionate and dedicated Yoga Practitioner from the yoga capital of the world — Rishikesh.
                  Rooted in yogic discipline since the age of 8, with over a decade of consistent personal practice
                  and exposure to the spiritual and cultural depths of yoga.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-black mb-3 flex items-center gap-2">
                    <Star className="w-5 h-5 text-[#14b8a6]" /> Skills & Specialization
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Traditional Hatha Yoga", "Ashtanga Vinyasa", "Yoga for Well-being", "Yogic Lifestyle", "Hindi (Native)", "English (Proficient)"].map((skill, i) => (
                      <span key={i} className="bg-teal-50 text-orange-800 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-black mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#14b8a6]" /> Education
                  </h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• B.A. in Yoga (Ongoing, Uttarakhand Sanskrit University)</li>
                    <li>• Senior Secondary (DSB International Public School)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-black mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#14b8a6]" /> Achievements
                  </h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• 2nd Position – State Level Yogasana Championship</li>
                    <li>• 300-hour Yoga TTC Team Member</li>
                    <li>• 10+ Years of Yoga Practice</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}