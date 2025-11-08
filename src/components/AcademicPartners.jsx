import React from 'react';

function AcademicPartners() {
  const partners = [
    {
      name: "E&ICT Academy IIT Roorkee",
      logo: "https://via.placeholder.com/80x80/4a90e2/ffffff?text=EICT+Roorkee"
    },
    {
      name: "E&ICT Academy IIT Guwahati",
      logo: "https://via.placeholder.com/80x80/1a1a1a/ffffff?text=EICT+GUW"
    },
    {
      name: "E&ICT Academy IIT Kanpur",
      logo: "https://via.placeholder.com/80x80/4a90e2/ffffff?text=EICT+KNP"
    },
    {
      name: "IIT Jodhpur",
      logo: "https://via.placeholder.com/80x80/8b4513/ffffff?text=IIT+JDH"
    },
    {
      name: "E&ICT Academy IIT Patna",
      logo: "https://via.placeholder.com/80x80/ffd700/1a1a1a?text=EICT+PAT"
    },
    {
      name: "IIT Bhilai",
      logo: "https://via.placeholder.com/80x80/4169e1/ffffff?text=IIT+BHL"
    },
    {
      name: "ASTU Guwahati",
      logo: "https://via.placeholder.com/80x80/dc143c/ffffff?text=ASTU"
    },
    {
      name: "Himachal Pradesh University",
      logo: "https://via.placeholder.com/80x80/228b22/ffffff?text=HPU"
    },
    {
      name: "RFRF Foundation",
      logo: "https://via.placeholder.com/80x80/ff6347/ffffff?text=RFRF"
    },
    {
      name: "ABES College",
      logo: "https://via.placeholder.com/80x80/8b4513/ffffff?text=ABES"
    },
    {
      name: "MSIT College",
      logo: "https://via.placeholder.com/80x80/ffa500/1a1a1a?text=MSIT"
    },
    {
      name: "IPEC College",
      logo: "https://via.placeholder.com/80x80/1e90ff/ffffff?text=IPEC"
    }
  ];

  const navItems = [
    "Overview", "Benefits", "Curriculum", "Certifications",
    "Projects", "Faculty", "Career Services", "Fees",
    "Testimonials", "Admission Process", "FAQs"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-2">
            <span className="text-gray-900">Academic </span>
            <span className="text-orange-500 relative">
              Partners
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500"></div>
            </span>
          </h1>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex items-center gap-4 border border-gray-100"
            >
              <div className="flex-shrink-0">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                  {partner.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center items-center gap-4 pt-8 border-t border-gray-200">
          {navItems.map((item, index) => (
            <React.Fragment key={item}>
              <button className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium text-sm">
                {item}
              </button>
              {index < navItems.length - 1 && (
                <span className="text-gray-300">|</span>
              )}
            </React.Fragment>
          ))}
          <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors duration-200 font-medium text-sm ml-4">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcademicPartners;
