// src/data.js
import { Github, Linkedin, Twitter, Mail, Globe, Star, Users, Folder, GitCommit } from "lucide-react";

export const siteData = {
  hero: {
    welcomeText: "WELCOME TO MY PORTFOLIO",
    nameFirst: "MUHAMMET EMIN",
    nameLast: "KORKMAZ",
    title: "Hardware & AI Engineer building the Web.",
    description: "Specializing in edge computing, real-time ML systems, and embedded solutions.",
    status: "Available for work",
    version: "v2.0.24"
  },
  stats: [
    { id: 1, label: "Years Exp.", value: "3+", icon: Star },
    { id: 2, label: "Projects", value: "12+", icon: Folder },
    { id: 3, label: "Commits", value: "850+", icon: GitCommit },
    { id: 4, label: "Clients", value: "10+", icon: Users }
  ],
  skills: [
    { id: "1", name: "Python", icon: "🐍" },
    { id: "2", name: "C++", icon: "⚡" },
    { id: "3", name: "C", icon: "💻" },
    { id: "4", name: "CUDA", icon: "🚀" },
    { id: "5", name: "YOLO", icon: "👁️" },
    { id: "6", name: "OpenCV", icon: "📷" },
    { id: "7", name: "PyTorch", icon: "🔥" },
    { id: "8", name: "Jetson", icon: "🤖" },
    { id: "9", name: "React", icon: "⚛️" }
  ],
  skillsSummary: "Focus: Specializing in real-time Computer Vision and NLP solutions. Experienced in deploying optimized YOLO and LLM models on NVIDIA Jetson edge devices using CUDA and C++.",
  projects: [
    {
      id: 1,
      title: "YOLOv8 Quality Control",
      description: "Real-time bottle cap defect detection system for conveyor belts using Computer Vision.",
      category: "AI / VISION",
      accent: "cyan"
    },
    {
      id: 2,
      title: "Edge AI Surveillance",
      description: "Optimized people detection running on NVIDIA Jetson Nano with 30+ FPS.",
      category: "HARDWARE",
      accent: "purple"
    },
    {
      id: 3,
      title: "Portfolio Web App",
      description: "Modern portfolio website built with React, Tailwind and Framer Motion.",
      category: "WEB DEV",
      accent: "pink"
    }
  ],
  socials: [
    { icon: Github, href: "https://github.com/eminkorkmaz", label: "GitHub", color: "hover:text-foreground hover:shadow-neon-cyan" },
    { icon: Linkedin, href: "https://linkedin.com/in/eminkorkmaz", label: "LinkedIn", color: "hover:text-[#0077B5] hover:shadow-neon-cyan" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "hover:text-[#1DA1F2] hover:shadow-neon-cyan" },
    { icon: Mail, href: "mailto:iletisim@eminkorkmaz.com", label: "Email", color: "hover:text-secondary hover:shadow-neon-purple" }
  ],
  footerText: "© 2024 Muhammet Emin Korkmaz • Built with ♥ and React"
};