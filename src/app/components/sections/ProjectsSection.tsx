import React from 'react';
import Image from 'next/image';
import ProjectCard from '../projects/ProjectCard';
import { ProjectCardProps } from '../../types/index';
import ohlenforst from '../../images/projects/ohlenforstandward-hero.png';
import slate from '../../images/projects/slate-hero.png';

const ProjectsSection = () => {
  const projects: ProjectCardProps[] = [
    {
      title: "Ohlenforst & Ward Orthodontics",
      description: "A modern e-commerce solution with seamless checkout experience",
      category: "Web Development",
      image: ohlenforst,
      url: "https://www.irvingorthodontist.com" // Add actual URL
    },
    {
      title: "Slate Property Tax Solutions",
      description: "Complete brand identity design for a tech startup",
      category: "Branding",
      image: slate,
      url: "https://slatepts.com" // Add actual URL
    },
  ];

  return (
    <section className="relative z-10 bg-black/50 backdrop-blur-lg py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Selected Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <div className="text-center mt-16">
          <button className="px-8 py-4 text-white hover:text-red-400 transition-colors duration-200 border border-white/20 rounded-full">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;