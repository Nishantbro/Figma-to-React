import React, { useState } from 'react';
import { Award, Briefcase, CheckCircle } from 'lucide-react';
import courseCert from '../assets/course-certificate.jpg';
import internshipCert from '../assets/internship-certificate.jpg';

export default function CertificationSection() {
  const [selectedCert, setSelectedCert] = useState('course');

  const certificateImages = {
    course: courseCert,
    internship: internshipCert
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-pink-50 p-8 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-cyan-200 rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Data Science, Machine Learning & AI Certification
            </h1>

            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Once you finish this program, you will receive an{' '}
              <span className="font-bold">Professional Program in Data Science, Machine Learning, and Artificial Intelligence.</span>{' '}
              This certificate is co-branded with{' '}
              <span className="font-bold">E&ICT Academy at IIT Roorkee</span>, which means it's
              backed by a respected institution. It will showcase your expertise in these
              areas and help demonstrate your skills to employers.
            </p>

            {/* Features List */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="bg-white p-4 rounded-full shadow-md group-hover:shadow-lg transition-all">
                  <Award className="w-8 h-8 text-blue-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-1">
                    Globally Recognized Certification
                  </h3>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-white p-4 rounded-full shadow-md group-hover:shadow-lg transition-all">
                  <Briefcase className="w-8 h-8 text-blue-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-1">
                    Career Support
                  </h3>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-white p-4 rounded-full shadow-md group-hover:shadow-lg transition-all">
                  <CheckCircle className="w-8 h-8 text-blue-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-1">
                    Credibility and Validation
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Certificate Image */}
          <div>
            <div className="relative">
              {/* Certificate Card with Image */}
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-6 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-2xl p-4 shadow-inner">
                  {/* Certificate Image */}
                  <img
                    src={certificateImages[selectedCert]}
                    alt={`${selectedCert} certificate`}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>

            {/* Certificate Type Toggle */}
            <div className="flex justify-center gap-8 mt-8">
              <button
                onClick={() => setSelectedCert('course')}
                className={`flex items-center gap-2 text-lg font-semibold transition-colors ${
                  selectedCert === 'course' ? 'text-blue-900' : 'text-gray-400'
                }`}
              >
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedCert === 'course' ? 'border-blue-900 bg-blue-900' : 'border-gray-400'
                }`}>
                  {selectedCert === 'course' && (
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  )}
                </div>
                Course Certificate
              </button>

              <button
                onClick={() => setSelectedCert('internship')}
                className={`flex items-center gap-2 text-lg font-semibold transition-colors ${
                  selectedCert === 'internship' ? 'text-blue-900' : 'text-gray-400'
                }`}
              >
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedCert === 'internship' ? 'border-blue-900 bg-blue-900' : 'border-gray-400'
                }`}>
                  {selectedCert === 'internship' && (
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  )}
                </div>
                Internship Certificate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
