"use client"

import { useState, useEffect } from "react"
import {
  Clock,
  Trophy,
  BookOpen,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"

export default function TestInviteLanding() {
  const [isAnimating, setIsAnimating] = useState(false)

  // Trigger intro animation
  useEffect(() => {
    setIsAnimating(true)
  }, [])

  const handleStartTest = () => {
    console.log("Starting test...")
    // Navigate to the test page or start the test logic here
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4 py-12">
      <div
        className={`w-full max-w-lg transform transition-all duration-700 ease-in-out ${
          isAnimating
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden p-8 md:p-12">
          {/* --- Content --- */}
          <div className="flex flex-col space-y-8">
            {/* Logo */}
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                {/* Replaced Briefcase icon with an img tag */}
                <img
                  src="/images/logo.png" // Path to your logo in the public folder
                  alt="Company Logo"
                  className="w-10 h-10 object-contain" // Adjust size and object-fit as needed
                />
              </div>
            </div>

            {/* Test title and company */}
            <div className="text-center space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Advanced JavaScript Assessment
              </h1>
              <p className="text-lg text-gray-600">
                by <span className="font-semibold text-blue-600">KWWP Technologies</span>
              </p>
            </div>

            {/* Test details grid */}
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <Clock className="w-6 h-6 text-blue-600 mb-2" />
                <span className="text-2xl font-bold text-gray-900">60</span>
                <span className="text-xs text-gray-600 text-center">
                  Minutes
                </span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <Trophy className="w-6 h-6 text-blue-600 mb-2" />
                <span className="text-2xl font-bold text-gray-900">100</span>
                <span className="text-xs text-gray-600 text-center">
                  Total Marks
                </span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <BookOpen className="w-6 h-6 text-blue-600 mb-2" />
                <span className="text-2xl font-bold text-gray-900">4</span>
                <span className="text-xs text-gray-600 text-center">
                  Sections
                </span>
              </div>
            </div>

            {/* Instructions */}
            <div className="space-y-4 bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <h3 className="font-semibold text-gray-900 text-lg">
                Test Instructions
              </h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Read each question carefully before answering.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>You cannot go back to previous questions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Ensure a stable internet connection.</span>
                </li>
              </ul>
            </div>

            {/* Action button */}
            <div className="space-y-4 pt-4">
              <button
                onClick={handleStartTest}
                className="w-full px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              >
                Start Test
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Footer note */}
            <p className="text-center text-xs text-gray-500 pt-4">
              By starting this test, you agree to our terms and conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}