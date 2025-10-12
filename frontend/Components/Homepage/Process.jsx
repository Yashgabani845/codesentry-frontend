'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FilePlus2, Send, BarChart2, CheckSquare } from 'lucide-react';

// A small helper component to handle the sticker/animation display
function Sticker({ imageUrl }) {
  if (!imageUrl) return null;

  return (
    <div className="aspect-square w-full max-w-xs lg:max-w-sm mx-auto flex items-center justify-center">
      <motion.div
        className="w-full h-full"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <img 
          src={imageUrl} 
          alt="Hiring process visual" 
          className="w-full h-full object-contain"
        />
      </motion.div>
    </div>
  );
}


export default function HiringTimeline() {
  const sectionRef = useRef(null);

  // Hook for tracking scroll progress within this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end end"],
  });

  // Transform scroll progress into the height of the progress bar
  const progressBarHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  // Data for the hiring process steps
  const processSteps = [
    {
      step: '01',
      title: 'Create & Customize Assessments',
      description: 'Begin by crafting the perfect skill evaluation. Choose from a vast library of questions across coding, aptitude, and specific frameworks, or add your own. Tailor tests to match the exact requirements of your job role, ensuring you test for what truly matters.',
      icon: FilePlus2,
      stickerUrl: './images/step1_process.png', 
    },
    {
      step: '02',
      title: 'Invite Candidates at Scale',
      description: 'Seamlessly invite applicants to take the assessment. Send individual links or bulk invitations to thousands with a single click. Our platform automates reminders and tracks every candidates progress from invited to completed.',
      icon: Send,
      stickerUrl: './images/step2_process.png',
    },
    {
      step: '03',
      title: 'Analyze with AI-Powered Insights',
      description: 'Go beyond raw scores. Our platform auto-grades submissions and provides deep, actionable analytics. Instantly see top performers, identify skill gaps, and use our AI-powered shortlisting to focus on the most promising talent.',
      icon: BarChart2,
      stickerUrl: './images/step3_process.png',
    },
    {
      step: '04',
      title: 'Make Confident Hiring Decisions',
      description: 'Collaborate with your team, review code playback, and compare candidates side-by-side. Armed with objective data, you can move forward to interviews with confidence, knowing you are talking to the best in the field.',
      icon: CheckSquare,
      stickerUrl: './images/step4_process.png',
    },
  ];

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-slate-50 py-10 sm:py-15 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 md:mb-24"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            An Effortless Hiring Workflow
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            From creating the perfect test to making a data-driven decision, our platform guides you through every step of the hiring journey.
          </p>
        </motion.div>

        {/* The Timeline Container */}
        <div className="relative">
          {/* The vertical line (hidden on mobile, shown on md+) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-slate-200 -ml-0.5 rounded-full" aria-hidden="true" />
          <motion.div 
            style={{ height: progressBarHeight }}
            className="hidden md:block absolute left-1/2 top-0 w-1 bg-gradient-to-b from-blue-500 to-blue-600 -ml-0.5 rounded-full shadow-lg shadow-blue-500/50"
          />

          {/* Mobile vertical line (left-aligned) */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200" aria-hidden="true" />
          <motion.div 
            style={{ height: progressBarHeight }}
            className="md:hidden absolute left-6 top-0 w-0.5 bg-gradient-to-b from-blue-500 to-blue-600"
          />

          {/* Mapping through the process steps */}
          {processSteps.map((item, index) => {
            const isEven = index % 2 === 0;
            const Icon = item.icon;

            const content = (
              <motion.div 
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 sm:p-8 border border-slate-100"
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider mb-3">STEP {item.step}</p>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{item.description}</p>
              </motion.div>
            );

            const sticker = (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Sticker imageUrl={item.stickerUrl} />
              </motion.div>
            );
            
            return (
              <div key={index} className="relative mb-12 sm:mb-16 md:mb-24 last:mb-0">
                {/* Desktop Layout (md+) - Alternating left and right */}
                <div className="hidden md:grid md:grid-cols-2 md:gap-12 items-center">
                  {/* Timeline Node - Desktop */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <motion.div 
                      className="w-14 h-14 bg-white rounded-full border-4 border-slate-200 flex items-center justify-center shadow-lg"
                      whileInView={{ 
                        scale: [1, 1.15, 1],
                        borderColor: ['#e2e8f0', '#3b82f6', '#3b82f6'],
                        boxShadow: [
                          '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                          '0 20px 25px -5px rgba(59, 130, 246, 0.3)',
                          '0 10px 15px -3px rgba(59, 130, 246, 0.2)'
                        ]
                      }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.8, ease: 'easeInOut' }}
                    >
                      <Icon className="w-6 h-6 text-blue-600" />
                    </motion.div>
                  </div>

                  {/* Alternating Content - Desktop */}
                  {isEven ? (
                    <>
                      <div className="pr-8">{content}</div>
                      <div className="pl-8">{sticker}</div>
                    </>
                  ) : (
                    <>
                      <div className="pr-8">{sticker}</div>
                      <div className="pl-8">{content}</div>
                    </>
                  )}
                </div>

                {/* Mobile Layout - Alternating left and right */}
                <div className="md:hidden">
                  {isEven ? (
                    // Left side on mobile
                    <div className="flex gap-4 sm:gap-6 items-start">
                      {/* Timeline Node */}
                      <div className="flex-shrink-0 relative">
                        <motion.div 
                          className="w-12 h-12 bg-white rounded-full border-3 border-slate-200 flex items-center justify-center shadow-md relative z-10"
                          whileInView={{ 
                            scale: [1, 1.1, 1],
                            borderColor: ['#e2e8f0', '#3b82f6', '#3b82f6']
                          }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ duration: 0.8 }}
                        >
                          <Icon className="w-5 h-5 text-blue-600" />
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 pt-1">
                        {content}
                        <div className="mt-6">
                          {sticker}
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Right side on mobile
                    <div className="flex gap-4 sm:gap-6 items-start flex-row-reverse">
                      {/* Timeline Node */}
                      <div className="flex-shrink-0 relative">
                        <motion.div 
                          className="w-12 h-12 bg-white rounded-full border-3 border-slate-200 flex items-center justify-center shadow-md relative z-10"
                          whileInView={{ 
                            scale: [1, 1.1, 1],
                            borderColor: ['#e2e8f0', '#3b82f6', '#3b82f6']
                          }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ duration: 0.8 }}
                        >
                          <Icon className="w-5 h-5 text-blue-600" />
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 pt-1">
                        {content}
                        <div className="mt-6">
                          {sticker}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}