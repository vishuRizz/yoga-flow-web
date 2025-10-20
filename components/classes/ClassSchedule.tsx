"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useCallback, useState } from "react";

const zoomLaunchUrl = "https://zoom.us/join";

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
  const [isLoadingPayment, setIsLoadingPayment] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);
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
      description: "Monthly subscription",
      handler: () => {
        setIsSubscribed(true);
        setIsLoadingPayment(false);
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      notes: {
        source: "Yoga Flow Classes Page",
      },
      theme: {
        color: "#ff8c42",
      },
      modal: {
        ondismiss: () => {
          setIsLoadingPayment(false);
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
  }, [isLoadingPayment, isSubscribed, loadRazorpayScript]);

  const subscribeLabel = isSubscribed
    ? "Subscribed"
    : isLoadingPayment
    ? "Processing..."
    : "Subscribe";

  return (
    <section className="bg-white/70 backdrop-blur-sm border border-[#f0dcc8] rounded-3xl p-8 md:p-10 shadow-sm">
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
                  ? "text-[#ff8c42] border-b-2 border-[#ff8c42]"
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
                  ? "text-[#ff8c42] border-b-2 border-[#ff8c42]"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              Recorded Classes
            </button>
          </div>

          <div className="flex flex-col items-stretch gap-2">
            <button
              type="button"
              onClick={handleSubscribe}
              disabled={isSubscribed || isLoadingPayment}
              className="rounded-full bg-[#ff8c42] px-5 py-2 text-sm md:text-base font-medium text-white shadow-sm transition-colors hover:bg-[#ff7a28] disabled:cursor-not-allowed disabled:opacity-60"
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
                className="inline-flex items-center gap-2 rounded-full bg-[#fef3e6] px-4 py-2 text-sm text-gray-600 border border-[#f5d8bd] hover:bg-[#ffe8d0] transition-colors"
              >
                {filter}
                <ChevronDown className="h-3 w-3 text-[#ff8c42]" />
              </button>
            ))}
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#f4ddc6] shadow-sm">
            <table className="min-w-full divide-y divide-[#f3d6bc] text-left">
              <thead className="bg-gradient-to-r from-[#fff4eb] to-[#fde8d7]">
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
                      index % 2 === 1 ? "bg-[#fff7ef]" : ""
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
                        className="text-[#ff8c42] font-medium hover:underline"
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
              className="rounded-2xl border border-[#f4ddc6] bg-[#fff7ef] p-6 shadow-sm hover:shadow-md transition-shadow"
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
                  className="text-[#ff8c42] font-medium hover:underline"
                >
                  Watch
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
