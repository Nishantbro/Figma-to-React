import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function ProgramFeeSection() {
  const includedFeatures = [
    '240+ Hours of Instructor-Led Live Training',
    'Certification from E&ICT Academy, IIT Roorkee',
    'Learn From IIT Professors and the Industry Experts',
    'Access to Course Materials and Resources',
    'Hands-on Projects and Case Studies',
    '100% Placement Support by a Dedicated Team*'
  ];

  const additionalBenefits = [
    'Lifetime Access to Live-Recorded Sessions',
    'Complimentary Career Guidance or Resume-building',
    'Three Months Internship Experience By Industry Partners',
    '1:1 Doubt Resolution in Live Sessions'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
          <span className="text-blue-900">Data Science, Machine Learning & AI </span>
          <span className="text-orange-500">Program Fee</span>
        </h1>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - What's Included */}
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              What's Included in the Fee
            </h2>

            <div className="space-y-4">
              {includedFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Additional Benefits
              </h3>

              <div className="space-y-4">
                {additionalBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                      </div>
                    </div>
                    <p className="text-gray-700 text-base leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Certification & Financial Partners */}
          <div className="space-y-8">
            {/* Certification Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    Advanced Certification In Data Science, Machine Learning & AI By E&ICT Academy, IIT Roorkee.
                  </h2>
                </div>
                <div className="flex-shrink-0">
                  <div className="bg-blue-900 text-white px-4 py-2 rounded-lg font-bold whitespace-nowrap">
                    <span className="text-sm">Fee:</span>
                    <span className="text-lg ml-1">₹ 84,000 + GST</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1 text-right">
                    (Avail Scholarship Up To 30%)
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <button className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Register Now
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="flex-1 bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl">
                  View Plan
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Logos */}
              <div className="flex items-center justify-center gap-4 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="bg-blue-900 text-white px-3 py-1 rounded text-sm font-bold">
                    e<span className="text-orange-500">i</span>ct
                  </div>
                  <span className="text-xs text-gray-600">ACADEMY</span>
                </div>
                <div className="w-px h-8 bg-gray-300"></div>
                <div className="text-sm font-semibold text-gray-700">
                  The IoT Academy
                </div>
              </div>
            </div>

            {/* Financial Partners Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Financial Partners
              </h2>

              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Candidates can pay the course fee through Netbanking and credit/Debit cards. Also,
                with our corporate financial partnerships available education loans at 0% interest rate*
              </p>

              <div className="flex items-center justify-start gap-8 flex-wrap">
                {/* Razorpay Logo */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                    <div className="w-5 h-5 bg-white rounded-sm"></div>
                  </div>
                  <span className="text-2xl font-bold text-blue-900">Razorpay</span>
                </div>

                {/* Zest Logo */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Z</span>
                  </div>
                  <span className="text-2xl font-bold text-gray-800">zest</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
