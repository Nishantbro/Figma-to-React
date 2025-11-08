import React, { useState, useEffect } from 'react';
import { Clock, Award, Calendar } from 'lucide-react';

export default function DataScienceLanding() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [timeLeft, setTimeLeft] = useState({
    days: 24,
    hours: 13,
    minutes: 58,
    seconds: 16
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    alert('Form submitted! Thank you for your interest.');
    console.log('Form data:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Section */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Start Your Data Science, Machine Learning And AI{' '}
                <span className="text-orange-500">Journey Today!</span>
              </h1>
            </div>

            {/* Offer Details */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-lg">
                <Calendar className="w-5 h-5 text-orange-500" />
                <p>
                  <span className="font-semibold">Limited Seats -</span> October 15th Batch Starting Soon
                </p>
              </div>
              <div className="flex items-center gap-2 text-lg">
                <Award className="w-5 h-5 text-orange-500" />
                <p>
                  Get Up to <span className="font-bold text-xl">35% Scholarship.</span>
                </p>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="grid grid-cols-4 gap-4 max-w-2xl">
              {[
                { value: timeLeft.days, label: 'DAYS' },
                { value: timeLeft.hours, label: 'HOURS' },
                { value: timeLeft.minutes, label: 'MINUTES' },
                { value: timeLeft.seconds, label: 'SECONDS' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-blue-700 bg-blue-900/50 flex items-center justify-center">
                    <span className="text-3xl md:text-4xl font-bold">{item.value}</span>
                  </div>
                  <p className="mt-3 font-semibold text-sm md:text-base">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Call to Action Banner */}
            <div className="bg-white text-gray-900 rounded-full px-8 py-4 inline-flex items-center gap-2 shadow-lg">
              <Clock className="w-5 h-5 text-orange-500" />
              <p className="font-bold text-base md:text-lg">
                Early Bird Offer Ends October 1st - Don't Miss Out!
              </p>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="relative">
            <div className="bg-blue-800/40 backdrop-blur-sm rounded-3xl p-8 border border-blue-700/50 shadow-2xl">
              {/* Contact Us Badge */}
              <div className="absolute -top-4 right-8 bg-gradient-to-br from-orange-400 to-orange-600 text-white px-6 py-2 rounded-full font-bold transform rotate-12 shadow-lg">
                Contact Us
              </div>

              <div className="space-y-4 mt-4">
                {/* Name and Phone Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="*Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-blue-900/50 border border-blue-600 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="*Phone No."
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-blue-900/50 border border-blue-600 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-blue-900/50 border border-blue-600 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />

                {/* Message */}
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-blue-900/50 border border-blue-600 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                />

                {/* Submit Button */}
                <div className="flex gap-4 items-center">
                  <button
                    onClick={handleSubmit}
                    className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Submit
                  </button>
                  <button
                    className="w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12l-5-5h10l-5 5z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Background Image Effect */}
            <div className="absolute -right-8 -bottom-8 w-64 h-64 opacity-20 pointer-events-none">
              <div className="w-full h-full bg-gradient-to-br from-orange-500 to-blue-600 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
