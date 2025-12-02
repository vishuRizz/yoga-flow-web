"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { X, Check, Moon, Dumbbell, Award } from "lucide-react";

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

export default function Hero() {
  const router = useRouter();
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isLoadingPayment, setIsLoadingPayment] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<"India" | "Outside India">("India");
  const [selectedPlanId, setSelectedPlanId] = useState(pricing.India[0].id);

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

  const handleJoinClasses = useCallback(async () => {
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
      setPaymentError(
        "Payment gateway is not configured. Please contact support."
      );
      setIsLoadingPayment(false);
      return;
    }

    const amountInSmallestUnit = selectedPlan.price * 100;

    const razorpay = new window.Razorpay({
      key: keyId,
      amount: amountInSmallestUnit,
      currency: selectedPlan.currency,
      name: "Yoga Flow Membership",
      description: `${selectedPlan.label} - Access all classes`,
      handler: (response) => {
        console.log("Payment successful:", response);
        setIsLoadingPayment(false);
        setIsPaymentModalOpen(false);
        router.push("/classes?payment=success");
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      notes: {
        source: "Hero Join Classes CTA",
        plan: selectedPlan.id,
      },
      theme: {
        color: "#14b8a6",
      },
      modal: {
        ondismiss: () => {
          setIsLoadingPayment(false);
          setIsPaymentModalOpen(false);
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
  }, [loadRazorpayScript, router, selectedCountry, selectedPlanId]);

  const countryPlans = pricing[selectedCountry];

  return (
    <>
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
              Rishikesh&apos;s Best
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
              <button
                onClick={() => setIsPaymentModalOpen(true)}
                className="px-6 sm:px-9 py-3 sm:py-3.5 bg-[#14b8a6] text-white rounded-full text-sm sm:text-base font-medium hover:bg-[#0d9488] transition-colors text-center"
              >
                Join Our Classes
              </button>
              <Link
                href="/contact"
                className="px-6 sm:px-9 py-3 sm:py-3.5 bg-transparent border-2 border-[#14b8a6] text-[#14b8a6] rounded-full text-sm sm:text-base font-medium hover:bg-[#14b8a6] hover:text-white transition-colors text-center"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="relative bg-white rounded-3xl p-8 max-w-3xl w-full mx-4 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setIsPaymentModalOpen(false);
                setIsLoadingPayment(false);
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
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
                        setSelectedPlanId(pricing[country][0].id);
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

              {/* CURRICULUM SECTION - ADDED HERE */}
              <div className="mt-8 pt-8 border-t-2 border-gray-200">
                <div className="text-center mb-6">
                  <h3
                    className="text-2xl font-bold text-gray-900 mb-2"
                    style={{ fontFamily: 'serif' }}
                  >
                    Your 6-Month Transformation Journey
                  </h3>
                  <p
                    className="text-sm text-gray-600"
                    style={{ fontFamily: 'serif' }}
                  >
                    Here's what you'll achieve with our proven program
                  </p>
                </div>

                <div className="space-y-4 text-left">
                  {/* Month 1 */}
                  <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="rounded-full p-2 bg-blue-100">
                        <Moon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500">Month 1</p>
                        <h4 className="text-base font-bold text-gray-900" style={{ fontFamily: 'serif' }}>
                          Sleep Better, Feel Calmer
                        </h4>
                      </div>
                    </div>

                    <ul className="space-y-1 mb-3">
                      <li className="flex items-start text-xs text-gray-700">
                        <span className="text-[#14b8a6] mr-2">✓</span>
                        <span>Fall asleep 15–20 minutes faster</span>
                      </li>
                      <li className="flex items-start text-xs text-gray-700">
                        <span className="text-[#14b8a6] mr-2">✓</span>
                        <span>2–3 point stress improvement</span>
                      </li>
                      <li className="flex items-start text-xs text-gray-700">
                        <span className="text-[#14b8a6] mr-2">✓</span>
                        <span>Less neck and shoulder tension</span>
                      </li>
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-3">
                      <div className="bg-white rounded-lg px-2 py-1 text-xs border border-gray-200">
                        <span className="font-semibold">Sleep: </span>
                        <span className="text-[#14b8a6] font-bold">35 min → 18 min</span>
                      </div>
                      <div className="bg-white rounded-lg px-2 py-1 text-xs border border-gray-200">
                        <span className="font-semibold">Stress: </span>
                        <span className="text-[#14b8a6] font-bold">7 → 4</span>
                      </div>
                    </div>

                    <div className="bg-white/70 rounded-lg p-2 border-l-4 border-[#14b8a6]">
                      <p className="text-gray-700 italic text-xs">
                        "I finally sleep through the night without waking up anxious."
                      </p>
                    </div>
                  </div>

                  {/* Month 3 */}
                  <div className="bg-teal-50 border-2 border-teal-200 rounded-2xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="rounded-full p-2 bg-orange-100">
                        <Dumbbell className="w-5 h-5 text-teal-600" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500">Month 3</p>
                        <h4 className="text-base font-bold text-gray-900" style={{ fontFamily: 'serif' }}>
                          Strength, Stability, Less Pain
                        </h4>
                      </div>
                    </div>

                    <ul className="space-y-1 mb-3">
                      <li className="flex items-start text-xs text-gray-700">
                        <span className="text-[#14b8a6] mr-2">✓</span>
                        <span>Hold plank 30+ seconds</span>
                      </li>
                      <li className="flex items-start text-xs text-gray-700">
                        <span className="text-[#14b8a6] mr-2">✓</span>
                        <span>Move without stiffness or back pain</span>
                      </li>
                      <li className="flex items-start text-xs text-gray-700">
                        <span className="text-[#14b8a6] mr-2">✓</span>
                        <span>Use 2-minute breath tools at work</span>
                      </li>
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-3">
                      <div className="bg-white rounded-lg px-2 py-1 text-xs border border-gray-200">
                        <span className="font-semibold">Plank: </span>
                        <span className="text-[#14b8a6] font-bold">12s → 38s</span>
                      </div>
                      <div className="bg-white rounded-lg px-2 py-1 text-xs border border-gray-200">
                        <span className="font-semibold">Pain: </span>
                        <span className="text-[#14b8a6] font-bold">5/week → 1/week</span>
                      </div>
                    </div>

                    <div className="bg-white/70 rounded-lg p-2 border-l-4 border-[#14b8a6]">
                      <p className="text-gray-700 italic text-xs">
                        "My back doesn't hurt after sitting all day, and I feel so much stronger."
                      </p>
                    </div>
                  </div>

                  {/* Month 6 */}
                  <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="rounded-full p-2 bg-green-100">
                        <Award className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500">Month 6</p>
                        <h4 className="text-base font-bold text-gray-900" style={{ fontFamily: 'serif' }}>
                          Complete Transformation
                        </h4>
                      </div>
                    </div>

                    <ul className="space-y-1 mb-3">
                      <li className="flex items-start text-xs text-gray-700">
                        <span className="text-[#14b8a6] mr-2">✓</span>
                        <span>7–8 hours quality sleep consistently</span>
                      </li>
                      <li className="flex items-start text-xs text-gray-700">
                        <span className="text-[#14b8a6] mr-2">✓</span>
                        <span>60+ second planks, pain-free movement</span>
                      </li>
                      <li className="flex items-start text-xs text-gray-700">
                        <span className="text-[#14b8a6] mr-2">✓</span>
                        <span>Touch toes, comfortable deep squat</span>
                      </li>
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-3">
                      <div className="bg-white rounded-lg px-2 py-1 text-xs border border-gray-200">
                        <span className="font-semibold">Sleep: </span>
                        <span className="text-[#14b8a6] font-bold">85% quality</span>
                      </div>
                      <div className="bg-white rounded-lg px-2 py-1 text-xs border border-gray-200">
                        <span className="font-semibold">Stress: </span>
                        <span className="text-[#14b8a6] font-bold">7 → 3</span>
                      </div>
                      <div className="bg-white rounded-lg px-2 py-1 text-xs border border-gray-200">
                        <span className="font-semibold">Plank: </span>
                        <span className="text-[#14b8a6] font-bold">12s → 75s</span>
                      </div>
                    </div>

                    <div className="bg-white/70 rounded-lg p-2 border-l-4 border-[#14b8a6]">
                      <p className="text-gray-700 italic text-xs">
                        "I sleep deeply, move without pain, and handle stress like a pro. Yoga Flow gave me my life back."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* END CURRICULUM SECTION */}

              {paymentError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4 mt-6">
                  <p
                    className="text-red-600 text-sm"
                    style={{ fontFamily: "serif" }}
                  >
                    {paymentError}
                  </p>
                </div>
              )}

              {isLoadingPayment && (
                <div className="flex items-center justify-center mb-4 mt-6">
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
                onClick={handleJoinClasses}
                disabled={isLoadingPayment || !selectedPlanId}
                className="w-full rounded-full bg-[#14b8a6] px-8 py-4 text-lg font-medium text-white shadow-lg hover:bg-[#0d9488] transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-6"
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