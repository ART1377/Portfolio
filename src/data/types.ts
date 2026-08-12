// src/data/types.ts

export interface Profile {
  name: string;
  title: string;
  bio: string;
  shortBio: string;
  avatar: string;
  location: string;
  yearsOfExperience: number;
  completedProjects: number;
  happyClients: number;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  username: string;
}

export interface Contact {
  email: string;
  phone: string;
  whatsapp: string;
  telegram: string;
}

export interface SiteConfig {
  title: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
    linkedin: string;
  };
}
