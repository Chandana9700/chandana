import React from 'react';
import devImage from '../assets/developer-illustration.png';

export default function About() {
  return (
    <section className="px-6 md:px-16 py-20 bg-[#0a192f] text-gray-300" id="about">
      <h2 className="text-4xl font-bold mb-12 text-green-400 text-center">About Me</h2>

      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-5">
          <p className="text-lg leading-relaxed">
            I'm <span className="text-green-400 font-medium">Chandana Rajashekhar</span>, a graduate student in Computer Science at
            Saint Louis University with hands-on experience in <strong>embedded systems</strong>, <strong>cloud platforms</strong>, and 
            <strong> mobile/web development</strong>.
          </p>
          <p className="text-lg leading-relaxed">
            I’ve worked as a software developer at Bosch Global Software Technologies. I'm passionate about building 
            <strong> scalable</strong>, <strong>AI-powered</strong> solutions and continuously exploring new technologies.
          </p>
        </div>

        {/* Illustration */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={devImage}
            alt="Developer working illustration"
            className="w-80 h-auto object-contain drop-shadow-lg rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
