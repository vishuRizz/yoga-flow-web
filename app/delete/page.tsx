"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AlertCircle, CheckCircle, Trash2 } from "lucide-react";

export default function DeleteAccount() {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (confirmation.toUpperCase() !== "DELETE") {
      alert("Please type DELETE to confirm account deletion");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call for account deletion
    // In production, this would call your backend API
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsDeleted(true);
  };

  if (isDeleted) {
    return (
      <div className="min-h-screen bg-[#f5f1eb] py-20 px-6 flex items-center justify-center">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 rounded-full p-4">
              <CheckCircle className="w-16 h-16 text-green-600" />
            </div>
          </div>

          <h1
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "serif" }}
          >
            Account Deletion Request Submitted
          </h1>

          <p className="text-gray-700 mb-6 text-lg">
            Your account deletion request has been received. We will process
            your request within 7-30 business days.
          </p>

          <p className="text-gray-600 mb-8">
            You will receive a confirmation email at <strong>{email}</strong>{" "}
            once the deletion is complete.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 text-left">
            <h3 className="font-bold text-gray-900 mb-3">What happens next?</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Your account will be deactivated immediately</li>
              <li>All personal data will be deleted within 30 days</li>
              <li>Active subscriptions will be cancelled</li>
              <li>You will not be charged for any future billing cycles</li>
              <li>You will receive a final confirmation email</li>
            </ul>
          </div>

          <Link
            href="/"
            className="inline-block px-8 py-3 bg-[#ff8c42] text-white rounded-full font-light text-base hover:bg-[#ff7a28] transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f1eb] py-20 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <Link
          href="/"
          className="inline-flex items-center text-[#ff8c42] hover:text-[#ff7a28] mb-6 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <div className="bg-red-100 rounded-full p-3">
            <Trash2 className="w-8 h-8 text-red-600" />
          </div>
          <h1
            className="text-3xl md:text-4xl font-bold text-gray-900"
            style={{ fontFamily: "serif" }}
          >
            Delete Account
          </h1>
        </div>

        {/* Warning Banner */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
          <div className="flex items-start">
            <AlertCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-red-900 mb-2">
                Warning: This action is irreversible
              </h3>
              <p className="text-red-800 text-sm">
                Deleting your account will permanently remove all your data,
                including class history, progress, and any saved content. This
                action cannot be undone.
              </p>
            </div>
          </div>
        </div>

        {/* What will be deleted */}
        <div className="mb-8">
          <h2
            className="text-2xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "serif" }}
          >
            What will be deleted:
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Your profile information (name, email, phone number)</span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <span>All class bookings and attendance history</span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Progress tracking and achievements</span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Saved classes and favorites</span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Payment history and subscription details</span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <span>All personal preferences and settings</span>
            </li>
          </ul>
        </div>

        {/* Important Notes */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-gray-900 mb-3">Important Notes:</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 text-sm">
            <li>
              Active subscriptions will be cancelled immediately. No refunds for
              partial months.
            </li>
            <li>You will not be charged for any future billing cycles.</li>
            <li>Account deletion may take up to 30 days to fully process.</li>
            <li>Some data may be retained for legal or regulatory purposes.</li>
            <li>
              You can create a new account in the future, but previous data
              cannot be restored.
            </li>
          </ul>
        </div>

        {/* Deletion Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-900 font-medium mb-2"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your account email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff8c42] focus:border-transparent outline-none transition-all"
            />
            <p className="text-sm text-gray-600 mt-1">
              Enter the email address associated with your Yoga Flow account
            </p>
          </div>

          <div>
            <label
              htmlFor="reason"
              className="block text-gray-900 font-medium mb-2"
            >
              Reason for Deletion (Optional)
            </label>
            <textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={4}
              placeholder="Help us improve by sharing why you're leaving (optional)"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff8c42] focus:border-transparent outline-none transition-all resize-none"
            />
          </div>

          <div>
            <label
              htmlFor="confirmation"
              className="block text-gray-900 font-medium mb-2"
            >
              Type &quot;DELETE&quot; to Confirm *
            </label>
            <input
              type="text"
              id="confirmation"
              value={confirmation}
              onChange={(e) => setConfirmation(e.target.value)}
              required
              placeholder="Type DELETE in capital letters"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff8c42] focus:border-transparent outline-none transition-all"
            />
            <p className="text-sm text-gray-600 mt-1">
              This confirms you understand that this action is permanent and
              cannot be undone
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/"
              className="flex-1 px-8 py-3 bg-gray-200 text-gray-900 rounded-full font-medium text-base hover:bg-gray-300 transition-colors text-center"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={isSubmitting || confirmation.toUpperCase() !== "DELETE"}
              className="flex-1 px-8 py-3 bg-red-600 text-white rounded-full font-medium text-base hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Processing..." : "Delete My Account"}
            </button>
          </div>
        </form>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="font-bold text-gray-900 mb-4 text-center">
            Need Help?
          </h3>
          <p className="text-gray-700 text-center mb-6">
            If you&apos;re having issues with your account, our support team is
            here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-[#f0dcc8] text-gray-900 rounded-full font-light text-base hover:bg-[#e8d4be] transition-colors text-center"
            >
              Contact Support
            </Link>
            <Link
              href="/privacy-policy"
              className="px-8 py-3 bg-white border-2 border-gray-300 text-gray-900 rounded-full font-light text-base hover:bg-gray-50 transition-colors text-center"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
