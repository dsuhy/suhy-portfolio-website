import React from 'react';
import Image from 'next/image';
import ProjectCard from '../projects/ProjectCard';
import { ProjectCardProps } from '../../types/index';
import ohlenforst from '../../images/projects/ohlenforstandward-hero.png';
import slate from '../../images/projects/slate-hero.png';

const ProjectsSection = () => {
  const projects: ProjectCardProps[] = [
    {
      title: "Ohlenforst & Ward Orthodontics - Irving, TX",
      description: "Elevating patient care through intuitive web design that simplifies the orthodontic booking process.",
      category: "Web Development",
      image: ohlenforst,
      url: "https://www.irvingorthodontist.com"
    },
    {
      title: "Slate Property Tax Solutions - Dallas, TX",
      description: "Breathing life into a startup's vision with a clean web experience, standing out in the competitive property tax landscape.",
      category: "Web Development",
      image: slate,
      url: "https://slatepts.com"
    },
  ];

  return (
    <section className="relative z-10 bg-black/50 backdrop-blur-lg py-24" id='projects'>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Selected Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        {/* <div className="text-center mt-16">
          <button className="px-8 py-4 text-white hover:text-red-400 transition-colors duration-200 border border-white/20 rounded-full">
            View All Projects
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default ProjectsSection;