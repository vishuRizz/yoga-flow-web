"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Filter, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

type DifficultyLevel = "Beginner" | "Intermediate" | "Advanced";
type Category = "All" | "Standing" | "Seated" | "Balancing" | "Backbends" | "Inversions";

interface Asana {
    id: string;
    name: string;
    sanskritName: string;
    emoji: string;
    category: Exclude<Category, "All">;
    difficulty: DifficultyLevel;
    description: string;
    benefits: string[];
    instructions: string[];
    contraindications: string[];
    duration: string;
}

const asanasData: Asana[] = [
    // Standing Poses
    {
        id: "tadasana",
        name: "Mountain Pose",
        sanskritName: "Tadasana",
        emoji: "🧘",
        category: "Standing",
        difficulty: "Beginner",
        description: "The foundation of all standing poses, promoting proper posture and body awareness.",
        benefits: [
            "Improves posture and body alignment",
            "Strengthens thighs, knees, and ankles",
            "Increases awareness of body positioning",
            "Reduces flat feet",
            "Relieves sciatica"
        ],
        instructions: [
            "Stand with feet together, heels slightly apart",
            "Distribute weight evenly across both feet",
            "Engage thigh muscles and lift kneecaps",
            "Draw shoulders back and down",
            "Lengthen through the crown of your head",
            "Breathe deeply and hold for 30-60 seconds"
        ],
        contraindications: ["Headache", "Insomnia", "Low blood pressure"],
        duration: "30-60 seconds"
    },
    {
        id: "vrksasana",
        name: "Tree Pose",
        sanskritName: "Vrksasana",
        emoji: "🌳",
        category: "Standing",
        difficulty: "Beginner",
        description: "A balancing pose that strengthens legs and core while improving focus and concentration.",
        benefits: [
            "Improves balance and stability",
            "Strengthens legs, ankles, and feet",
            "Opens hips and stretches inner thighs",
            "Improves concentration and focus",
            "Relieves sciatica"
        ],
        instructions: [
            "Start in Mountain Pose",
            "Shift weight to left foot",
            "Place right foot on inner left thigh or calf (avoid knee)",
            "Bring palms together at chest or overhead",
            "Fix gaze on a point ahead",
            "Hold for 30-60 seconds, then switch sides"
        ],
        contraindications: ["High blood pressure", "Insomnia", "Headache"],
        duration: "30-60 seconds per side"
    },
    {
        id: "virabhadrasana-1",
        name: "Warrior I",
        sanskritName: "Virabhadrasana I",
        emoji: "⚔️",
        category: "Standing",
        difficulty: "Intermediate",
        description: "A powerful standing pose that builds strength, stamina, and confidence.",
        benefits: [
            "Strengthens shoulders, arms, legs, and back",
            "Opens chest and lungs",
            "Stretches hip flexors and quadriceps",
            "Improves focus and balance",
            "Builds stamina and endurance"
        ],
        instructions: [
            "Step feet 3-4 feet apart",
            "Turn right foot out 90 degrees, left foot in slightly",
            "Bend right knee to 90 degrees",
            "Square hips forward",
            "Raise arms overhead, palms facing each other",
            "Hold for 30-60 seconds, then switch sides"
        ],
        contraindications: ["High blood pressure", "Heart problems", "Shoulder injuries"],
        duration: "30-60 seconds per side"
    },
    {
        id: "virabhadrasana-2",
        name: "Warrior II",
        sanskritName: "Virabhadrasana II",
        emoji: "🗡️",
        category: "Standing",
        difficulty: "Intermediate",
        description: "A grounding pose that builds strength and endurance while opening the hips.",
        benefits: [
            "Strengthens legs, ankles, and feet",
            "Opens hips and chest",
            "Improves stamina and concentration",
            "Stimulates abdominal organs",
            "Relieves backache"
        ],
        instructions: [
            "Step feet 3-4 feet apart",
            "Turn right foot out 90 degrees, left foot in slightly",
            "Bend right knee over ankle",
            "Extend arms parallel to floor",
            "Gaze over right fingertips",
            "Hold for 30-60 seconds, then switch sides"
        ],
        contraindications: ["Diarrhea", "High blood pressure", "Neck problems"],
        duration: "30-60 seconds per side"
    },

    // Seated Poses
    {
        id: "padmasana",
        name: "Lotus Pose",
        sanskritName: "Padmasana",
        emoji: "🪷",
        category: "Seated",
        difficulty: "Advanced",
        description: "The classic meditation pose that calms the mind and opens the hips.",
        benefits: [
            "Calms the mind and reduces stress",
            "Opens hips and stretches ankles",
            "Improves posture and spinal alignment",
            "Stimulates pelvis and spine",
            "Eases menstrual discomfort"
        ],
        instructions: [
            "Sit with legs extended",
            "Bend right knee and place foot on left thigh",
            "Bend left knee and place foot on right thigh",
            "Keep spine straight and shoulders relaxed",
            "Rest hands on knees in mudra",
            "Hold for 1-5 minutes"
        ],
        contraindications: ["Ankle injury", "Knee injury", "Hip problems"],
        duration: "1-5 minutes"
    },
    {
        id: "baddha-konasana",
        name: "Butterfly Pose",
        sanskritName: "Baddha Konasana",
        emoji: "🦋",
        category: "Seated",
        difficulty: "Beginner",
        description: "A gentle hip opener that stimulates abdominal organs and improves circulation.",
        benefits: [
            "Opens hips and stretches inner thighs",
            "Stimulates abdominal organs and ovaries",
            "Improves circulation in pelvis",
            "Relieves menstrual discomfort",
            "Reduces fatigue and anxiety"
        ],
        instructions: [
            "Sit with legs extended",
            "Bend knees and bring soles of feet together",
            "Draw heels toward pelvis",
            "Hold feet with hands",
            "Gently press knees toward floor",
            "Hold for 1-5 minutes"
        ],
        contraindications: ["Groin injury", "Knee injury", "Lower back problems"],
        duration: "1-5 minutes"
    },
    {
        id: "ardha-matsyendrasana",
        name: "Seated Twist",
        sanskritName: "Ardha Matsyendrasana",
        emoji: "🔄",
        category: "Seated",
        difficulty: "Intermediate",
        description: "A spinal twist that energizes the spine and stimulates digestive organs.",
        benefits: [
            "Increases spinal flexibility",
            "Stimulates digestive organs",
            "Detoxifies internal organs",
            "Relieves backache and fatigue",
            "Opens shoulders and hips"
        ],
        instructions: [
            "Sit with legs extended",
            "Bend right knee and place foot outside left thigh",
            "Bend left knee and tuck foot near right hip",
            "Twist torso to the right",
            "Place left elbow outside right knee",
            "Hold for 30-60 seconds, then switch sides"
        ],
        contraindications: ["Back injury", "Spinal problems", "Pregnancy"],
        duration: "30-60 seconds per side"
    },
    {
        id: "dandasana",
        name: "Staff Pose",
        sanskritName: "Dandasana",
        emoji: "📐",
        category: "Seated",
        difficulty: "Beginner",
        description: "The foundation for seated poses, improving posture and core strength.",
        benefits: [
            "Improves posture and alignment",
            "Strengthens back muscles",
            "Stretches shoulders and chest",
            "Calms the mind",
            "Prepares body for deeper stretches"
        ],
        instructions: [
            "Sit with legs extended straight ahead",
            "Flex feet and press heels forward",
            "Place hands beside hips, fingers pointing forward",
            "Lengthen spine and lift chest",
            "Draw shoulders back and down",
            "Hold for 30-60 seconds"
        ],
        contraindications: ["Lower back injury", "Wrist injury"],
        duration: "30-60 seconds"
    },

    // Balancing Poses
    {
        id: "bakasana",
        name: "Crow Pose",
        sanskritName: "Bakasana",
        emoji: "🕊️",
        category: "Balancing",
        difficulty: "Advanced",
        description: "An arm balance that builds upper body strength and mental focus.",
        benefits: [
            "Strengthens arms, wrists, and core",
            "Improves balance and coordination",
            "Builds mental focus and confidence",
            "Tones abdominal muscles",
            "Opens groin and hip flexors"
        ],
        instructions: [
            "Start in a squat with feet together",
            "Place hands on floor, shoulder-width apart",
            "Bend elbows slightly and lean forward",
            "Place knees on upper arms",
            "Shift weight forward and lift feet",
            "Hold for 10-30 seconds"
        ],
        contraindications: ["Wrist injury", "Shoulder injury", "Pregnancy"],
        duration: "10-30 seconds"
    },
    {
        id: "garudasana",
        name: "Eagle Pose",
        sanskritName: "Garudasana",
        emoji: "🦅",
        category: "Balancing",
        difficulty: "Intermediate",
        description: "A standing balance that improves focus while stretching shoulders and hips.",
        benefits: [
            "Improves balance and concentration",
            "Stretches shoulders, upper back, and thighs",
            "Strengthens ankles and calves",
            "Opens hips and IT band",
            "Relieves tension in shoulders"
        ],
        instructions: [
            "Stand in Mountain Pose",
            "Bend knees slightly and lift left foot",
            "Wrap left leg around right leg",
            "Cross right arm over left at elbows",
            "Bring palms together",
            "Hold for 15-30 seconds, then switch sides"
        ],
        contraindications: ["Knee injury", "Ankle injury", "Shoulder problems"],
        duration: "15-30 seconds per side"
    },
    {
        id: "ardha-chandrasana",
        name: "Half Moon Pose",
        sanskritName: "Ardha Chandrasana",
        emoji: "🌙",
        category: "Balancing",
        difficulty: "Intermediate",
        description: "A standing balance that strengthens the entire body while improving coordination.",
        benefits: [
            "Improves balance and coordination",
            "Strengthens ankles, legs, and core",
            "Stretches hamstrings and spine",
            "Opens chest and shoulders",
            "Relieves stress and anxiety"
        ],
        instructions: [
            "Start in Triangle Pose on right side",
            "Bend right knee and place right hand on floor",
            "Straighten right leg and lift left leg parallel to floor",
            "Stack left hip over right hip",
            "Extend left arm toward ceiling",
            "Hold for 15-30 seconds, then switch sides"
        ],
        contraindications: ["Low blood pressure", "Headache", "Neck injury"],
        duration: "15-30 seconds per side"
    },

    // Backbends
    {
        id: "bhujangasana",
        name: "Cobra Pose",
        sanskritName: "Bhujangasana",
        emoji: "🐍",
        category: "Backbends",
        difficulty: "Beginner",
        description: "A gentle backbend that strengthens the spine and opens the chest.",
        benefits: [
            "Strengthens spine and buttocks",
            "Opens chest and shoulders",
            "Improves flexibility of spine",
            "Stimulates abdominal organs",
            "Relieves stress and fatigue"
        ],
        instructions: [
            "Lie face down with legs extended",
            "Place hands under shoulders",
            "Press tops of feet into floor",
            "Lift chest using back muscles",
            "Keep elbows slightly bent",
            "Hold for 15-30 seconds"
        ],
        contraindications: ["Back injury", "Pregnancy", "Carpal tunnel syndrome"],
        duration: "15-30 seconds"
    },
    {
        id: "ustrasana",
        name: "Camel Pose",
        sanskritName: "Ustrasana",
        emoji: "🐪",
        category: "Backbends",
        difficulty: "Intermediate",
        description: "A deep backbend that opens the entire front body and energizes the spine.",
        benefits: [
            "Opens chest, shoulders, and hip flexors",
            "Strengthens back muscles",
            "Improves posture",
            "Stimulates organs in abdomen and neck",
            "Relieves lower back pain"
        ],
        instructions: [
            "Kneel with knees hip-width apart",
            "Place hands on lower back",
            "Lift chest and begin to arch back",
            "Reach for heels with hands",
            "Keep neck neutral or drop head back",
            "Hold for 15-30 seconds"
        ],
        contraindications: ["High or low blood pressure", "Neck injury", "Back injury"],
        duration: "15-30 seconds"
    },
    {
        id: "setu-bandhasana",
        name: "Bridge Pose",
        sanskritName: "Setu Bandhasana",
        emoji: "🌉",
        category: "Backbends",
        difficulty: "Beginner",
        description: "A gentle backbend that strengthens the back and opens the chest.",
        benefits: [
            "Strengthens back, glutes, and hamstrings",
            "Opens chest and shoulders",
            "Calms the mind and reduces anxiety",
            "Stimulates thyroid gland",
            "Improves digestion"
        ],
        instructions: [
            "Lie on back with knees bent, feet hip-width apart",
            "Place arms alongside body, palms down",
            "Press feet into floor and lift hips",
            "Interlace fingers under back",
            "Roll shoulders under",
            "Hold for 30-60 seconds"
        ],
        contraindications: ["Neck injury", "Back injury", "Pregnancy (late term)"],
        duration: "30-60 seconds"
    },
    {
        id: "dhanurasana",
        name: "Bow Pose",
        sanskritName: "Dhanurasana",
        emoji: "🎯",
        category: "Backbends",
        difficulty: "Intermediate",
        description: "A deep backbend that stretches the entire front body and strengthens the back.",
        benefits: [
            "Strengthens entire back body",
            "Opens chest, shoulders, and hip flexors",
            "Improves posture",
            "Stimulates digestive organs",
            "Relieves menstrual discomfort"
        ],
        instructions: [
            "Lie face down with arms alongside body",
            "Bend knees and reach back to grasp ankles",
            "Lift chest and thighs off floor",
            "Press feet into hands",
            "Gaze forward",
            "Hold for 15-30 seconds"
        ],
        contraindications: ["High or low blood pressure", "Hernia", "Neck injury"],
        duration: "15-30 seconds"
    },

    // Inversions & Restorative
    {
        id: "adho-mukha-svanasana",
        name: "Downward Dog",
        sanskritName: "Adho Mukha Svanasana",
        emoji: "🔻",
        category: "Inversions",
        difficulty: "Beginner",
        description: "A foundational inversion that energizes the body while calming the mind.",
        benefits: [
            "Strengthens arms, shoulders, and legs",
            "Stretches hamstrings, calves, and spine",
            "Energizes the body",
            "Calms the mind and relieves stress",
            "Improves digestion"
        ],
        instructions: [
            "Start on hands and knees",
            "Tuck toes and lift hips toward ceiling",
            "Straighten legs and press heels toward floor",
            "Spread fingers wide and press into hands",
            "Relax head between arms",
            "Hold for 1-3 minutes"
        ],
        contraindications: ["Carpal tunnel syndrome", "High blood pressure", "Late pregnancy"],
        duration: "1-3 minutes"
    },
    {
        id: "sarvangasana",
        name: "Shoulder Stand",
        sanskritName: "Sarvangasana",
        emoji: "🙃",
        category: "Inversions",
        difficulty: "Advanced",
        description: "The 'queen of asanas' that benefits the entire body and calms the nervous system.",
        benefits: [
            "Calms nervous system and reduces stress",
            "Stimulates thyroid and metabolism",
            "Improves circulation",
            "Strengthens shoulders and core",
            "Relieves varicose veins"
        ],
        instructions: [
            "Lie on back with arms alongside body",
            "Lift legs overhead and support lower back with hands",
            "Straighten legs toward ceiling",
            "Keep weight on shoulders, not neck",
            "Breathe deeply",
            "Hold for 30 seconds to 3 minutes"
        ],
        contraindications: ["Neck injury", "High blood pressure", "Menstruation", "Pregnancy"],
        duration: "30 seconds - 3 minutes"
    },
    {
        id: "balasana",
        name: "Child's Pose",
        sanskritName: "Balasana",
        emoji: "💤",
        category: "Inversions",
        difficulty: "Beginner",
        description: "A restorative pose that gently stretches the back while calming the mind.",
        benefits: [
            "Gently stretches hips, thighs, and ankles",
            "Calms the mind and relieves stress",
            "Relieves back and neck pain",
            "Massages internal organs",
            "Promotes relaxation and rest"
        ],
        instructions: [
            "Kneel on floor with big toes touching",
            "Sit back on heels",
            "Separate knees hip-width apart",
            "Fold forward and rest forehead on floor",
            "Extend arms forward or alongside body",
            "Hold for 1-5 minutes"
        ],
        contraindications: ["Knee injury", "Pregnancy", "Diarrhea"],
        duration: "1-5 minutes"
    }
];

const categories: Category[] = ["All", "Standing", "Seated", "Balancing", "Backbends", "Inversions"];

const difficultyColors = {
    Beginner: "from-green-500 to-emerald-500",
    Intermediate: "from-orange-500 to-amber-500",
    Advanced: "from-red-500 to-rose-500"
};

export default function AsanasPage() {
    const [selectedCategory, setSelectedCategory] = useState<Category>("All");
    const [expandedAsana, setExpandedAsana] = useState<string | null>(null);

    const filteredAsanas = selectedCategory === "All"
        ? asanasData
        : asanasData.filter(asana => asana.category === selectedCategory);

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
                {/* Hero Section */}
                <section className="pt-32 pb-16 px-4 md:px-6">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="inline-block mb-6 px-6 py-2 bg-teal-100 rounded-full">
                            <span className="text-teal-800 font-medium text-sm">Complete Asana Library</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-teal-900 mb-6 leading-tight">
                            Yoga Asanas<br />Library
                        </h1>
                        <p className="text-xl md:text-2xl text-teal-700 max-w-3xl mx-auto font-light leading-relaxed">
                            Explore our comprehensive collection of yoga poses with detailed instructions, benefits, and guidance for all levels
                        </p>
                    </div>
                </section>

                {/* Category Filter */}
                <section className="pb-12 px-4 md:px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Filter className="w-5 h-5 text-teal-600" />
                            <span className="text-teal-800 font-medium">Filter by Category</span>
                        </div>
                        <div className="flex flex-wrap justify-center gap-3">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${selectedCategory === category
                                            ? "bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg scale-105"
                                            : "bg-white text-teal-700 hover:bg-teal-50 border border-teal-200"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                        <div className="text-center mt-4">
                            <span className="text-teal-600 text-sm">
                                Showing {filteredAsanas.length} {filteredAsanas.length === 1 ? 'pose' : 'poses'}
                            </span>
                        </div>
                    </div>
                </section>

                {/* Asanas Grid */}
                <section className="pb-32 px-4 md:px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredAsanas.map((asana) => (
                                <div
                                    key={asana.id}
                                    className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-teal-100 hover:border-teal-300 cursor-pointer"
                                    onClick={() => setExpandedAsana(expandedAsana === asana.id ? null : asana.id)}
                                >
                                    {/* Difficulty Badge */}
                                    <div className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${difficultyColors[asana.difficulty]} rounded-full`}>
                                        <span className="text-white font-bold text-xs">{asana.difficulty}</span>
                                    </div>

                                    {/* Emoji Icon */}
                                    <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                        {asana.emoji}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-serif font-bold text-teal-900 mb-2">
                                        {asana.name}
                                    </h3>
                                    <p className="text-teal-600 text-sm italic mb-3">{asana.sanskritName}</p>

                                    {/* Category Tag */}
                                    <div className="inline-block px-3 py-1 bg-teal-100 rounded-full mb-4">
                                        <span className="text-teal-700 text-xs font-medium">{asana.category}</span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-teal-700 text-base leading-relaxed mb-4">
                                        {asana.description}
                                    </p>

                                    {/* Expanded Content */}
                                    {expandedAsana === asana.id && (
                                        <div className="mt-6 space-y-4 animate-fadeIn border-t border-teal-200 pt-6">
                                            {/* Benefits */}
                                            <div>
                                                <h4 className="text-sm font-semibold text-teal-800 uppercase tracking-wide mb-2 flex items-center gap-2">
                                                    ✨ Benefits
                                                </h4>
                                                <ul className="space-y-1">
                                                    {asana.benefits.map((benefit, idx) => (
                                                        <li key={idx} className="text-sm text-teal-600 pl-4 border-l-2 border-green-300">
                                                            {benefit}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Instructions */}
                                            <div>
                                                <h4 className="text-sm font-semibold text-teal-800 uppercase tracking-wide mb-2 flex items-center gap-2">
                                                    📋 How to Practice
                                                </h4>
                                                <ol className="space-y-1">
                                                    {asana.instructions.map((instruction, idx) => (
                                                        <li key={idx} className="text-sm text-teal-600 pl-4">
                                                            <span className="font-semibold">{idx + 1}.</span> {instruction}
                                                        </li>
                                                    ))}
                                                </ol>
                                            </div>

                                            {/* Duration */}
                                            <div className="bg-cyan-50 rounded-lg p-3">
                                                <p className="text-sm text-cyan-800">
                                                    <span className="font-semibold">⏱️ Duration:</span> {asana.duration}
                                                </p>
                                            </div>

                                            {/* Contraindications */}
                                            {asana.contraindications.length > 0 && (
                                                <div className="bg-red-50 rounded-lg p-3 border-l-4 border-red-400">
                                                    <h4 className="text-sm font-semibold text-red-800 mb-1">
                                                        ⚠️ Contraindications
                                                    </h4>
                                                    <p className="text-sm text-red-700">
                                                        Avoid if you have: {asana.contraindications.join(", ")}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Expand/Collapse Indicator */}
                                    <div className="mt-4 flex items-center justify-center gap-2 text-teal-500">
                                        {expandedAsana === asana.id ? (
                                            <>
                                                <ChevronUp className="w-4 h-4" />
                                                <span className="text-xs font-medium">Click to collapse</span>
                                            </>
                                        ) : (
                                            <>
                                                <ChevronDown className="w-4 h-4" />
                                                <span className="text-xs font-medium">Click for details</span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))}
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
