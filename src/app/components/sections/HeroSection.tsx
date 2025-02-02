// src/components/sections/HeroSection.tsx
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import CircularGradient from '../background/CircularGradient';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <CircularGradient />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          <span className="text-white"> Elevating Digital </span>
          <span className="text-red-400">Presence.</span>

        </h1>
        
        <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-3xl mx-auto">
        Combining strategic design with powerful functionality, we create digital solutions that work as beautifully as they look. 
        From responsive websites to custom applications, we build the tools your business needs to succeed online.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 text-white hover:text-red-400 transition-colors duration-200 border border-white/20 rounded-full">
            View Projects
          </button>
          <button className="px-6 py-3 text-white hover:text-red-400 transition-colors duration-200 border border-white/20 rounded-full flex items-center justify-center">
            Contact Me
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50">
        <span className="text-sm mb-2">Scroll to explore</span>
        <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroSection;


