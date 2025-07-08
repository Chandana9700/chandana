import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0a192f] text-gray-400 text-sm py-6 text-center border-t border-gray-800">
      <p>
        &copy; {new Date().getFullYear()} Chandana Rajashekhar • Built with React & Tailwind CSS
      </p>
      <div className="mt-2 flex justify-center gap-4">
        <a
          href="https://github.com/Chandana9700"
          target="_blank"
          rel="noreferrer"
          className="hover:text-green-400"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/chandana-rajashekhar-855214217"
          target="_blank"
          rel="noreferrer"
          className="hover:text-green-400"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
