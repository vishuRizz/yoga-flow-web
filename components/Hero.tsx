"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import FreeTrialModal from "./FreeTrialModal";

export default function Hero() {
  const router = useRouter();
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isLoadingPayment, setIsLoadingPayment] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);

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
    setIsPaymentModalOpen(true);

    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded || !window.Razorpay) {
      setPaymentError("Unable to load payment gateway. Please try again.");
      setIsLoadingPayment(false);
      return;
    }

    const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    if (!keyId) {
      setPaymentError("Payment gateway is not configured. Please contact support.");
      setIsLoadingPayment(false);
      return;
    }

    const razorpay = new window.Razorpay({
      key: keyId,
      amount: 49900,
      currency: "INR",
      name: "Yoga Flow Membership",
      description: "Monthly subscription - Access all classes",
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
        source: "Join Our Classes CTA",
      },
      theme: {
        color: "#ff8c42",
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
  }, [isLoadingPayment, loadRazorpayScript, router]);

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
                onClick={handleJoinClasses}
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

      {/* Payment Modal */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative bg-white rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl">
            <button
              onClick={() => setIsPaymentModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center">
              <h2
                className="text-3xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: "serif" }}
              >
                Join Yoga Flow
              </h2>
              <p
                className="text-gray-600 mb-6"
                style={{ fontFamily: "serif" }}
              >
                Subscribe to access all live and recorded classes from Rishikesh&apos;s best yoga teachers.
              </p>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 mb-6">
                <p className="text-4xl font-bold text-[#ff8c42] mb-2">₹499</p>
                <p className="text-gray-600" style={{ fontFamily: "serif" }}>
                  per month
                </p>
              </div>

              {paymentError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                  <p className="text-red-600 text-sm" style={{ fontFamily: "serif" }}>
                    {paymentError}
                  </p>
                </div>
              )}

              {isLoadingPayment && (
                <div className="flex items-center justify-center mb-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#ff8c42]"></div>
                  <p className="ml-3 text-gray-600" style={{ fontFamily: "serif" }}>
                    Loading payment gateway...
                  </p>
                </div>
              )}

              <button
                onClick={handleJoinClasses}
                disabled={isLoadingPayment}
                className="w-full rounded-full bg-[#ff8c42] px-8 py-4 text-lg font-medium text-white shadow-lg hover:bg-[#ff7a28] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoadingPayment ? "Processing..." : "Subscribe Now"}
              </button>

              <p className="text-sm text-gray-500 mt-4" style={{ fontFamily: "serif" }}>
                Cancel anytime. No commitment required.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}