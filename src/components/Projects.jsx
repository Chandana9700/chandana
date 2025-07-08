import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    name: "Unraveling Anxiety Attacks",
    description:
      "Interactive Tableau dashboard and web visualization of symptoms and patterns in anxiety disorders using real-world data.",
    link: "https://github.com/Chandana9700/Anxiety-Disorder-Web-Application"
  },
  {
    name: "Bone Cancer Detection using CNN",
    description:
      "Full-stack web app that accepts medical images and detects bone cancer using a trained CNN model with frontend and backend integration.",
    link: "https://github.com/Chandana9700/Bone-Cancer-Detection"
  },
  {
    name: "Personal Expense Tracker",
    description:
      "Responsive budgeting tool with MySQL integration, allowing users to track expenses in real time via clean UI and secure APIs.",
    link: "https://github.com/Chandana9700/Personal-Expense-Tracker"
  },
  {
    name: "IR Underwater Wireless Communication",
    description:
      "Hardware-based underwater data transmission using Arduino and IR technology. Prototyped IR signaling, switching, and power systems.",
    link: "#" // No live link
  }
];

export default function Projects() {
  return (
    <section className="bg-[#0a192f] text-white px-6 md:px-16 py-16" id="projects">
      <h2 className="text-4xl font-bold text-center text-green-400 mb-12">Projects</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-[#112240] border border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-shadow duration-300 relative group"
          >
            <h3 className="text-2xl font-semibold text-green-300 mb-2">
              {project.name}
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {project.description}
            </p>
            {project.link !== "#" ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 font-medium underline underline-offset-2"
              >
                View Project <FiExternalLink />
              </a>
            ) : (
              <span className="text-gray-500 text-sm italic">Coming soon</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
