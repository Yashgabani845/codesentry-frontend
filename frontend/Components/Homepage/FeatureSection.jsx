'use client';

import { Code, Lightbulb, UserCheck, Briefcase, BarChart2, Zap, ArrowRight } from 'lucide-react';

export default function FeatureSection() {
  // Data is now structured for two main panels, matching the new design.
  const candidateData = {
    category: "For Candidates",
    title: "Unlock Your Career Potential",
    imageUrl: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: [
      {
        icon: Code,
        title: "Real-World Coding Challenges",
        description: "Solve problems curated from top tech companies to sharpen your skills.",
      },
      {
        icon: Lightbulb,
        title: "Aptitude & Problem Solving",
        description: "Enhance your logical reasoning and analytical abilities with targeted tests.",
      },
      {
        icon: UserCheck,
        title: "Tailored Interview Prep",
        description: "Access company-specific questions and expert tips to ace your interviews.",
      },
    ],
  };

  const companyData = {
    category: "For Companies",
    title: "Discover & Hire Top Talent",
    imageUrl: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: [
      {
        icon: Briefcase,
        title: "Custom Assessment Creation",
        description: "Build bespoke technical tests that precisely match your job requirements.",
      },
      {
        icon: BarChart2,
        title: "In-Depth Candidate Analytics",
        description: "Utilize detailed reports and smart ranking to identify the best candidates.",
      },
      {
        icon: Zap,
        title: "Streamlined Evaluation Workflow",
        description: "Automate grading and standardize feedback to accelerate your hiring pipeline.",
      },
    ],
  };

  return (
    <section className="bg-gray-50/50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            The Complete Platform for Tech Excellence
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to land your dream job or build your dream team.
          </p>
        </div>

        {/* Two-Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          <FeaturePanel data={candidateData} accentColor="blue" />
          <FeaturePanel data={companyData} accentColor="blue" />
        </div>
      </div>
    </section>
  );
}

// A reusable panel component for Candidates and Companies
function FeaturePanel({ data, accentColor }) {
  const accentColors = {
    blue: {
      text: 'text-blue-600',
      bg: 'bg-blue-50',
      icon: 'text-blue-700',
    },
    indigo: {
      text: 'text-indigo-600',
      bg: 'bg-indigo-50',
      icon: 'text-indigo-700',
    },
  };

  const colors = accentColors[accentColor] || accentColors.blue;

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden h-full flex flex-col">
      {/* Small Image at the top */}
      <div className="h-40 w-full">
         <img src={data.imageUrl} alt={data.title} className="w-full h-full object-cover" />
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div>
          <p className={`font-semibold text-sm ${colors.text} mb-1`}>{data.category}</p>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">{data.title}</h3>
        </div>

        {/* List of Features */}
        <ul className="space-y-5">
          {data.features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <li key={index} className="flex items-start">
                <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${colors.icon}`} strokeWidth={2} />
                </div>
                <div className="ml-4">
                  <h4 className="text-md font-semibold text-gray-800">{feature.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                </div>
              </li>
            );
          })}
        </ul>

         {/* Optional CTA Button at the bottom */}
        <div className="mt-auto pt-8">
            <a href="#" className={`font-semibold text-sm ${colors.text} hover:underline`}>
              Learn more &rarr;
            </a>
        </div>
      </div>
    </div>
  );
}