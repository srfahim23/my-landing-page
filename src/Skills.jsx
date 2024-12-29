
import React from 'react';

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'TailwindCSS',
  'Bootstrap',
  'SemanticUI',
  'UI/UX',
  'Git/Github',
  'Linux',
];

const Skills = () => {
  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-200 p-4 rounded-lg shadow-md text-center">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;