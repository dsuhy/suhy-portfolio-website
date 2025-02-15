'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import NavLink from '../common/NavLink';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md' : ''
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <span className="text-white font-bold text-xl font-montserrat">suhy.tech</span>
        </a>

        {/* Desktop Navigation - Commented Out */}
        {/* <div className="hidden md:flex items-center space-x-2">
          <NavLink href="/about">About</NavLink>
          <NavLink href="/promise">Promise</NavLink>
          <NavLink href="/resources">Resources</NavLink>
          <NavLink href="/faq">FAQ</NavLink>
          
          <a 
            href="/contact"
            className="ml-4 px-4 py-2 text-sm text-white hover:text-red-400 transition-colors duration-200 flex items-center"
          >
            Contact
            <ArrowUpRight className="ml-1 w-4 h-4" />
          </a>
        </div> */}

        {/* Mobile Menu Button - Commented Out */}
        {/* <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button> */}
      </div>

      {/* Mobile Menu - Commented Out */}
      {/* {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md">
          <div className="flex flex-col items-center space-y-6 py-8">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/promise">Promise</NavLink>
            <NavLink href="/resources">Resources</NavLink>
            <NavLink href="/faq">FAQ</NavLink>
            <a 
              href="/contact"
              className="text-sm text-white hover:text-red-400 transition-colors duration-200 flex items-center"
            >
              Contact
              <ArrowUpRight className="ml-1 w-4 h-4" />
            </a>
          </div>
        </div>
      )} */}
    </nav>
  );
};

export default Navigation;