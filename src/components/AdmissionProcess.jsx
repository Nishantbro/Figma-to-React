import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function AdmissionProcess() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: 'Online Application Form',
      description: 'Apply by filling out a simple online form with your personal, educational, and professional details. Our Admission Head will contact you to proceed with your application.',
      info: 'Once you finish this program, you will receive an Professional Program in Data Science, Machine Learning, and Artificial Intelligence. This certificate is co-branded with E&ICT Academy at IIT Roorkee, which means it\'s backed by a respected institution. It will showcase your expertise in these areas and help demonstrate your skills to employers.'
    },
    {
      title: 'Screening Process',
      description: 'Manual Review of the application by the Admission Director\'s office will gauge your passion and eligibility for the program.',
      info: 'Once you finish this program, you will receive an Professional Program in Data Science, Machine Learning, and Artificial Intelligence. This certificate is co-branded with E&ICT Academy at IIT Roorkee, which means it\'s backed by a respected institution. It will showcase your expertise in these areas and help demonstrate your skills to employers.'
    }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Info Text */}
        <div className="text-center mb-12 max-w-5xl mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed">
            {steps[currentStep].info}
          </p>
        </div>

        {/* Step Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Online Application Card */}
          <div className={`bg-white rounded-3xl p-8 shadow-lg transition-all duration-500 ${
            currentStep === 0 ? 'ring-4 ring-blue-500 scale-105' : 'opacity-60'
          }`}>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              {steps[0].title}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {steps[0].description}
            </p>
          </div>

          {/* Screening Process Card */}
          <div className={`bg-white rounded-3xl p-8 shadow-lg transition-all duration-500 ${
            currentStep === 1 ? 'ring-4 ring-blue-500 scale-105' : 'opacity-60'
          }`}>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              {steps[1].title}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {steps[1].description}
            </p>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-8">
          {/* Previous Button */}
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
              currentStep === 0
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-blue-900 hover:bg-blue-800 hover:scale-110'
            }`}
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>

          {/* Progress Bar */}
          <div className="flex-1 max-w-md">
            <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-900 transition-all duration-500 rounded-full"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <span>Step {currentStep + 1} of {steps.length}</span>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
              currentStep === steps.length - 1
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-blue-900 hover:bg-blue-800 hover:scale-110'
            }`}
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
        </div>

        {/* Step Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentStep
                  ? 'bg-blue-900 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
