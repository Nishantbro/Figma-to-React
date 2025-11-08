import React from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Star, TrendingUp, Users, Target } from "lucide-react";

const projects = [
  {
    title: "COVID Analysis in India",
    description:
      "Web Scrape the data from the official government website and find various insights by comparing the trend of COVID in India as compared to the world.",
    image:
      "https://cdn.pixabay.com/photo/2020/04/23/17/54/covid-19-5084105_1280.jpg",
  },
  {
    title: "Twitter Sentiment Analysis Via Tweepy",
    description:
      "Analyzing the tweets for understanding the sentiments of users towards trending topics or events.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/X_logo_2023_original.svg/1024px-X_logo_2023_original.svg.png",
  },
  {
    title: "Forecast Air Passenger Traffic",
    description:
      "To build a model to forecast the demand (passenger traffic) in airplanes using time-series data.",
    image:
      "https://cdn.pixabay.com/photo/2016/11/29/03/53/aircraft-1866827_1280.jpg",
  },
  {
    title: "Chronic Kidney Disease Prediction",
    description:
      "Accurate prediction of CKD progression over time for reducing its costs and the mortality rates.",
    image:
      "https://cdn.pixabay.com/photo/2020/02/27/08/52/kidney-4884968_1280.jpg",
  },
];

const LiveIndustryProjects = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-16 bg-gradient-to-r from-[#E6F8F1] via-[#FFF7F7] to-[#FFEFEF] overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="relative z-10">
        {/* Stats Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/20">
              <div className="flex justify-center mb-3">
                <Target className="w-8 h-8 text-[#001E80]" />
              </div>
              <div className="text-2xl font-bold text-[#001E80] mb-1">50+</div>
              <div className="text-gray-600 text-sm font-medium">Live Projects</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/20">
              <div className="flex justify-center mb-3">
                <Users className="w-8 h-8 text-[#001E80]" />
              </div>
              <div className="text-2xl font-bold text-[#001E80] mb-1">1000+</div>
              <div className="text-gray-600 text-sm font-medium">Students Trained</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/20">
              <div className="flex justify-center mb-3">
                <TrendingUp className="w-8 h-8 text-[#001E80]" />
              </div>
              <div className="text-2xl font-bold text-[#001E80] mb-1">94%</div>
              <div className="text-gray-600 text-sm font-medium">Success Rate</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/20">
              <div className="flex justify-center mb-3">
                <Star className="w-8 h-8 text-[#001E80]" />
              </div>
              <div className="text-2xl font-bold text-[#001E80] mb-1">4.9/5</div>
              <div className="text-gray-600 text-sm font-medium">Student Rating</div>
            </div>
          </div>

          {/* Heading */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20 shadow-lg">
              <Star className="w-5 h-5 text-[#FFB800]" fill="#FFB800" />
              <span className="text-[#001E80] font-semibold text-sm">Hands-on Industry Experience</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-[#1E2A78]">Live Industry </span>
              <span className="text-[#FFB800]">Projects</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              Industry projects are a part of online data science machine learning
              training. Such projects will ensure exposure to real-world experience
              for starting a career in DS, ML, AI, and GenAI.
            </p>
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-[#001E80] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    Project {index + 1}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#001E80] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows and Button */}
        <div className="flex flex-col items-center gap-8">
          <div className="flex gap-4">
            <button className="p-4 rounded-2xl bg-[#001E80] hover:bg-[#0A2ECF] text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 border-2 border-transparent hover:border-white/20">
              <ArrowLeft size={24} />
            </button>
            <button className="p-4 rounded-2xl bg-[#001E80] hover:bg-[#0A2ECF] text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 border-2 border-transparent hover:border-white/20">
              <ArrowRight size={24} />
            </button>
          </div>

          <button className="group flex items-center gap-3 bg-[#001E80] hover:bg-[#0A2ECF] text-white px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 border-2 border-transparent hover:border-white/20">
            Download Project List 
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LiveIndustryProjects;