// src/app/Components/Separator.jsx
'use client'
import React from 'react';
import { motion } from 'framer-motion';

export default function Separator() {
  return (
    <div className="flex justify-center py-12 md:py-16 bg-white">
      {/* The main decorative line - now single, simple, and subtly animated */}
      <motion.div
        className="w-full max-w-lg h-px bg-slate-200 rounded-full" // h-px for a very thin line, max-w-lg for a slightly longer line
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.8 }} // Appears when most of it is in view
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
    </div>
  );
}