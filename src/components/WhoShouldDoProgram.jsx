import React from 'react';

export default function WhoShouldDoProgram() {
  const audiences = [
    'Freshers',
    'Graduates/ Post Graduates / PhD',
    'Working Professionals',
    'Entrepreneurs',
    'DS/ML/AI Enthusiasts'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      {/* Top Section - Who Should Do */}
      <div className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="text-blue-900">Who Should Do </span>
              <span className="text-orange-500">This Program?</span>
            </h1>
          </div>

          {/* Audience Cards - First Row */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {audiences.slice(0, 3).map((audience, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-blue-900"
              >
                <h3 className="text-xl font-bold text-blue-900 text-center">
                  {audience}
                </h3>
              </div>
            ))}
          </div>

          {/* Audience Cards - Second Row (Centered) */}
          <div className="flex justify-center gap-6">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
              {audiences.slice(3).map((audience, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-blue-900"
                >
                  <h3 className="text-xl font-bold text-blue-900 text-center">
                    {audience}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Corporate Internship */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-16 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Corporate <span className="text-orange-500">Internship</span>
            </h2>
            <p className="text-white text-lg max-w-3xl mx-auto">
              Gain hands-on experience through exclusive internship programs, working on real-world projects to enhance your skills and industry exposure.
            </p>
          </div>

          {/* Internship Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Internship Opportunities Card */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="mb-6">
                <div className="bg-orange-500 text-white px-6 py-3 rounded-xl inline-block font-bold text-lg shadow-lg">
                  Internship Opportunities
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Gain hands-on experience through exclusive internship programs, working on real-world projects to enhance your skills and industry exposure.
              </p>
              
              {/* Decorative Icon Background */}
              <div className="mt-8 relative h-32 overflow-hidden opacity-10">
                <svg className="absolute bottom-0 right-0 w-48 h-48" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="40" stroke="#0066B3" strokeWidth="2"/>
                  <path d="M30 50 L45 50 L45 35 L55 35 L55 50 L70 50 L70 60 L55 60 L55 75 L45 75 L45 60 L30 60 Z" fill="#0066B3"/>
                </svg>
              </div>
            </div>

            {/* Industry Networking Card */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="mb-6">
                <div className="bg-orange-500 text-white px-6 py-3 rounded-xl inline-block font-bold text-lg shadow-lg">
                  Industry Networking
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Connect with industry professionals and mentors through internship programs, expanding your professional network for future opportunities.
              </p>
              
              {/* Decorative Icon Background */}
              <div className="mt-8 relative h-32 overflow-hidden opacity-10">
                <svg className="absolute bottom-0 right-0 w-48 h-48" viewBox="0 0 100 100" fill="none">
                  <circle cx="30" cy="40" r="12" fill="#0066B3"/>
                  <circle cx="70" cy="40" r="12" fill="#0066B3"/>
                  <circle cx="50" cy="70" r="12" fill="#0066B3"/>
                  <line x1="35" y1="45" x2="45" y2="65" stroke="#0066B3" strokeWidth="3"/>
                  <line x1="65" y1="45" x2="55" y2="65" stroke="#0066B3" strokeWidth="3"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
