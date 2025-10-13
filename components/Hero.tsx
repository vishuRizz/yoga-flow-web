import React from "react";

export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero.jpeg')" }}
    >
      <div className="h-full flex items-center px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-2xl">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 md:mb-6 leading-tight"
            style={{ fontFamily: "serif" }}
          >
            Train with
            <br />
            Rishikesh s Best
            <br />
            Yoga Teachers –<br />
            Online.
          </h1>

          <p
            className="text-sm sm:text-base md:text-lg text-white mb-6 md:mb-10"
            style={{ fontFamily: "serif" }}
          >
            Live sessions from the Yoga Capital of the World –
            <br className="hidden sm:block" />
            Learn anytime, anywhere.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5">
            <button className="px-6 sm:px-9 py-3 sm:py-3.5 bg-[#ff8c42] text-white rounded-full text-sm sm:text-base font-medium hover:bg-[#ff7a28] transition-colors">
              Join Our Classes
            </button>
            <button className="px-6 sm:px-9 py-3 sm:py-3.5 bg-transparent border-2 border-[#ff8c42] text-[#ff8c42] rounded-full text-sm sm:text-base font-medium hover:bg-[#ff8c42] hover:text-white transition-colors">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
