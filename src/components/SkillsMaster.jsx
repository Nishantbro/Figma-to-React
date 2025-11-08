import React from 'react';

function SkillsMaster() {
  const filledSkills = [
    "Prompt Engineering",
    "Machine Learning",
    "Artificial Intelligence",
    "Large Language Model"
  ];

  const outlineSkills = [
    "Generative Adversarial Network",
    "Data Visualization",
    "Data Manipulation",
    "Data Analysis",
    "Applied Statistics",
    "Deep Learning",
    "Natural Language Processing",
    "Computer Vision"
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-blue-900">Skills You Will </span>
            <span className="text-orange-500">Master</span>
          </h1>
          <p className="text-gray-700 text-lg">
            Learn cutting-edge skills and future-proof your career.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-6">
          {/* First Row - Filled Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filledSkills.map((skill, index) => (
              <button
                key={index}
                className="bg-blue-900 text-white font-semibold py-4 px-6 rounded-lg hover:bg-blue-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                {skill}
              </button>
            ))}
          </div>

          {/* Second Row - Outline Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {outlineSkills.slice(0, 4).map((skill, index) => (
              <button
                key={index}
                className="bg-white text-blue-900 font-semibold py-4 px-6 rounded-lg border-2 border-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                {skill}
              </button>
            ))}
          </div>

          {/* Third Row - Outline Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {outlineSkills.slice(4, 8).map((skill, index) => (
              <button
                key={index}
                className="bg-white text-blue-900 font-semibold py-4 px-6 rounded-lg border-2 border-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                {skill}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsMaster;
