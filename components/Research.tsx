import React from 'react';

export default function Research() {
  return (
    <section className="bg-[#f5f1eb] py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-black mb-12" style={{ fontFamily: 'serif' }}>
          Backed by Clinical Research
        </h2>
        
        <div className="mb-8">
          <p className="text-7xl md:text-8xl font-bold text-[#ff8c42] mb-2" style={{ fontFamily: 'serif' }}>
            5,000+
          </p>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-500 leading-relaxed max-w-4xl mx-auto" style={{ fontFamily: 'serif' }}>
          Yoga Flow evidence-based program has helped over 5,000 urban professionals completely reverse health issues in just 24 weeks.
        </p>
      </div>
    </section>
  );
}