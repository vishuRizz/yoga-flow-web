import React from 'react';
import { Moon, Target, Dumbbell, Activity, Flame, Award } from 'lucide-react';

export default function CurriculumSection() {
  const milestones = [
    {
      month: 1,
      title: "Foundation: Sleep Better, Feel Calmer",
      icon: Moon,
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
      focus: [
        "Calming breath practices (Nadi Shodhana, extended exhale)",
        "Gentle forward folds and hip openers",
        "Evening wind-down routines with Yoga Nidra",
        "Sleep hygiene habits"
      ],
      results: [
        "Sleep quality: Fall asleep 15–20 minutes faster",
        "Stress response: 2–3 point improvement (0–10 scale)",
        "Physical: Less neck and shoulder tension",
        "Habit: Consistent evening routine established"
      ],
      metrics: {
        sleep: "35 min → 18 min",
        stress: "7 → 4"
      },
      quote: "I finally sleep through the night without waking up anxious."
    },
    {
      month: 3,
      title: "Building: Strength, Stability, Less Pain",
      icon: Dumbbell,
      color: "bg-teal-50 border-teal-200",
      iconColor: "text-teal-600",
      focus: [
        "Foundational strength flows (chair, lunges, planks, bridges)",
        "Joint stability and mobility work",
        "\"Calm-on-demand\" toolkit for daily stress",
        "Consistent breathing under movement"
      ],
      results: [
        "Strength: Hold plank 30+ seconds; 10+ pain-free sit-to-stands",
        "Mobility: Move through your day without stiffness",
        "Stress management: Use 2-minute breath tools at work",
        "Energy: Feel stronger, more grounded, less fatigued",
        "Confidence: Know exactly what to do when stress appears"
      ],
      metrics: {
        plank: "12s → 38s",
        pain: "5/week → 1/week"
      },
      quote: "My back doesn't hurt after sitting all day, and I feel so much stronger."
    },
    {
      month: 6,
      title: "Mastery: Complete Transformation",
      icon: Award,
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
      focus: [
        "Full toolkit: Sleep, stress, strength, flexibility, weight management",
        "Self-guided practice routines you can do anywhere",
        "Sustained habits: movement, breath, mindfulness in daily life",
        "Community accountability and shared milestones"
      ],
      results: [
        "Sleep: Consistently restful nights; 7–8 hours quality sleep",
        "Stress + Anxiety: Calm, steady responses to challenges",
        "Strength: 60+ second planks, pain-free functional movement",
        "Flexibility: Touch toes, comfortable deep squat, open chest",
        "Weight + Metabolism: Sustainable movement habits",
        "Confidence: Own your practice—you know what works, when, and why"
      ],
      metrics: {
        sleep: "85% quality nights",
        stress: "7 → 3",
        plank: "12s → 75s",
        flexibility: "-6\" → +2\"",
        pain: "5 days/week → 0 days/week"
      },
      quote: "I sleep deeply, move without pain, and handle stress like a pro. Yoga Flow gave me my life back."
    }
  ];

  return (
    <section className="bg-gradient-to-b from-teal-50 via-teal-100 to-teal-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-gray-500 mb-6">
            Your Journey
          </p>
          <h2
            className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
            style={{ fontFamily: 'serif' }}
          >
            Your 6-Month Transformation Journey
          </h2>
          <p
            className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
            style={{ fontFamily: 'serif' }}
          >
            From better sleep in your first month to complete mastery in six months—
            here's the transformation path that awaits you.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-teal-300 to-green-300 -translate-x-1/2" />

          {/* Milestones */}
          <div className="space-y-16">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={milestone.month}
                  className={`relative flex flex-col md:flex-row gap-8 items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className="flex-1 w-full">
                    <div className={`${milestone.color} border-2 rounded-3xl p-8 shadow-lg`}>
                      {/* Header */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`${milestone.color} rounded-full p-4`}>
                          <Icon className={`w-8 h-8 ${milestone.iconColor}`} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-500">
                            Month {milestone.month}
                          </p>
                          <h3
                            className="text-2xl font-bold text-gray-900"
                            style={{ fontFamily: 'serif' }}
                          >
                            {milestone.title}
                          </h3>
                        </div>
                      </div>

                      {/* What You'll Focus On */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">
                          What You'll Focus On:
                        </h4>
                        <ul className="space-y-2">
                          {milestone.focus.map((item, i) => (
                            <li key={i} className="flex items-start text-gray-700 text-sm">
                              <span className="text-[#14b8a6] mr-2">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Results You'll See */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Results You'll See:
                        </h4>
                        <ul className="space-y-2">
                          {milestone.results.map((item, i) => (
                            <li key={i} className="flex items-start text-gray-700 text-sm">
                              <span className="text-[#14b8a6] mr-2">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Metrics */}
                      <div className="flex flex-wrap gap-3 mb-6">
                        {Object.entries(milestone.metrics).map(([key, value]) => (
                          <div
                            key={key}
                            className="bg-white rounded-lg px-4 py-2 text-sm border border-gray-200"
                          >
                            <span className="font-semibold capitalize">{key}: </span>
                            <span className="text-[#14b8a6] font-bold">{value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Quote */}
                      <div className="bg-white/70 rounded-xl p-4 border-l-4 border-[#14b8a6]">
                        <p className="text-gray-700 italic text-sm">
                          "{milestone.quote}"
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot (hidden on mobile) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#14b8a6] border-4 border-white shadow-lg" />

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-white/80 backdrop-blur-sm border-2 border-teal-200 rounded-3xl p-10 shadow-lg">
          <h3
            className="text-3xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'serif' }}
          >
            Ready to Begin Your Transformation?
          </h3>
          <p
            className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto"
            style={{ fontFamily: 'serif' }}
          >
            Join thousands who've transformed their lives through our proven 6-month program.
            Your journey to better sleep, less pain, and complete confidence starts today.
          </p>
          <button className="px-10 py-4 bg-[#14b8a6] text-white rounded-full font-medium text-lg hover:bg-[#0d9488] transition-colors shadow-lg">
            Start Your Journey Now
          </button>
        </div>
      </div>
    </section>
  );
}