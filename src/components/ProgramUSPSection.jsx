import React from 'react';

const ProgramUSPSection = () => {
  const uspData = [
    { icon: "💼", title: "Placement Support", desc: "100%" },
    { icon: "💰", title: "Scholarship", desc: "Get Upto 30%" },
    { icon: "🧑‍🏫", title: "Credit Based Program", desc: "For Teachers" },
    { icon: "💻", title: "No Coding Experience Needed", desc: "Non-Tech Can Also Apply" },
    { icon: "🎓", title: "IIT Designed Curriculum", desc: "Certificate From IIT" },
    { icon: "📂", title: "Industry Based Projects", desc: "50+ Live Projects" },
    { icon: "🏫", title: "Campus Immersion Program", desc: "Experience IIT-R's Campus Life" },
    { icon: "🧾", title: "Corporate Internship", desc: "3-Months Internship" },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-cyan-50 to-pink-50 py-12 px-6 flex flex-col lg:flex-row justify-between items-start gap-10">

      {/* Left Side - USP Points */}
      <div className="w-full lg:w-2/3">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Core <span className="text-orange-500">USPs Of This Program</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {uspData.map((usp, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="text-3xl">{usp.icon}</div>
              <div>
                <p className="font-semibold text-gray-800">{usp.title}</p>
                <p className="text-blue-600 font-medium">{usp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/3 bg-gradient-to-b from-blue-800 to-blue-900 p-8 rounded-2xl text-white shadow-lg">
        <h3 className="text-xl font-bold mb-6 text-center">
          Request More Information
        </h3>

        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Full Name*"
            className="p-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            placeholder="Mobile Number*"
            className="p-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email*"
            className="p-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Select Best Time To Call*"
            className="p-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md transition-all flex justify-center items-center gap-2"
          >
            Submit <span>↗</span>
          </button>
        </form>

        <p className="text-xs mt-4 text-center text-gray-200">
          By submitting the form, you agree to our{" "}
          <a href="#" className="underline text-white hover:text-orange-300">
            Terms and Conditions
          </a>{" "}
          and our{" "}
          <a href="#" className="underline text-white hover:text-orange-300">
            Privacy Policy
          </a>.
        </p>
      </div>
    </section>
  );
};

export default ProgramUSPSection;
