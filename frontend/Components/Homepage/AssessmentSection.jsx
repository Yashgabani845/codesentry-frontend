'use client';

import { TerminalSquare, Calculator, Target, Wand2 } from 'lucide-react';

export default function AssessmentCategories() {
  const categories = [
    {
      icon: TerminalSquare,
      title: "Coding Assessments",
      description: "Dive into a vast library of DSA, algorithm, and system design problems sourced from real-world company interviews.",
      link: "#", // Replace with actual link
      accentColor: "blue",
    },
    {
      icon: Calculator,
      title: "Aptitude Tests",
      description: "Sharpen your mind with comprehensive tests covering Quantitative, Logical Reasoning, and Verbal ability sections.",
      link: "#",
      accentColor: "indigo",
    },
    {
      icon: Target,
      title: "Company-Specific Rounds",
      description: "Practice curated assessment patterns and questions from top tech giants like Google, Amazon, Microsoft, and more.",
      link: "#",
      accentColor: "emerald",
    },
    {
      icon: Wand2,
      title: "AI-Guided Hints",
      description: "Never get stuck. Our intelligent system provides smart, contextual hints to guide you toward the optimal solution.",
      link: "#",
      accentColor: "rose",
    },
  ];

  return (
    <section className="bg-white py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Choose Your Challenge
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Practice across a diverse range of assessments to build a well-rounded technical and logical skillset.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            
            const accentClasses = {
              blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
              indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600' },
              emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600' },
              rose: { bg: 'bg-rose-100', text: 'text-rose-600' },
            };
            
            const colors = accentClasses[category.accentColor] || accentClasses.blue;

            return (
              <a
                key={index}
                href={category.link}
                className="group block text-center p-8 bg-white rounded-xl border border-gray-200 shadow-sm
                           hover:shadow-lg hover:border-gray-300 transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5
                                 transition-all duration-300 group-hover:scale-110 ${colors.bg}`}>
                  <Icon className={`w-8 h-8 ${colors.text}`} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {category.description}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}