import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "Modern E-Commerce Platform",
    description:
      "A full-featured e-commerce solution with real-time inventory management.",
    longDescription:
      "Built with Next.js, TypeScript, and Stripe integration. Features include real-time inventory tracking, AI-powered product recommendations, and a seamless checkout experience.",
    image: "/images/projects/ecommerce.jpg",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/username/ecommerce",
    featured: true,
    year: 2024,
  },
  {
    id: "task-management",
    title: "Collaborative Task Manager",
    description:
      "Real-time task management app with team collaboration features.",
    longDescription:
      "A Trello-like project management tool with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React, Socket.io, and Node.js.",
    image: "/images/projects/taskmanager.jpg",
    tags: ["React", "Socket.io", "Node.js", "MongoDB"],
    liveUrl: "https://example-tasks.com",
    githubUrl: "https://github.com/username/taskmanager",
    featured: true,
    year: 2024,
  },
  {
    id: "ai-content-generator",
    title: "AI Content Generator",
    description:
      "AI-powered tool for generating marketing content and social media posts.",
    longDescription:
      "Leveraging OpenAI's GPT models to create engaging content. Features include tone customization, multi-language support, and content scheduling.",
    image: "/images/projects/ai-content.jpg",
    tags: ["Next.js", "OpenAI", "TypeScript", "Redis"],
    liveUrl: "https://example-ai.com",
    featured: false,
    year: 2023,
  },
];
