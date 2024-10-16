'use client';
import React, { useState } from 'react';

interface Project {
  image: string;
  title: string;
  description: string;
  githubLink: string;
  liveLink: string;
}

const projects: Project[] = [
  {
    image: '/cynthia.png',
    title: 'Clone of Cynthia ugwa',
    description: 'A modern, interactive website crafted with HTML, CSS, and JavaScript ans Gsap for animation.',
    githubLink: 'https://github.com/Emaan002/cynthiaugwu-Website',
    liveLink: 'https://cynthiaugwu-website.vercel.app',
  },
  {
    image: '/resume.png',
    title: 'Resume Builder',
    description: 'This is a dynmic resume builder .',
    githubLink: 'https://github.com/Emaan002/milestone-5',
    liveLink: 'https://milestone-5-peach.vercel.app',
  },
  {
    image: '/Calculator.png',
    title: 'Calculator',
    description: 'Calculator using HTML, CSS, Javascript.',
    githubLink: 'https://github.com/Emaan002/Calculator-using-HTML-CSS-and-Javascript.',
    liveLink: 'https://calculator-using-html-css-and-javascript.vercel.app',
  },
  {
    image: '/health.png',
    title: 'Health Care web',
    description: 'This is my first website using HTML,CSS Javascript.',
    githubLink: 'https://github.com/Emaan002/Healthcare-website',
    liveLink: 'https://healthcare-website-eosin.vercel.app',
  },
  {
    image: '/cricket.png',
    title: 'Cricket Accessories website',
    description: 'This website is built with Next.js.',
    githubLink: 'https://github.com/Emaan002/Cricket-Accessories-web',
    liveLink: 'https://cricket-accessories-web.vercel.app',
  },
  
];

const ProjectSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto pt-20">
  <div className="overflow-hidden rounded-lg border-2 border-purple-500 p-4">
    <div
      className="flex transition-transform duration-500"
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {projects.map((project, index) => (
        <div key={index} className="min-w-full p-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 sm:h-60 md:h-72 object-cover rounded-lg"
          />
          <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>
          <p className="mt-2 text-gray-200">{project.description}</p>
          <div className="mt-4 flex space-x-4">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-white rounded transition hover:underline"
            >
              GitHub Repo
            </a>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2  text-white rounded  transition hover:underline"
            >
              Live Preview
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>

 
  <button
    onClick={goToPrevious}
    className="absolute top-1/2 left-4 transform -translate-y-1/2 px-3 py-1 bg-gray-400 rounded-full text-black font-semibold"
  >
    Prev
  </button>
  <button
    onClick={goToNext}
    className="absolute top-1/2 right-4 transform -translate-y-1/2 px-3 py-1 bg-gray-400 rounded-full text-black font-semibold"
  >
    Next
  </button>
</div>
  );
};

export default ProjectSlider;
