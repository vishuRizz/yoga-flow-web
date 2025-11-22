"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState, useCallback } from "react";
import { X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWisdomOpen, setIsWisdomOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isLoadingPayment, setIsLoadingPayment] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Classes", href: "/classes" },
    /* { label: "Teachers", href: "/teachers" }, */
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const wisdomItems = [
    { label: "Blogs", href: "/wisdom/blogs" },
    { label: "Research", href: "/wisdom/research" },
    { label: "Asanas", href: "/wisdom/asanas" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href) ?? false;
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      if (currentScrollY > windowHeight && currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

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
      setPaymentError(
        "Payment gateway is not configured. Please contact support."
      );
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
        router.push("/classes?payment=success");
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      notes: {
        source: "Navbar Join Classes CTA",
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
  }, [loadRazorpayScript, router]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-teal-50 to-cyan-50 px-4 md:px-6 py-4 md:py-5 border-b border-teal-200 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="text-teal-600 md:w-6 md:h-6"
            >
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-lg md:text-2xl font-serif text-teal-900">
              Yoga Flow
            </span>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors font-light text-lg ${
                  isActive(item.href)
                    ? "text-teal-600"
                    : "text-teal-800 hover:text-teal-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Wisdom Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsWisdomOpen(!isWisdomOpen)}
                className={`flex items-center gap-1 transition-colors font-light text-lg ${
                  pathname?.startsWith("/wisdom")
                    ? "text-teal-600"
                    : "text-teal-800 hover:text-teal-900"
                }`}
              >
                Wisdom
                <ChevronDown className={`w-4 h-4 transition-transform ${isWisdomOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isWisdomOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-teal-200 py-2">
                  {wisdomItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsWisdomOpen(false)}
                      className={`block px-4 py-2 text-base transition-colors ${
                        isActive(item.href)
                          ? "text-teal-600 bg-teal-50"
                          : "text-teal-800 hover:bg-teal-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="px-8 py-3 bg-teal-100 text-teal-900 rounded-full font-light text-base hover:bg-teal-200 transition-colors">
              Start Free Trial
            </button>
            <button
              onClick={handleJoinClasses}
              className="px-8 py-3 bg-teal-600 text-white rounded-full font-light text-base hover:bg-teal-700 transition-colors"
            >
              Join Our Classes
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-teal-900 transition-transform ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-teal-900 transition-opacity ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-teal-900 transition-transform ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-teal-200 pt-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`transition-colors font-light text-base ${
                    isActive(item.href)
                      ? "text-teal-600"
                      : "text-teal-800 hover:text-teal-900"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Wisdom Mobile */}
              <div>
                <button
                  onClick={() => setIsWisdomOpen(!isWisdomOpen)}
                  className="flex items-center gap-1 text-teal-800 font-light text-base"
                >
                  Wisdom
                  <ChevronDown className={`w-4 h-4 transition-transform ${isWisdomOpen ? 'rotate-180' : ''}`} />
                </button>
                {isWisdomOpen && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    {wisdomItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsWisdomOpen(false);
                        }}
                        className={`transition-colors font-light text-sm ${
                          isActive(item.href)
                            ? "text-teal-600"
                            : "text-teal-700 hover:text-teal-900"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="flex flex-col gap-3 mt-2">
                <button className="w-full px-6 py-3 bg-teal-100 text-teal-900 rounded-full font-light text-sm hover:bg-teal-200 transition-colors">
                  Start Free Trial
                </button>
                <button
                  onClick={handleJoinClasses}
                  className="w-full px-6 py-3 bg-teal-600 text-white rounded-full font-light text-sm hover:bg-teal-700 transition-colors"
                >
                  Join Our Classes
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

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
              <p className="text-gray-600 mb-6" style={{ fontFamily: "serif" }}>
                Subscribe to access all live and recorded classes from
                Rishikesh&apos;s best yoga teachers.
              </p>

              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 mb-6">
                <p className="text-4xl font-bold text-teal-600 mb-2">₹499</p>
                <p className="text-gray-600" style={{ fontFamily: "serif" }}>
                  per month
                </p>
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
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
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
                disabled={isLoadingPayment}
                className="w-full rounded-full bg-teal-600 px-8 py-4 text-lg font-medium text-white shadow-lg hover:bg-teal-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoadingPayment ? "Processing..." : "Subscribe Now"}
              </button>

              <p
                className="text-sm text-gray-500 mt-4"
                style={{ fontFamily: "serif" }}
              >
                Cancel anytime. No commitment required.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}