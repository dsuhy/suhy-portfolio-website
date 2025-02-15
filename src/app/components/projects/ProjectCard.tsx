import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { ProjectCardProps } from '../../types/index';

const ProjectCard = ({ title, description, category, image, url }: ProjectCardProps) => (
  <div className="group relative overflow-hidden rounded-xl">
    <div className="aspect-video w-full overflow-hidden relative">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    
    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-sm text-gray-400">{category}</span>
        <h3 className="text-xl font-bold text-white mt-2">{title}</h3>
        <p className="text-gray-300 mt-2">{description}</p>
        <a 
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center text-white hover:text-red-400 transition-colors duration-200"
        >
          View Project <ArrowUpRight className="ml-2 w-4 h-4" />
        </a>
      </div>
    </div>
  </div>
);

export default ProjectCard;