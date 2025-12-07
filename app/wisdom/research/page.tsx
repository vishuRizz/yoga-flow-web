"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, TrendingUp, Award, Clock } from "lucide-react";
import { useState } from "react";

interface ResearchLink {
    title: string;
    url: string;
}

interface ResearchCategory {
    id: string;
    emoji: string;
    title: string;
    description: string;
    keyFindings: string[];
    effectSize?: string;
    links: ResearchLink[];
    color: string;
}

const researchData: ResearchCategory[] = [
    {
        id: "anxiety",
        emoji: "🕉️",
        title: "Anxiety Reduction",
        description: "40% reduction in anxiety symptoms in clinical populations",
        keyFindings: [
            "Standardized Mean Difference (SMD) = -0.43 (small-medium effect) vs. no treatment controls",
            "Cohen's d = -0.86 (large effect) vs. active comparators",
            "Effect maintained at 6+ months follow-up in multiple studies"
        ],
        effectSize: "40%",
        color: "from-purple-500 to-pink-500",
        links: [
            { title: "Meta-analysis of yoga for anxiety disorders", url: "https://pubmed.ncbi.nlm.nih.gov/29697885/" },
            { title: "Systematic review of yoga interventions", url: "https://pubmed.ncbi.nlm.nih.gov/37369553/" }
        ]
    },
    {
        id: "blood-pressure",
        emoji: "💗",
        title: "Blood Pressure Reduction",
        description: "4-8 mmHg systolic BP reduction consistently across studies",
        keyFindings: [
            "3.6-6.1 mmHg diastolic BP reduction",
            "Larger effects (8+ mmHg reduction) with comprehensive yoga (asanas + pranayama + meditation)",
            "24-hour ambulatory BP monitoring showed sustained effects"
        ],
        effectSize: "4-8 mmHg",
        color: "from-red-500 to-rose-500",
        links: [
            { title: "Yoga for hypertension management", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3948002/" },
            { title: "Effects on cardiovascular parameters", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3679769/" },
            { title: "Comprehensive yoga intervention study", url: "https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0323268" }
        ]
    },
    {
        id: "back-pain",
        emoji: "🦴",
        title: "Chronic Back Pain Improvement",
        description: "40-60% improvement in back pain within 3 weeks",
        keyFindings: [
            "Medium-to-large effect (d=0.645) on functional disability",
            "62.3% effect size for pain reduction",
            "1.5-point reduction in pain intensity (0-10 scale) at 12 weeks",
            "Sustained improvements at 24-week follow-up"
        ],
        effectSize: "40-60%",
        color: "from-amber-500 to-orange-500",
        links: [
            { title: "Yoga for chronic low back pain", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3805350/" },
            { title: "JAMA Network study on back pain", url: "https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2825746" }
        ]
    },
    {
        id: "stress",
        emoji: "🧘",
        title: "Stress & Cortisol Reduction",
        description: "Significant cortisol reduction in yoga practitioners vs. controls",
        keyFindings: [
            "High correlation (r=0.59, p=0.008) between cortisol drop and depression improvement",
            "Enhanced parasympathetic activity and reduced stress markers",
            "Lower baseline cortisol levels in regular yoga practitioners"
        ],
        effectSize: "Significant",
        color: "from-green-500 to-emerald-500",
        links: [
            { title: "Cortisol and stress response study", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3768222/" },
            { title: "Biological mechanisms of yoga", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4784068/" }
        ]
    },
    {
        id: "weight",
        emoji: "⚗️",
        title: "Weight & Metabolic Improvement",
        description: "1.2-1.4 kg/m² BMI reduction in overweight populations",
        keyFindings: [
            "Significant decrease in body fat mass at 8-12 weeks",
            "Muscle mass improvement rate of 0.515 per week",
            "15% increase in metabolism with regular practice",
            "Waist circumference reduction of 4-6 cm in centrally obese individuals"
        ],
        effectSize: "1.2-1.4 kg/m²",
        color: "from-blue-500 to-cyan-500",
        links: [
            { title: "Yoga for weight management", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8410386/" },
            { title: "Metabolic effects of yoga practice", url: "https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2018.00466/full" }
        ]
    },
    {
        id: "depression",
        emoji: "✨",
        title: "Depression Symptom Reduction",
        description: "45% improvement in depression scores (HAM-D scale)",
        keyFindings: [
            "Cohen's d = -0.60 to -0.64 (moderate-to-large effect)",
            "Higher remission rates compared to controls (OR = 3.20)",
            "Sustained improvements at 6-month follow-up"
        ],
        effectSize: "45%",
        color: "from-yellow-500 to-amber-500",
        links: [
            { title: "Yoga for depression: Recent evidence", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11919030/" },
            { title: "Meta-analysis of yoga and depression", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10077871/" }
        ]
    },
    {
        id: "cardiovascular",
        emoji: "🫀",
        title: "Cardiovascular Health",
        description: "6.2 bpm resting heart rate reduction (Cohen's d = 1.42)",
        keyFindings: [
            "Improved Heart Rate Variability (HRV) - enhanced parasympathetic activity",
            "17% lower cardiovascular mortality risk associated with 5+ bpm HR reduction",
            "Enhanced cardiac autonomic regulation with regular practice"
        ],
        effectSize: "6.2 bpm",
        color: "from-pink-500 to-red-500",
        links: [
            { title: "Yoga and heart rate variability", url: "https://journals.acspublisher.com/index.php/irjay/article/view/20827" },
            { title: "Cardiovascular effects study", url: "https://healthcare-bulletin.co.uk/article/effect-of-yoga-on-resting-heart-rate-and-blood-pressure-a-controlled-physiological-study-3832/" }
        ]
    },
    {
        id: "sleep",
        emoji: "💭",
        title: "Sleep Quality Improvement",
        description: "40% improvement in sleep quality scores at 4 weeks",
        keyFindings: [
            "Significant reduction in sleep latency (time to fall asleep)",
            "Increased N3 (deep sleep) percentage",
            "13.19% improvement in insomnia severity",
            "Enhanced sleep efficiency and reduced awakenings"
        ],
        effectSize: "40%",
        color: "from-indigo-500 to-purple-500",
        links: [
            { title: "Yoga for sleep disorders", url: "https://jhrlmc.com/index.php/home/article/view/897" },
            { title: "Sleep quality meta-analysis", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9012014/" },
            { title: "Neurology study on sleep", url: "https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2025.1566445/full" }
        ]
    },
    {
        id: "inflammation",
        emoji: "🧬",
        title: "Inflammation Reduction",
        description: "Reduced TNF-α levels (significant p<0.05)",
        keyFindings: [
            "Lower IL-6 and CRP levels in yoga practitioners",
            "Decreased inflammatory response to physical stress",
            "DNA methylation changes in inflammatory gene regions"
        ],
        effectSize: "p<0.05",
        color: "from-orange-500 to-red-500",
        links: [
            { title: "Anti-inflammatory effects of yoga", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8842003/" },
            { title: "Molecular mechanisms study", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4525504/" }
        ]
    }
];

export default function ResearchPage() {
    const [expandedCard, setExpandedCard] = useState<string | null>(null);

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
                {/* Hero Section */}
                <section className="pt-32 pb-16 px-4 md:px-6">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="inline-block mb-6 px-6 py-2 bg-teal-100 rounded-full">
                            <span className="text-teal-800 font-medium text-sm">Evidence-Based Practice</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-teal-900 mb-6 leading-tight">
                            Clinical Evidence for<br />Yoga Benefits
                        </h1>
                        <p className="text-xl md:text-2xl text-teal-700 max-w-3xl mx-auto font-light leading-relaxed">
                            Discover the scientifically proven health benefits of yoga, backed by peer-reviewed research and clinical trials
                        </p>
                    </div>
                </section>

                {/* Research Categories Grid */}
                <section className="pb-20 px-4 md:px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {researchData.map((category) => (
                                <div
                                    key={category.id}
                                    className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-teal-100 hover:border-teal-300 cursor-pointer"
                                    onClick={() => setExpandedCard(expandedCard === category.id ? null : category.id)}
                                >
                                    {/* Gradient Accent */}
                                    <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${category.color} rounded-t-3xl`} />

                                    {/* Emoji Icon */}
                                    <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                        {category.emoji}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-serif font-bold text-teal-900 mb-3">
                                        {category.title}
                                    </h3>

                                    {/* Effect Size Badge */}
                                    <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${category.color} rounded-full mb-4`}>
                                        <TrendingUp className="w-4 h-4 text-white" />
                                        <span className="text-white font-bold text-sm">{category.effectSize}</span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-teal-700 text-base leading-relaxed mb-4">
                                        {category.description}
                                    </p>

                                    {/* Key Findings - Expandable */}
                                    {expandedCard === category.id && (
                                        <div className="mt-4 space-y-3 animate-fadeIn">
                                            <h4 className="text-sm font-semibold text-teal-800 uppercase tracking-wide flex items-center gap-2">
                                                <Award className="w-4 h-4" />
                                                Key Findings
                                            </h4>
                                            <ul className="space-y-2">
                                                {category.keyFindings.map((finding, idx) => (
                                                    <li key={idx} className="text-sm text-teal-600 pl-4 border-l-2 border-teal-300">
                                                        {finding}
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* Research Links */}
                                            <div className="mt-4 pt-4 border-t border-teal-200">
                                                <h4 className="text-sm font-semibold text-teal-800 uppercase tracking-wide mb-3">
                                                    Research Papers
                                                </h4>
                                                <div className="space-y-2">
                                                    {category.links.map((link, idx) => (
                                                        <a
                                                            key={idx}
                                                            href={link.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-2 text-sm text-teal-600 hover:text-teal-800 transition-colors group/link"
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                                                            <span className="underline">{link.title}</span>
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Expand Indicator */}
                                    <div className="mt-4 text-center">
                                        <span className="text-xs text-teal-500 font-medium">
                                            {expandedCard === category.id ? "Click to collapse" : "Click to expand"}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Clinical Evidence Summary */}
                <section className="pb-20 px-4 md:px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-3xl p-12 shadow-2xl text-white">
                            <h2 className="text-4xl font-serif font-bold mb-8 text-center">
                                Key Clinical Evidence Summary
                            </h2>

                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                {/* Most Robust Evidence */}
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                                    <h3 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
                                        <Award className="w-6 h-6" />
                                        Most Robust Evidence
                                    </h3>
                                    <p className="text-sm text-teal-100 mb-4">Multiple RCTs, Large Effect Sizes</p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <span className="text-2xl">💗</span>
                                            <div>
                                                <strong>Blood Pressure Reduction:</strong> 4-8 mmHg consistently
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-2xl">🦴</span>
                                            <div>
                                                <strong>Back Pain Relief:</strong> 40-60% improvement in 3 weeks
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-2xl">🕉️</span>
                                            <div>
                                                <strong>Anxiety Reduction:</strong> 40% symptom reduction
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-2xl">💭</span>
                                            <div>
                                                <strong>Sleep Quality:</strong> 40% improvement in 4 weeks
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                {/* Strong Supporting Evidence */}
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                                    <h3 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
                                        <TrendingUp className="w-6 h-6" />
                                        Strong Supporting Evidence
                                    </h3>
                                    <p className="text-sm text-teal-100 mb-4">Consistent positive outcomes</p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <span className="text-2xl">✨</span>
                                            <div>
                                                <strong>Depression:</strong> 45% score improvement
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-2xl">⚗️</span>
                                            <div>
                                                <strong>Weight Management:</strong> 1.2-1.4 kg/m² BMI reduction
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-2xl">🫀</span>
                                            <div>
                                                <strong>Heart Rate Variability:</strong> Enhanced autonomic function
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-2xl">🧬</span>
                                            <div>
                                                <strong>Inflammation:</strong> Reduced inflammatory markers
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Optimal Practice Parameters */}
                <section className="pb-32 px-4 md:px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="bg-white rounded-3xl p-12 shadow-xl border border-teal-200">
                            <div className="text-center mb-10">
                                <Clock className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                                <h2 className="text-4xl font-serif font-bold text-teal-900 mb-3">
                                    Optimal Practice Parameters
                                </h2>
                                <p className="text-teal-700 text-lg">
                                    Research-backed recommendations for maximum benefits
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl">
                                    <div className="text-5xl font-bold text-teal-600 mb-2">8-12</div>
                                    <div className="text-sm text-teal-800 uppercase tracking-wide font-semibold mb-2">Weeks</div>
                                    <p className="text-teal-700 text-sm">Minimum duration for sustained effects</p>
                                </div>

                                <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl">
                                    <div className="text-5xl font-bold text-cyan-600 mb-2">3-5</div>
                                    <div className="text-sm text-cyan-800 uppercase tracking-wide font-semibold mb-2">Sessions/Week</div>
                                    <p className="text-cyan-700 text-sm">Optimal frequency for best results</p>
                                </div>

                                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl">
                                    <div className="text-5xl font-bold text-blue-600 mb-2">45-60</div>
                                    <div className="text-sm text-blue-800 uppercase tracking-wide font-semibold mb-2">Minutes</div>
                                    <p className="text-blue-700 text-sm">Ideal session length</p>
                                </div>
                            </div>

                            <div className="mt-10 p-6 bg-teal-50 rounded-2xl border-l-4 border-teal-600">
                                <h3 className="text-lg font-serif font-bold text-teal-900 mb-3">
                                    Recommended Components
                                </h3>
                                <p className="text-teal-700 leading-relaxed">
                                    For optimal results, combine <strong>Asanas</strong> (physical postures) +
                                    <strong> Pranayama</strong> (breathing exercises) +
                                    <strong> Meditation</strong> in each session. This comprehensive approach
                                    has shown the largest effect sizes across multiple health outcomes.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
        </>
    );
}
