'use client';

import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // The custom font class "font-brown" is no longer needed
  // as DM Sans is inherited from the root layout.
  return (
    <section className="relative flex items-center overflow-hidden bg-gradient-to-br from-white to-sky-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-6 lg:px-12 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-4 items-center">
          <div className={`space-y-6 transition-all duration-1000 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <p className="font-semibold text-sm text-blue-600 tracking-wider uppercase">
              Professional Technical Assessment Platform
            </p>

            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Transform Your Tech Hiring with Expert Skills Assessment Tools
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              Revolutionize your hiring process with our comprehensive assessment platform. Featuring real-world coding challenges, AI-powered evaluation, and industry-standard frameworks to help you identify exceptional tech talent efficiently.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 text-base rounded-lg shadow-md hover:shadow-lg transition-all font-semibold flex items-center justify-center gap-2" aria-label="Start your free trial of our technical assessment platform">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-slate-300 px-7 py-3 text-base rounded-lg hover:bg-slate-100 transition-all font-semibold text-slate-700" aria-label="Schedule a demo of our assessment platform">
                Book a Demo
              </button>
            </div>
          </div>
          <div className={`relative transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <img
              src="/images/hero_section.png" // Using absolute path from public folder
              alt="Interactive dashboard showing technical assessment analytics, coding challenges, and real-time candidate evaluation metrics"
              className="w-full h-auto animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
}