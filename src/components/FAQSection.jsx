import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState('Program');
  const [openIndex, setOpenIndex] = useState(null);

  const tabs = ['Program', 'Projects', 'Career', 'Fee/Payment', 'Scholarship'];

  const faqData = {
    Program: [
      {
        question: 'What are the benefits of enrolling on this program?',
        answer: 'You will gain industry-relevant skills, hands-on project experience, mentorship from experts, career support, and certification upon completion.'
      },
      {
        question: 'What format is the program conducting in?',
        answer: 'The program is conducted in a hybrid format with both live online classes and recorded sessions for flexible learning.'
      },
      {
        question: 'Where and how are the live classes conducted?',
        answer: 'Live classes are conducted online via video conferencing platforms with interactive sessions, Q&A, and hands-on coding exercises.'
      },
      {
        question: 'What is the process for enrolling on the program?',
        answer: 'Fill out the registration form, submit required documents, make the payment, and receive confirmation with course access details.'
      },
      {
        question: 'Are there any prerequisites to enrol in this?',
        answer: 'Basic programming knowledge and familiarity with mathematics/statistics is recommended but not mandatory for beginners.'
      },
      {
        question: 'If my class gets missed, what can be done?',
        answer: 'All classes are recorded and made available within 24 hours. You can also schedule a doubt-clearing session with mentors.'
      },
      {
        question: 'What is the process to be followed after enrolment?',
        answer: 'After enrollment, you will receive login credentials, access to the learning portal, course materials, and a welcome orientation session.'
      }
    ],
    Projects: [
      {
        question: 'How many projects are included in the program?',
        answer: 'The program includes 5-7 industry-level projects covering various aspects of Data Science, ML, and AI.'
      },
      {
        question: 'Will I get help with project implementation?',
        answer: 'Yes, dedicated mentors will guide you through each project with code reviews and technical support.'
      }
    ],
    Career: [
      {
        question: 'What career support is provided?',
        answer: 'We provide resume building, interview preparation, mock interviews, and job placement assistance.'
      },
      {
        question: 'Are there placement guarantees?',
        answer: 'While we provide extensive placement support, guarantees depend on individual performance and market conditions.'
      }
    ],
    'Fee/Payment': [
      {
        question: 'What are the payment options available?',
        answer: 'We offer multiple payment options including one-time payment, EMI plans, and installment options.'
      },
      {
        question: 'Is there a refund policy?',
        answer: 'Yes, we have a 7-day refund policy from the date of enrollment if you are not satisfied with the program.'
      }
    ],
    Scholarship: [
      {
        question: 'What scholarships are available?',
        answer: 'We offer merit-based scholarships up to 35% and need-based financial assistance for eligible candidates.'
      },
      {
        question: 'How do I apply for a scholarship?',
        answer: 'Submit your application along with required documents during the enrollment process. Our team will review and notify you.'
      }
    ]
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-blue-900">Frequently Asked </span>
          <span className="text-orange-500">Questions</span>
        </h1>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 border-b border-gray-300">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setOpenIndex(null);
              }}
              className={`px-6 py-3 text-base md:text-lg font-semibold transition-all duration-300 relative ${
                activeTab === tab
                  ? 'text-blue-900'
                  : 'text-gray-500 hover:text-blue-700'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-900 rounded-t-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData[activeTab].map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-medium text-gray-800 pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <div className="w-10 h-10 rounded-full border-2 border-blue-900 flex items-center justify-center bg-blue-50">
                      <X className="w-5 h-5 text-blue-900" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full border-2 border-blue-900 flex items-center justify-center hover:bg-blue-50 transition-colors">
                      <Plus className="w-5 h-5 text-blue-900" />
                    </div>
                  )}
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
