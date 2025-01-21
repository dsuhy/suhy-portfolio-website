'use client';

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const PortfolioWebsite = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('projects');
  
  // Handle mouse movement for parallax effect
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) / -50;
    const moveY = (clientY - window.innerHeight / 2) / -50;
    setMousePosition({ x: moveX, y: moveY });
  };

  // Only add mouse movement listener after component mounts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Initialize backgroundStyle with no transform to match server rendering
  const backgroundStyle = {
    transform: typeof window !== 'undefined' ? `translate(${mousePosition.x}px, ${mousePosition.y}px)` : 'translate(0px, 0px)',
    transition: 'transform 0.2s ease-out'
  };

  // Sample project data - replace with your own
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, shopping cart functionality, and payment integration.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates. Built using React and Firebase, featuring drag-and-drop functionality and team collaboration tools.",
      tags: ["React", "Firebase", "Material-UI", "Redux"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A weather forecasting application that provides detailed weather information using the OpenWeather API. Features include location search and 7-day forecasts.",
      tags: ["React", "API Integration", "Chart.js"],
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg backdrop-blur-sm bg-opacity-80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">Your Name</span>
            </div>
            <div className="flex space-x-8">
              <button 
                onClick={() => setActiveSection('projects')}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  activeSection === 'projects' 
                    ? 'border-blue-500 text-gray-900' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Projects
              </button>
              <button 
                onClick={() => setActiveSection('about')}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  activeSection === 'about' 
                    ? 'border-blue-500 text-gray-900' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                About
              </button>
              <button 
                onClick={() => setActiveSection('contact')}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  activeSection === 'contact' 
                    ? 'border-blue-500 text-gray-900' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with dynamic background */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-900">
        {/* Animated background patterns */}
        <div className="absolute inset-0 opacity-20">
          <div style={backgroundStyle} className="absolute inset-0">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                  <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
                <pattern id="circles" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="2" fill="white" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
              <rect width="100" height="100" fill="url(#circles)" />
            </svg>
          </div>
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/50 to-indigo-600/50 backdrop-blur-sm"></div>
        
        {/* Animated shapes with fixed positions */}
        <div className="absolute inset-0 overflow-hidden">
          {[
            { size: 200, top: 15, left: 20, delay: 0, duration: 4 },
            { size: 150, top: 60, left: 70, delay: 1, duration: 5 },
            { size: 180, top: 40, left: 25, delay: 0.5, duration: 6 },
            { size: 120, top: 70, left: 80, delay: 1.5, duration: 4.5 },
            { size: 160, top: 25, left: 65, delay: 0.8, duration: 5.5 }
          ].map((shape, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/10 animate-pulse"
              style={{
                width: `${shape.size}px`,
                height: `${shape.size}px`,
                top: `${shape.top}%`,
                left: `${shape.left}%`,
                animationDelay: `${shape.delay}s`,
                animationDuration: `${shape.duration}s`
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              Full-Stack Web Developer
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
              Crafting responsive and user-friendly web applications with modern technologies.
            </p>
            <div className="mt-10 flex justify-center space-x-6">
              <a href="#projects" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-indigo-600 bg-white hover:bg-gray-50 transition-all duration-200">
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-500 bg-opacity-20 hover:bg-opacity-30 transition-all duration-200">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {activeSection === 'projects' && (
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <div key={index} className="bg-white overflow-hidden shadow-lg rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex space-x-3">
                      <a 
                        href={project.demoUrl}
                        className="inline-flex items-center text-sm text-blue-600 hover:text-blue-500"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live Demo
                      </a>
                      <a 
                        href={project.githubUrl}
                        className="inline-flex items-center text-sm text-gray-600 hover:text-gray-500"
                      >
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'about' && (
          <div className="px-4 py-6 sm:px-0">
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About Me</h2>
                <p className="text-gray-600 mb-4">
                  I'm a passionate full-stack developer with expertise in modern web technologies.
                  With a strong foundation in both front-end and back-end development, I create
                  scalable and efficient web applications that solve real-world problems.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'React', 'Node.js', 'Python', 'MongoDB', 'SQL', 'AWS', 'Docker'].map((skill, index) => (
                    <span 
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'contact' && (
          <div className="px-4 py-6 sm:px-0">
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                <div className="space-y-4">
                  <a 
                    href="mailto:your.email@example.com" 
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    your.email@example.com
                  </a>
                  <a 
                    href="https://github.com/yourusername" 
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    github.com/yourusername
                  </a>
                  <a 
                    href="https://linkedin.com/in/yourusername" 
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <Linkedin className="h-5 w-5 mr-2" />
                    linkedin.com/in/yourusername
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2025 Your Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioWebsite;