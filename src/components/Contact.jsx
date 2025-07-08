import React from 'react';

export default function Contact() {
  return (
    <section className="bg-[#0a192f] text-white px-10 py-20 text-center">
      <h2 className="text-3xl font-bold mb-4 text-green-400">Let’s Connect</h2>
      <p className="text-gray-400 mb-6">I’m open to internship or full-time opportunities in software engineering, AI, and cloud-driven systems.</p>
      <div className="flex justify-center gap-6">
        <a href="mailto:chandana.rajashekhar@slu.edu" className="text-blue-400 underline">chandana.rajashekhar@slu.edu</a>
        <a href="https://github.com/Chandana9700" target="_blank" rel="noreferrer" className="text-blue-400 underline">GitHub</a>
        <a href="https://linkedin.com/in/chandana-rajashekhar-855214217" target="_blank" rel="noreferrer" className="text-blue-400 underline">LinkedIn</a>
      </div>
    </section>
  );
}
