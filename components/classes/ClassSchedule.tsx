"use client";

import Link from "next/link";
import { ChevronDown, X, Check } from "lucide-react";
import { useCallback, useState } from "react";

const zoomLaunchUrl = "https://zoom.us/join";

const pricing = {
  "India": [
    { id: "IN_MONTHLY", label: "Monthly Access", price: 999, currency: "INR", description: "Access all live and recorded classes." },
    { id: "IN_6MONTHS", label: "6 Months Full Course", price: 4499, currency: "INR", description: "Best value for full course commitment." },
  ],
  "Outside India": [
    { id: "INTL_MONTHLY", label: "Monthly Access", price: 49, currency: "USD", description: "Access all live and recorded classes." },
    { id: "INTL_6MONTHS", label: "6 Months Full Course", price: 219, currency: "USD", description: "Best value for full course commitment." },
  ],
};

const liveClasses = [
  {
    time: "8:00 AM",
    title: "Hatha Yoga",
    instructor: "Priya Sharma",
    level: "Beginner",
    duration: "60 min",
    joinUrl: zoomLaunchUrl,
  },
  {
    time: "9:30 AM",
    title: "Vinyasa Flow",
    instructor: "Arjun Verma",
    level: "Intermediate",
    duration: "75 min",
    joinUrl: zoomLaunchUrl,
  },
  {
    time: "11:00 AM",
    title: "Restorative Yoga",
    instructor: "Divya Kapoor",
    level: "All Levels",
    duration: "45 min",
    joinUrl: zoomLaunchUrl,
  },
  {
    time: "5:00 PM",
    title: "Ashtanga Yoga",
    instructor: "Pawan Deep Negi",
    level: "Advanced",
    duration: "90 min",
    joinUrl: zoomLaunchUrl,
  },
  {
    time: "6:30 PM",
    title: "Yin Yoga",
    instructor: "Aradhna Uniyal",
    level: "All Levels",
    duration: "60 min",
    joinUrl: zoomLaunchUrl,
  },
];

const recordedClasses = [
  {
    title: "Sunrise Awakening",
    focus: "Morning Energizers",
    duration: "35 min",
    instructor: "Priya Sharma",
  },
  {
    title: "Core Strength Series",
    focus: "Strength & Stability",
    duration: "45 min",
    instructor: "Arjun Verma",
  },
  {
    title: "Evening Unwind",
    focus: "Restorative Flow",
    duration: "50 min",
    instructor: "Divya Kapoor",
  },
  {
    title: "Strength Foundations",
    focus: "Power & Alignment",
    duration: "40 min",
    instructor: "Pawan Deep Negi",
  },
  {
    title: "Moonlight Yin",
    focus: "Stillness & Breath",
    duration: "45 min",
    instructor: "Aradhna Uniyal",
  },
];

export default function ClassSchedule() {
  const [activeTab, setActiveTab] = useState<"live" | "recorded">("live");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isLoadingPayment, setIsLoadingPayment] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<"India" | "Outside India">("India");
  const [selectedPlanId, setSelectedPlanId] = useState(pricing.India[0].id);
  const isLive = activeTab === "live";

  const loadRazorpayScript = useCallback(async () => {
    if (typeof window === "undefined") return false;

    const existingScript = document.getElementById("razorpay-checkout-script");
    if (existingScript) return true;

    return new Promise<boolean>((resolve) => {
      const script = document.createElement("script");
      script.id = "razorpay-checkout-script";
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  }, []);

  const handleSubscribe = useCallback(async () => {
    if (isSubscribed || isLoadingPayment) return;
    
    setPaymentError(null);
    setIsLoadingPayment(true);

    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded || !window.Razorpay) {
      setPaymentError("Unable to load payment gateway. Please try again.");
      setIsLoadingPayment(false);
      return;
    }

    const currentCountryPlans = pricing[selectedCountry];
    const selectedPlan = currentCountryPlans.find(p => p.id === selectedPlanId);

    if (!selectedPlan) {
      setPaymentError("Selected plan is invalid. Please choose a plan.");
      setIsLoadingPayment(false);
      return;
    }

    const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    if (!keyId) {
      setPaymentError("Payment gateway is not configured. Please contact support.");
      setIsLoadingPayment(false);
      return;
    }
    
    // Razorpay amount needs to be in paise/cents.
    const amountInSmallestUnit = selectedPlan.price * 100;

    const razorpay = new window.Razorpay({
      key: keyId,
      amount: amountInSmallestUnit,
      currency: selectedPlan.currency,
      name: "Yoga Flow Membership",
      description: `${selectedPlan.label} - Access all classes`,
      handler: () => {
        setIsSubscribed(true);
        setIsLoadingPayment(false);
        setIsPaymentModalOpen(false);
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      notes: {
        source: "Class Schedule Page",
        plan: selectedPlan.id,
      },
      theme: {
        color: "#14b8a6",
      },
      modal: {
        ondismiss: () => {
          setIsLoadingPayment(false);
          // Only close the modal if payment hasn't succeeded
          if(!isSubscribed) setIsPaymentModalOpen(false); 
        },
      },
    });

    razorpay.on("payment.failed", () => {
      setPaymentError("Payment was not completed. Please try again.");
      setIsLoadingPayment(false);
    });

    try {
      razorpay.open();
    } catch {
      setPaymentError("Unable to initiate payment. Please try again.");
      setIsLoadingPayment(false);
    }
  }, [isLoadingPayment, isSubscribed, loadRazorpayScript, selectedCountry, selectedPlanId]);

  const subscribeLabel = isSubscribed
    ? "Subscribed"
    : isLoadingPayment
    ? "Processing..."
    : "Subscribe";
    
  const countryPlans = pricing[selectedCountry];

  return (
    <>
      <section className="bg-white/70 backdrop-blur-sm border border-teal-200 rounded-3xl p-8 md:p-10 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h2
              className="text-2xl md:text-3xl font-semibold text-gray-900"
              style={{ fontFamily: "serif" }}
            >
              {isLive ? "Upcoming Live Classes" : "On-Demand Library"}
            </h2>
            <p
              className="text-gray-500 mt-2 text-sm md:text-base"
              style={{ fontFamily: "serif" }}
            >
              {isLive
                ? "Find the perfect class for your practice, from sunrise salutations to evening flows."
                : "Stream recordings guided by our Rishikesh faculty anytime your schedule calls for movement."}
            </p>
          </div>

          <div className="flex flex-col items-stretch sm:items-end gap-3">
            <div className="inline-flex items-center gap-6 border-b border-[#f6dcc1] pb-2">
              <button
                type="button"
                onClick={() => setActiveTab("live")}
                className={`text-sm md:text-base font-medium pb-2 transition-colors ${
                  activeTab === "live"
                    ? "text-[#14b8a6] border-b-2 border-[#14b8a6]"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                Live Classes
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("recorded")}
                className={`text-sm md:text-base font-medium pb-2 transition-colors ${
                  activeTab === "recorded"
                    ? "text-[#14b8a6] border-b-2 border-[#14b8a6]"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                Recorded Classes
              </button>
            </div>

            <div className="flex flex-col items-stretch gap-2">
              <button
                type="button"
                onClick={() => setIsPaymentModalOpen(true)}
                disabled={isSubscribed || isLoadingPayment}
                className="rounded-full bg-[#14b8a6] px-5 py-2 text-sm md:text-base font-medium text-white shadow-sm transition-colors hover:bg-[#0d9488] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {subscribeLabel}
              </button>
              {isSubscribed ? (
                <p
                  className="text-xs text-green-600 text-center"
                  style={{ fontFamily: "serif" }}
                >
                  Subscription active. See you on the mat!
                </p>
              ) : (
                paymentError && (
                  <p
                    className="text-xs text-red-600 text-center"
                    style={{ fontFamily: "serif" }}
                  >
                    {paymentError}
                  </p>
                )
              )}
            </div>
          </div>
        </div>

        {isLive ? (
          <>
            <div className="flex flex-wrap gap-3 mb-6">
              {["Type", "Difficulty", "Instructor"].map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-sm text-gray-600 border border-teal-200 hover:bg-teal-100 transition-colors"
                >
                  {filter}
                  <ChevronDown className="h-3 w-3 text-[#14b8a6]" />
                </button>
              ))}
            </div>

            <div className="overflow-hidden rounded-3xl border border-teal-200 shadow-sm">
              <table className="min-w-full divide-y divide-[#f3d6bc] text-left">
                <thead className="bg-gradient-to-r from-teal-50 to-cyan-100">
                  <tr className="text-gray-500 text-xs md:text-sm uppercase tracking-wider">
                    <th className="px-6 py-4">Time</th>
                    <th className="px-6 py-4">Class</th>
                    <th className="px-6 py-4">Instructor</th>
                    <th className="px-6 py-4">Level</th>
                    <th className="px-6 py-4">Duration</th>
                    <th className="px-6 py-4 text-right">Join</th>
                  </tr>
                </thead>
                <tbody className="bg-white/70">
                  {liveClasses.map((classItem, index) => (
                    <tr
                      key={classItem.title}
                      className={`text-sm md:text-base text-gray-700 ${
                        index % 2 === 1 ? "bg-teal-50" : ""
                      }`}
                      style={{ fontFamily: "serif" }}
                    >
                      <td className="px-6 py-4">{classItem.time}</td>
                      <td className="px-6 py-4 font-semibold text-gray-900">
                        {classItem.title}
                      </td>
                      <td className="px-6 py-4">{classItem.instructor}</td>
                      <td className="px-6 py-4">{classItem.level}</td>
                      <td className="px-6 py-4">{classItem.duration}</td>
                      <td className="px-6 py-4 text-right">
                        <a
                          href={classItem.joinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#14b8a6] font-medium hover:underline"
                        >
                          Join
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {recordedClasses.map((classItem) => (
              <article
                key={classItem.title}
                className="rounded-2xl border border-teal-200 bg-teal-50 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <p
                  className="text-sm uppercase tracking-wide text-[#d97706] mb-2"
                  style={{ fontFamily: "serif" }}
                >
                  {classItem.focus}
                </p>
                <h3
                  className="text-xl font-semibold text-gray-900 mb-3"
                  style={{ fontFamily: "serif" }}
                >
                  {classItem.title}
                </h3>
                <p className="text-gray-600 mb-4" style={{ fontFamily: "serif" }}>
                  Guided by {classItem.instructor}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{classItem.duration}</span>
                  <Link
                    href="/contact"
                    className="text-[#14b8a6] font-medium hover:underline"
                  >
                    Watch
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
      
      {/* Payment Modal - MODIFIED */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative bg-white rounded-3xl p-8 max-w-lg w-full mx-4 shadow-2xl">
            <button
              onClick={() => {
                setIsPaymentModalOpen(false);
                setIsLoadingPayment(false);
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center">
              <h2
                className="text-3xl font-bold text-gray-900 mb-2"
                style={{ fontFamily: "serif" }}
              >
                Choose Your Plan
              </h2>
              <p className="text-gray-600 mb-6" style={{ fontFamily: "serif" }}>
                Select your country and preferred subscription plan.
              </p>

              {/* Country/Region Selector Tabs */}
              <div className="flex justify-center space-x-2 bg-gray-100 rounded-full p-1 mb-8">
                {(Object.keys(pricing) as Array<keyof typeof pricing>).map(
                  (country) => (
                    <button
                      key={country}
                      onClick={() => {
                        setSelectedCountry(country);
                        setSelectedPlanId(pricing[country][0].id); // Reset plan on tab change
                        setPaymentError(null);
                      }}
                      className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                        selectedCountry === country
                          ? "bg-[#14b8a6] text-white shadow-md"
                          : "text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {country}
                    </button>
                  )
                )}
              </div>

              {/* Pricing Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {countryPlans.map((plan) => (
                  <button
                    key={plan.id}
                    onClick={() => {
                      setSelectedPlanId(plan.id);
                      setPaymentError(null);
                    }}
                    disabled={isLoadingPayment}
                    className={`p-6 rounded-2xl text-left transition-all duration-200 border-2 ${
                      selectedPlanId === plan.id
                        ? "border-[#14b8a6] bg-teal-50/50 shadow-lg"
                        : "border-gray-200 bg-white hover:border-teal-300"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3
                        className="text-xl font-bold text-gray-900"
                        style={{ fontFamily: "serif" }}
                      >
                        {plan.label}
                      </h3>
                      {selectedPlanId === plan.id && (
                        <Check className="w-6 h-6 text-[#14b8a6]" />
                      )}
                    </div>

                    <p
                      className="text-3xl font-extrabold text-gray-900 mb-1"
                      style={{ fontFamily: "serif" }}
                    >
                      {plan.currency === "INR" ? "₹" : "$"}
                      {plan.price}
                      <span className="text-base font-medium text-gray-500">
                        / {plan.id.includes("MONTHLY") ? "month" : "6 months"}
                      </span>
                    </p>
                    <p className="text-sm text-gray-500">{plan.description}</p>
                  </button>
                ))}
              </div>

              {paymentError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                  <p
                    className="text-red-600 text-sm"
                    style={{ fontFamily: "serif" }}
                  >
                    {paymentError}
                  </p>
                </div>
              )}

              {isLoadingPayment && (
                <div className="flex items-center justify-center mb-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#14b8a6]"></div>
                  <p
                    className="ml-3 text-gray-600"
                    style={{ fontFamily: "serif" }}
                  >
                    Loading payment gateway...
                  </p>
                </div>
              )}

              <button
                onClick={handleSubscribe}
                disabled={isLoadingPayment || !selectedPlanId}
                className="w-full rounded-full bg-[#14b8a6] px-8 py-4 text-lg font-medium text-white shadow-lg hover:bg-[#0d9488] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoadingPayment ? "Processing..." : "Continue to Payment"}
              </button>

              <p
                className="text-sm text-gray-500 mt-4"
                style={{ fontFamily: "serif" }}
              >
                {selectedPlanId?.includes("MONTHLY") ? "Cancel anytime. No commitment required." : "One-time payment for 6 months."}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}