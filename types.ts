import { ReactNode } from 'react';

export interface Socials {
  twitter: string;
  linkedin: string;
  instagram: string;
  behance: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  bio: string;
  longBio: string;
  tags: string[];
  email: string;
  location: string;
  socials: Socials;
}

export interface Skill {
  name: string;
  icon: ReactNode;
  color: string;
}

export interface Project {
  id: number;
  type: string;
  category: string;
  title: string;
  description: string;
  fullDescription: string;
  stack: string[];
  image: string;
  icon: ReactNode;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  logo: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
}

export interface Category {
  type: string;
  icon: ReactNode;
  desc: string;
  color: string;
}