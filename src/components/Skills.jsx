import React from 'react';

const skills = {
  "Programming Languages": ["Python", "Java", "TypeScript", "SQL"],
  "Frameworks & Tools": ["Node.js", "Apache Kafka", "AUTOSAR", "RTE Integration", "BSW/OS Config"],
  "Hardware & Systems": ["IFX Microcontroller", "Sensor & Actuator Config", "Complex Device Drivers"],
  "Web & Design": ["Website Content Creation", "Graphic Designing", "Microsoft 365"],
  "Soft Skills": ["Cross-Cultural Communication", "Customer Service", "Multitasking"]
};

export default function Skills() {
  return (
    <section className="bg-[#0a192f] text-white px-6 md:px-16 py-16" id="skills">
      <h2 className="text-4xl font-bold text-center text-green-400 mb-12">Skills</h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
        {Object.entries(skills).map(([category, items], idx) => (
          <div
            key={idx}
            className="bg-[#112240] border border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold text-green-300 mb-4">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {items.map((skill, i) => (
                <span
                  key={i}
                  className="bg-gray-800 text-gray-300 font-bold px-4 py-1 rounded-full text-sm hover:bg-green-400 hover:text-[#0a192f] transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
