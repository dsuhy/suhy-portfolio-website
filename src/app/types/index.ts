// src/types/index.ts
import { StaticImageData } from 'next/image';

export interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  image: StaticImageData;
  url: string; // Added URL field
}

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}
