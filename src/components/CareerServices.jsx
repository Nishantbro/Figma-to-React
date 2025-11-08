import React, { useState } from 'react';
import { Users, Briefcase, UserCircle } from 'lucide-react';

export default function CareerServices() {
  const [activeTab, setActiveTab] = useState('placement');

  const tabContent = {
    placement: [
      {
        icon: Users,
        title: 'Interviews With Top Companies',
        description: 'Get access to interview experience upon successful submission of projects. Get interviewed by our 400 + hiring partners.',
        iconBg: 'bg-gradient-to-br from-blue-500 to-blue-700'
      },
      {
        icon: Briefcase,
        title: '100% Placement Support*',
        description: '*If You Complete The Program Successfully With The Defined Passing Criteria',
        iconBg: 'bg-gradient-to-br from-blue-600 to-blue-800'
      }
    ],
    interview: [
      {
        icon: Users,
        title: 'Mock Interview Sessions',
        description: 'Practice with industry experts through realistic mock interviews. Get personalized feedback to improve your performance.',
        iconBg: 'bg-gradient-to-br from-purple-500 to-purple-700'
      },
      {
        icon: Briefcase,
        title: 'Interview Strategy & Tips',
        description: 'Learn proven strategies and techniques to ace technical and HR interviews at top tech companies.',
        iconBg: 'bg-gradient-to-br from-purple-600 to-purple-800'
      }
    ],
    profile: [
      {
        icon: UserCircle,
        title: 'Resume Building',
        description: 'Get expert guidance to create an ATS-friendly resume that highlights your skills and projects effectively.',
        iconBg: 'bg-gradient-to-br from-green-500 to-green-700'
      },
      {
        icon: Briefcase,
        title: 'LinkedIn Profile Optimization',
        description: 'Optimize your LinkedIn profile to attract recruiters and showcase your expertise in data science.',
        iconBg: 'bg-gradient-to-br from-green-600 to-green-800'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative z-10">
              {/* Purple Circle Background */}
              <div className="absolute -inset-8 bg-gradient-to-br from-blue-200 via-purple-200 to-blue-100 rounded-full opacity-40 blur-2xl"></div>

              {/* Image Container */}
              <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-full p-8">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop"
                  alt="Career Services"
                  className="w-full h-auto rounded-full shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            {/* Header */}
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-blue-900">Career </span>
              <span className="text-orange-500">Services</span>
            </h1>

            {/* Tabs */}
            <div className="flex gap-8 mb-8 border-b-2 border-gray-200">
              <button
                onClick={() => setActiveTab('placement')}
                className={`pb-3 px-2 font-semibold text-lg transition-all ${
                  activeTab === 'placement'
                    ? 'text-blue-900 border-b-4 border-blue-900'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                Placement Support
              </button>
              <button
                onClick={() => setActiveTab('interview')}
                className={`pb-3 px-2 font-semibold text-lg transition-all ${
                  activeTab === 'interview'
                    ? 'text-blue-900 border-b-4 border-blue-900'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                Interview Preparation
              </button>
              <button
                onClick={() => setActiveTab('profile')}
                className={`pb-3 px-2 font-semibold text-lg transition-all ${
                  activeTab === 'profile'
                    ? 'text-blue-900 border-b-4 border-blue-900'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                Profile Building
              </button>
            </div>

            {/* Content Cards */}
            <div className="space-y-6">
              {tabContent[activeTab].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="flex gap-4">
                      {/* Icon */}
                      <div className={`${item.iconBg} p-4 rounded-xl flex-shrink-0`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
