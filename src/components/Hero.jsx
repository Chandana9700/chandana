// Hero.jsx
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import profilePic from '../assets/your-photo.png'; // ✅ Your actual image
import resumeFile from '../assets/Chandana_Resume.pdf';

export default function Hero() {
  return (
    <section className="px-6 md:px-16 py-20 bg-[#0a192f] text-gray-200 min-h-screen flex flex-col-reverse md:flex-row items-center gap-12">
      
      {/* Text Section */}
      <div className="md:w-1/2 space-y-6">
        <p className="text-green-400 text-xl">Hi, my name is</p>
        <h1 className="text-5xl font-extrabold text-white">Chandana</h1>
        <h2 className="text-2xl text-gray-400">Software Developer</h2>
        <p className="text-lg leading-relaxed">
          Results-oriented developer with experience in embedded systems, Flutter apps, and AI-powered job tools.
          I love turning ideas into scalable software.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4 text-xl">
          <a
            href="https://www.linkedin.com/in/chandana-rajashekhar-855214217"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Chandana9700"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaGithub />
          </a>
        </div>

        {/* Resume Download */}
        <a
          href={resumeFile}
          download="Chandana_Resume.pdf"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg mt-4 transition"
        >
          Download Resume
        </a>
      </div>

      {/* Profile Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={profilePic}
          alt="Chandana"
          className="w-64 h-64 object-cover rounded-full border-4 border-green-400 shadow-lg"
        />
      </div>
    </section>
  );
}
