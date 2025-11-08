import React, { useState } from 'react';
import { ChevronDown, Star, Play } from 'lucide-react';
import { BookOpen, Target, Award, TrendingUp, Briefcase } from 'lucide-react';

function CourseOverview() {
  const [openAccordion, setOpenAccordion] = useState(0); // First one open by default

  const accordionItems = [
    {
      title: "Introduction to Data Science, Machine Learning, AI & GenAI Course",
      content: "This comprehensive course introduces you to the fundamental concepts of Data Science, Machine Learning, Artificial Intelligence, and Generative AI. You'll learn the core principles and practical applications that drive modern technology.",
      icon: BookOpen
    },
    {
      title: "Why Online Data Science and Machine Learning Course?",
      content: "Online learning offers flexibility, accessibility, and the ability to learn at your own pace. Our course provides industry-relevant skills, hands-on projects, and expert mentorship to help you succeed in the field of Data Science and AI.",
      icon: Target
    },
    {
      title: "What are the Learning Objectives of This Data Science Machine Learning Course?",
      content: "Master statistical analysis, predictive modeling, deep learning algorithms, and AI implementation. Gain expertise in Python, R, TensorFlow, and other essential tools used by industry professionals.",
      icon: Award
    },
    {
      title: "What Skills and Techniques Will I Gain From This Data Science Course?",
      content: "You'll develop proficiency in data analysis, machine learning algorithms, neural networks, natural language processing, computer vision, and generative AI technologies. Learn to build end-to-end ML pipelines and deploy AI solutions.",
      icon: TrendingUp
    },
    {
      title: "What Certifications Will I Receive After Completion?",
      content: "Upon successful completion, you'll receive industry-recognized certifications from our academic partners including IITs and other prestigious institutions, validating your expertise in Data Science and AI.",
      icon: Star
    },
    {
      title: "What Career Opportunities Are Available After Completing This Data Science Course?",
      content: "Graduates can pursue roles as Data Scientists, ML Engineers, AI Specialists, Business Analysts, Research Scientists, and more. The course prepares you for high-demand positions across tech, finance, healthcare, and other industries.",
      icon: Briefcase
    }
  ];

  const stats = [
    { number: "94%", label: "Placement Rate" },
    { number: "50+", label: "Live Projects" },
    { number: "500+", label: "Companies Hiring" },
    { number: "10:1", label: "Student-Mentor Ratio" }
  ];

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
            <Star className="w-5 h-5 text-orange-400" />
            <span className="text-white font-semibold text-sm">Comprehensive Learning Path</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Data Science & AI
            <span className="block text-orange-400">Course Overview</span>
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Master the complete spectrum of Data Science, Machine Learning, Artificial Intelligence, and Generative AI with industry-aligned curriculum
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Accordion */}
          <div className="space-y-4">
            {accordionItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl shadow-2xl overflow-hidden border-l-4 transition-all duration-300 hover:shadow-3xl ${
                    openAccordion === index
                      ? 'border-orange-500 scale-[1.02]'
                      : 'border-blue-500 hover:border-orange-400'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-6 flex items-start gap-4 text-left hover:bg-gray-50 transition-colors duration-200 group"
                  >
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                      openAccordion === index ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600 group-hover:bg-orange-100 group-hover:text-orange-600'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className={`font-bold text-lg leading-relaxed transition-colors ${
                        openAccordion === index ? 'text-gray-900' : 'text-gray-800 group-hover:text-gray-900'
                      }`}>
                        {item.title}
                      </h3>
                    </div>

                    <ChevronDown
                      className={`flex-shrink-0 w-6 h-6 transition-all duration-300 ${
                        openAccordion === index
                          ? 'transform rotate-180 text-orange-600'
                          : 'text-gray-400 group-hover:text-orange-600'
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openAccordion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6 ml-16 border-t border-gray-100 pt-4">
                      <p className="text-gray-700 text-base leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column - Content */}
          <div className="lg:sticky lg:top-8 space-y-8">
            {/* Video Card */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=500&fit=crop"
                  alt="Academic Building"
                  className="w-full h-64 object-cover"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 group">
                    <Play className="w-8 h-8 text-blue-900 ml-1 group-hover:text-orange-600 transition-colors" fill="currentColor" />
                  </button>
                </div>

                {/* Building Name Badge */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-white/20">
                  <p className="text-gray-800 font-bold text-sm tracking-wider uppercase">
                    ARTS COMMERCE BUILDING
                  </p>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Course Introduction Video</h3>
                <p className="text-gray-600 mb-4">
                  Watch our comprehensive course overview and hear from our industry experts about the learning journey ahead.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Duration: 15:30 mins</span>
                  <span>1.2K views</span>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 text-center shadow-2xl">
              <h3 className="text-white font-bold text-lg mb-3">Ready to Start Your Journey?</h3>
              <p className="text-orange-100 text-sm mb-4">
                Join thousands of successful graduates in the field of Data Science and AI
              </p>
              <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-300">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;
