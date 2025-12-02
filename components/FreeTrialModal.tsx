"use client";

import { useState, FormEvent } from "react";
import { X } from "lucide-react";

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function FreeTrialModal({
  isOpen,
  onClose,
  onSuccess,
}: FreeTrialModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      phone: "",
    };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Store user data in memory (session-based)
    const userData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      registeredAt: new Date().toISOString(),
      trialActive: true,
    };

    // Store in sessionStorage (temporary, clears when browser closes)
    sessionStorage.setItem("yogaFlowUser", JSON.stringify(userData));

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccess();
      onClose();
      // Reset form
      setFormData({ name: "", email: "", phone: "" });
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal content */}
        <div className="p-8">
          <h2
            className="text-3xl font-bold text-gray-900 mb-2"
            style={{ fontFamily: "serif" }}
          >
            Start Your Free Trial
          </h2>
          <p
            className="text-gray-600 mb-6"
            style={{ fontFamily: "serif" }}
          >
            Experience authentic yoga from Rishikesh. No credit card required.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name field */}
            <div className="flex flex-col">
              <label
                htmlFor="trial-name"
                className="text-sm uppercase tracking-wide text-gray-500 mb-2"
              >
                Full Name *
              </label>
              <input
                id="trial-name"
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Enter your full name"
                className={`rounded-xl border ${
                  errors.name ? "border-red-500" : "border-teal-200"
                } bg-white px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#14b8a6]`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email field */}
            <div className="flex flex-col">
              <label
                htmlFor="trial-email"
                className="text-sm uppercase tracking-wide text-gray-500 mb-2"
              >
                Email *
              </label>
              <input
                id="trial-email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="name@example.com"
                className={`rounded-xl border ${
                  errors.email ? "border-red-500" : "border-teal-200"
                } bg-white px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#14b8a6]`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone field */}
            <div className="flex flex-col">
              <label
                htmlFor="trial-phone"
                className="text-sm uppercase tracking-wide text-gray-500 mb-2"
              >
                Phone Number *
              </label>
              <input
                id="trial-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="+91 75794 71957"
                className={`rounded-xl border ${
                  errors.phone ? "border-red-500" : "border-teal-200"
                } bg-white px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#14b8a6]`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-[#14b8a6] text-white py-3 font-medium hover:bg-[#0d9488] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Starting Trial..." : "Start Free Trial"}
            </button>

            <p
              className="text-xs text-center text-gray-500"
              style={{ fontFamily: "serif" }}
            >
              By starting your trial, you agree to receive updates about your
              yoga journey.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}