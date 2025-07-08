import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profilePic from '../assets/your-photo.png'; // Replace with your image path
import resumePDF from '../assets/your-resume.pdf'; // Replace with your resume path

export default function Hero() {
  return (
    <section className="bg-[#0a192f] text-white px-6 md:px-16 py-24 min-h-[80vh] flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Left Content */}
      <div className="md:w-1/2">
        <p className="text-green-400 text-lg">Hi, my name is</p>
        <h1 className="text-5xl font-bold mt-2">Chandana</h1>
        <h2 className="text-2xl font-light text-gray-300 mb-4">Software Developer</h2>
        <p className="text-gray-400 max-w-md mb-6">
          Results-oriented developer with experience in embedded systems, Flutter apps,
          and AI-powered job tools. I love turning ideas into scalable software.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-5 mb-6">
          <a
            href="linkedin.com/in/chandana-rajashekhar-855214217"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 text-xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Chandana9700"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white text-xl"
          >
            <FaGithub />
          </a>
        </div>

        {/* Resume Download */}
        <a
          href={resumePDF}
          download="Chandana_Resume.pdf"
          className="inline-block bg-green-500 text-[#0a192f] px-5 py-2 rounded-lg font-semibold hover:bg-green-400 transition"
        >
          Download Resume
        </a>
      </div>

      {/* Right Profile Image */}
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
