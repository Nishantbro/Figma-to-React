import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Award, Users, TrendingUp, Briefcase } from 'lucide-react';

export default function ProgramValue() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      icon: <Award className="w-10 h-10 text-blue-900" />,
      title: "Prestigious Certification",
      description: "Earn an Advanced Data Science and Machine Learning certificate from E&ICT IIT Roorkee and an Industrial Training Certificate for real-world experience."
    },
    {
      icon: <Users className="w-10 h-10 text-blue-900" />,
      title: "Placement Support",
      description: "Get help with your resume, interview preparation, and job placement through this course."
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-blue-900" />,
      title: "Industry-Aligned Curriculum",
      description: "Learn from a curriculum designed by industry experts to match current market demands and future trends."
    },
    {
      icon: <Briefcase className="w-10 h-10 text-blue-900" />,
      title: "Real-World Projects",
      description: "Work on live projects and case studies to build a strong portfolio that showcases your expertise to employers."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-pink-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image Section */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=700&fit=crop"
                alt="Professional"
                className="rounded-2xl shadow-2xl w-full"
              />

              {/* Floating Cards */}
              <div className="absolute -left-4 top-12 bg-white rounded-lg shadow-xl p-3 transform hover:scale-105 transition-transform">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-green-100 rounded flex items-center justify-center">
                    <img
                      src="https://img.icons8.com/color/48/eict-logo.png"
                      alt="EICT"
                      className="w-8 h-8"
                      onError={(e) => {
                        e.target.src = "https://img.icons8.com/color/48/graduation-cap.png";
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-800">E&ICT</p>
                    <p className="text-xs text-gray-600">IIT Roorkee</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 top-24 bg-white rounded-lg shadow-xl p-4 transform hover:scale-105 transition-transform">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                  <div>
                    <p className="text-sm font-bold text-gray-800">Growth</p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-4 bottom-24 bg-white rounded-lg shadow-xl p-4 transform hover:scale-105 transition-transform">
                <div className="flex items-center gap-2">
                  <Award className="w-8 h-8 text-yellow-600" />
                  <div>
                    <p className="text-sm font-bold text-gray-800">Certified</p>
                  </div>
                </div>
              </div>

              {/* Main Badge */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white rounded-lg shadow-2xl px-6 py-3">
                <p className="text-lg font-bold">100% Placement Support</p>
              </div>
            </div>

            {/* Background Decorative Shapes */}
            <div className="absolute -z-10 top-0 left-0 w-72 h-72 bg-pink-200 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute -z-10 bottom-0 right-0 w-72 h-72 bg-cyan-200 rounded-full opacity-30 blur-3xl"></div>
          </div>

          {/* Right Column - Content Section */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              <span className="text-blue-900">The unparalleled distinction and transformative </span>
              <span className="text-orange-500">value of this program</span>
            </h1>

            {/* Slider Cards */}
            <div className="relative mt-8">
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {slides.slice(currentSlide, currentSlide + 2).map((slide, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                      {slide.icon}
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-3">
                      {slide.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 bg-blue-900 rounded-full shadow-md flex items-center justify-center hover:bg-blue-800 transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Slide Indicators */}
              <div className="flex gap-2 mt-6">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      currentSlide === index ? 'w-8 bg-blue-900' : 'w-2 bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
