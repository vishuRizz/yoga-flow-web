import React from 'react';
import { Globe, Mic, Users, Heart } from 'lucide-react';

export default function About() {
  return (
    <section className="bg-[#f5f1eb] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6" style={{ fontFamily: 'serif' }}>
            What Makes Yoga Flow Unique
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-4xl mx-auto" style={{ fontFamily: 'serif' }}>
            Yoga Flow offers a unique blend of traditional yoga practices and modern techniques, tailored for urban professionals seeking balance and well-being.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-[#ff8c42]" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'serif' }}>
              Rooted in Rishikesh
            </h3>
            <p className="text-gray-500 leading-relaxed" style={{ fontFamily: 'serif' }}>
              Experience authentic yoga from the heart of Rishikesh, the world's yoga capital.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-6">
              <Mic className="w-8 h-8 text-[#ff8c42]" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'serif' }}>
              Live
            </h3>
            <p className="text-gray-500 leading-relaxed" style={{ fontFamily: 'serif' }}>
              Join live sessions with experienced teachers for real-time guidance and interaction.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-[#ff8c42]" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'serif' }}>
              Community-Driven
            </h3>
            <p className="text-gray-500 leading-relaxed" style={{ fontFamily: 'serif' }}>
              Connect with a supportive community of fellow yoga enthusiasts on your journey.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-[#ff8c42]" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'serif' }}>
              Designed for Peace
            </h3>
            <p className="text-gray-500 leading-relaxed" style={{ fontFamily: 'serif' }}>
              Find inner peace and balance with our carefully crafted yoga programs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}