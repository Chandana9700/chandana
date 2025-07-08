import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-[#0a192f] border-b border-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <a href="#hero" className="text-2xl font-bold text-green-400 hover:opacity-80 transition">
          Chandana Rajashekhar
        </a>
        <ul className="flex space-x-6 text-sm text-gray-300">
          <li><a href="#about" className="hover:text-green-400 transition">About</a></li>
          <li><a href="#experience" className="hover:text-green-400 transition">Experience</a></li>
          <li><a href="#projects" className="hover:text-green-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-green-400 transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
