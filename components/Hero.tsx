"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { X, Check } from "lucide-react";

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

    // Razorpay amount needs to be in paise/cents.
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
        // Redirect to classes page after successful payment
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
        color: "#ff8c42", // Adjusted color for Hero
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
                className="px-6 sm:px-9 py-3 sm:py-3.5 bg-[#ff8c42] text-white rounded-full text-sm sm:text-base font-medium hover:bg-[#ff7a28] transition-colors text-center"
              >
                Join Our Classes
              </button>
              <Link
                href="/contact"
                className="px-6 sm:px-9 py-3 sm:py-3.5 bg-transparent border-2 border-[#ff8c42] text-[#ff8c42] rounded-full text-sm sm:text-base font-medium hover:bg-[#ff8c42] hover:text-white transition-colors text-center"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
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
                          ? "bg-[#ff8c42] text-white shadow-md"
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
                        ? "border-[#ff8c42] bg-orange-50/50 shadow-lg"
                        : "border-gray-200 bg-white hover:border-orange-300"
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
                        <Check className="w-6 h-6 text-[#ff8c42]" />
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
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#ff8c42]"></div>
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
                className="w-full rounded-full bg-[#ff8c42] px-8 py-4 text-lg font-medium text-white shadow-lg hover:bg-[#ff7a28] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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