import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function CareerOpportunities() {
  const leftColumn = [
    'Business Intelligence Analyst',
    'Data Architect',
    'Machine Learning Engineer',
    'Data Scientist',
    'Data Mining Engineer',
    'NLP Scientist'
  ];

  const rightColumn = [
    'Industrial Engineer',
    'Machine Learning Engineer',
    'Data Mining Engineer',
    'AI Developer',
    'IoT Developer',
    'IoT Developer'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-pink-50 p-8 py-16 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-cyan-200 rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-blue-900">What Can I </span>
            <span className="text-orange-500">Become ?</span>
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Card - Career List */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              These are the top career opportunities after completing a Data Science certification course:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                {leftColumn.map((career, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-900 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800 font-medium">{career}</span>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                {rightColumn.map((career, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-900 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800 font-medium">{career}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Card - Glassdoor Info */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 flex flex-col">
            {/* Top Section */}
            <div className="flex-1 flex items-center justify-center mb-8">
              <div className="text-center">
                <p className="text-gray-700 text-xl leading-relaxed max-w-md">
                  India tops global demand for data analytics jobs. India stands out as a global hub, with nearly a quarter of its job posting focused on data analytics.
                </p>
              </div>
            </div>

            {/* Glassdoor Section */}
            <div className="border-t border-gray-200 pt-8">
              <div className="flex items-center justify-center gap-4">
                {/* Glassdoor Logo */}
                <div className="flex items-center">
                  <svg width="140" height="40" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="28" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#0CAA41">
                      glassdoor
                    </text>
                    <rect x="0" y="10" width="8" height="20" fill="#0CAA41" rx="2"/>
                    <rect x="2" y="5" width="4" height="10" fill="#0CAA41" rx="1"/>
                  </svg>
                </div>

                {/* Divider */}
                <div className="h-12 w-px bg-gray-300"></div>

                {/* Text */}
                <div className="text-left">
                  <p className="text-gray-700 font-medium">
                    Average Industry Salary for{' '}
                    <span className="font-bold text-blue-900">Data Scientist, Machine Learning</span>{' '}
                    Roles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
