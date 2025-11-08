import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is the Data Science, Machine Learning, AI & GenAI course?",
    answer:
      "The Data Science, Machine Learning, AI & GenAI course is a comprehensive program designed to equip learners with the skills to master data analysis, machine learning algorithms, artificial intelligence concepts, and generative AI technologies. This course covers practical applications in data visualization, predictive modeling, and AI-driven solutions, focusing on real-world projects and industry-relevant tools.",
  },
  {
    question: "What will I learn from this course?",
    answer:
      "You’ll learn data analysis techniques, machine learning algorithms, AI model building, prompt engineering, and integration of AI tools in real-world applications such as automation, predictive analytics, and generative design. The course includes hands-on projects with tools like Python, TensorFlow, and generative AI platforms.",
  },
  {
    question: "Who can enroll in this course?",
    answer:
      "Anyone passionate about data science, AI, or technology — from students and professionals to entrepreneurs — can join this program to enhance their skill set and advance their careers. No prior experience is required, though basic programming knowledge is helpful.",
  },
];

const CourseCurriculum = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-r from-[#0B3B91] to-[#103B9C] text-white py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Data Science, Machine Learning, AI &{" "}
            <span className="text-[#FFB800]">GenAI Course Curriculum</span>
          </h2>

          <div className="mt-10 space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-xl overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "bg-[#1E4DB7] shadow-lg"
                    : "bg-white text-gray-900"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center px-5 py-4 text-left font-semibold"
                >
                  <span
                    className={`text-base font-medium ${
                      openIndex === index ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      openIndex === index
                        ? "rotate-180 text-white"
                        : "text-gray-700"
                    }`}
                  />
                </button>

                <div
                  className={`px-5 pb-5 text-sm leading-relaxed transition-all duration-300 ${
                    openIndex === index
                      ? "max-h-[300px] opacity-100 text-white"
                      : "max-h-0 opacity-0 text-gray-900"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
            alt="Data Science and AI Learning"
            className="w-full max-w-sm lg:max-w-md object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default CourseCurriculum;
