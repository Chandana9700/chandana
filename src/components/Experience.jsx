import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Saint Louis University",
    role: "Student Worker – Information Technology Services (End User & A/V Support)",
    period: "June 2025 – Present",
    responsibilities: [
      "Provided campus-wide IT and A/V support, maintaining 99% uptime across 80+ classrooms."
    ]
  },
  {
    company: "Saint Louis University",
    role: "Student Worker – Office of International Services (Newsletter)",
    period: "March 2025 – Present",
    responsibilities: [
      "Designed and published biweekly web and newsletter content for international students."
    ]
  },
  {
    company: "Bosch Global Software Technologies",
    role: "Software Product Developer",
    period: "Sept 2022 – June 2024",
    responsibilities: [
      "Led development of AUTOSAR-compliant software for Jeep ECUs, improving boot time and test coverage."
    ]
  }
];

export default function Experience() {
  return (
    <section className="bg-[#0a192f] text-white px-6 md:px-16 py-16" id="experience">
      <h2 className="text-4xl font-bold mb-16 text-center text-green-400">Experience</h2>

      <div className="relative border-l-2 border-green-500 pl-6 space-y-16">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative bg-[#112240] rounded-xl p-6 shadow-md border border-gray-700"
          >
            <div className="absolute -left-[14px] top-6 w-6 h-6 bg-green-500 rounded-full border-4 border-[#0a192f]"></div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold text-green-300 flex items-center gap-2">
                <FaBriefcase /> {exp.role}
              </h3>
              <span className="text-sm text-gray-400">{exp.period}</span>
            </div>
            <p className="text-sm text-gray-400 italic mb-3">{exp.company}</p>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              {exp.responsibilities.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
