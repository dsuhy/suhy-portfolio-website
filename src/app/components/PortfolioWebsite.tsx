// src/components/PortfolioWebsite.tsx
'use client';

import React from 'react';
import MovingBackground from './background/MovingBackground';
import CustomCursor from './common/CustomCursor';
import Navigation from './layout/Navigation';
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import { FormspreeProvider } from '@formspree/react';

const PortfolioWebsite = () => {
    return (
        <div className="bg-[#111111] min-h-screen cursor-none">
            <MovingBackground />
            <CustomCursor />
            <Navigation />
            <HeroSection />
            <ProjectsSection />
            <ContactSection />
        </div>
    );
};

export default PortfolioWebsite;