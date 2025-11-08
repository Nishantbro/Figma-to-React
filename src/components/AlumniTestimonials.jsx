import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function AlumniTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Rahul Sharma',
      title: 'Marketing Executive',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      text: 'This Digital Marketing Course Taught Me Everything From Basic SEO To Advanced Google Ads. I Learned To Create Effective Campaigns That Brought 40% More Leads To My Company. The Instructors Were Very Helpful.',
      bgImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop'
    },
    {
      name: 'Sneha Gupta',
      title: 'Small Business Owner',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      text: 'I Joined This Course To Promote My Handmade Jewelry Business. The Social Media Marketing Lessons Helped Me Grow My Facebook Page From 200 To 3,000 Followers In Just Three Months.',
      bgImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop'
    },
    {
      name: 'Priya Singh',
      title: 'Data Scientist',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      text: 'The Data Science program helped me transition from a different field into tech. The hands-on projects and mentorship were invaluable in landing my dream job.',
      bgImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];
  const nextTestimonialData = testimonials[(currentIndex + 1) % testimonials.length];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-blue-900">Discover Alumni Similar </span>
            <span className="text-orange-500">To Your Profile</span>
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Find The IoT Academy alumni profile and know more about their career path, specialisation and more
          </p>
        </div>

        {/* Alumni Image Gallery */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          {testimonials.map((alumni, index) => (
            <div
              key={index}
              className="relative h-64 rounded-2xl overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300"
              onClick={() => setCurrentIndex(index)}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-700">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute border-2 border-white rounded-full"
                        style={{
                          width: `${(i + 1) * 60}px`,
                          height: `${(i + 1) * 60}px`,
                          top: `${-(i + 1) * 30}px`,
                          left: `${-(i + 1) * 30}px`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Alumni Image */}
              <div className="absolute right-0 top-0 h-full w-1/2">
                <img
                  src={alumni.image}
                  alt={alumni.name}
                  className="w-full h-full object-cover grayscale"
                />
              </div>

              {/* Active Indicator */}
              {index === currentIndex && (
                <div className="absolute top-4 left-4">
                  <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-start gap-4 mb-8">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-all shadow-md"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center hover:bg-blue-800 transition-all shadow-lg"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Current Testimonial */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 shadow-xl relative overflow-hidden">
            {/* Quote Mark */}
            <div className="absolute top-6 right-6 text-blue-900 opacity-20">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
              ))}
            </div>

            {/* Name and Title */}
            <div className="flex items-start gap-4 mb-6">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{currentTestimonial.name}</h3>
                <p className="text-gray-600 font-medium">{currentTestimonial.title}</p>
              </div>
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-700 leading-relaxed">
              {currentTestimonial.text}
            </p>
          </div>

          {/* Next Testimonial Preview */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-xl relative overflow-hidden">
            {/* Quote Mark */}
            <div className="absolute top-6 right-6 text-blue-900 opacity-20">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(nextTestimonialData.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
              ))}
            </div>

            {/* Name and Title */}
            <div className="flex items-start gap-4 mb-6">
              <img
                src={nextTestimonialData.image}
                alt={nextTestimonialData.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{nextTestimonialData.name}</h3>
                <p className="text-gray-600 font-medium">{nextTestimonialData.title}</p>
              </div>
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-700 leading-relaxed">
              {nextTestimonialData.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
