import React from 'react';

export default function FacultiesSection() {
  const faculties = [
    {
      name: 'Prof. Sumit Kalra',
      title: 'Department of Computer Science & Engineering, IIT Jodhpur',
      image: 'https://via.placeholder.com/150/cccccc/666666?text=Prof.+Sumit',
      logo: 'https://via.placeholder.com/80/ffffff/003366?text=IIT+Jodhpur'
    },
    {
      name: 'Kaushtendra Sisodia',
      title: 'Director at Uniconverge Technologies IIT Kanpur Alumnus',
      image: 'https://via.placeholder.com/150/e8c4d8/666666?text=Kaushtendra',
      logo: 'https://via.placeholder.com/80/ffffff/8B0000?text=IIT+Kanpur'
    },
    {
      name: 'Mr. Sanjay Aggarwal',
      title: 'Data Science With ML Expert IMS BHU Alumni The IoT Academy',
      image: 'https://via.placeholder.com/150/c4d8e8/666666?text=Mr.+Sanjay',
      logo: 'https://via.placeholder.com/120/ffffff/000000?text=IoT+Academy'
    },
    {
      name: 'Ashwani Kumar',
      title: 'AI Expert 20+ Years of Experience Alumni of University of Miami',
      image: 'https://via.placeholder.com/150/cccccc/666666?text=Ashwani',
      logo: 'https://via.placeholder.com/80/ffffff/FF6B35?text=U+Miami'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 p-8 relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 border-4 border-blue-400 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 border-4 border-blue-400 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-16">
          Faculties Of This <span className="text-orange-400">Program</span>
        </h1>

        {/* Faculty Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {faculties.map((faculty, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Profile Image */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Faculty Info */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {faculty.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed min-h-[60px]">
                  {faculty.title}
                </p>
              </div>

              {/* Institution Logo */}
              <div className="flex justify-center pt-4 border-t border-gray-200">
                <img
                  src={faculty.logo}
                  alt="Institution logo"
                  className="h-16 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
