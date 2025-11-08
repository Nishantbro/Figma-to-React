import React from 'react';

export default function AlumniCompanies() {
  const companies = [
    {
      name: 'Bosch',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxODAiIGhlaWdodD0iNjAiIGZpbGw9IiNmZmZmZmYiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI4IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0VEMDAwNyI+Qk9TQ0g8L3RleHQ+PC9zdmc+',
      color: '#ED0007'
    },
    {
      name: 'eWandz Digital',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxODAiIGhlaWdodD0iNjAiIGZpbGw9IiNmZmZmZmYiLz48dGV4dCB4PSI1MCUiIHk9IjQ1JSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwQkNENCI+ZVdhbmR6PC90ZXh0Pjx0ZXh0IHg9IjUwJSIgeT0iNjUlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMzMzMzMzIj5EaWdpdGFsPC90ZXh0Pjwvc3ZnPg==',
      color: '#00BCD4'
    },
    {
      name: 'Capgemini',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxODAiIGhlaWdodD0iNjAiIGZpbGw9IiNmZmZmZmYiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjIyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwNzBBRCI+Q2FwZ2VtaW5pPC90ZXh0Pjwvc3ZnPg==',
      color: '#0070AD'
    },
    {
      name: 'IBM',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxODAiIGhlaWdodD0iNjAiIGZpbGw9IiNmZmZmZmYiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjM2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwNjY5OSI+SUJNPC90ZXh0Pjwvc3ZnPg==',
      color: '#006699'
    },
    {
      name: 'Infosys',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxODAiIGhlaWdodD0iNjAiIGZpbGw9IiNmZmZmZmYiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwN0NDMyI+SW5mb3N5czwvdGV4dD48L3N2Zz4=',
      color: '#007CC3'
    },
    {
      name: 'IKEA',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxODAiIGhlaWdodD0iNjAiIGZpbGw9IiMwMDUxQkEiIHJ4PSI1Ii8+PHJlY3QgeD0iMjAiIHk9IjE1IiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjRkZEQjAwIiByeD0iMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMzIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDA1MUJBIj5JS0VBPC90ZXh0Pjwvc3ZnPg==',
      color: '#0051BA'
    },
    {
      name: 'Accenture',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxODAiIGhlaWdodD0iNjAiIGZpbGw9IiNmZmZmZmYiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjIyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ExMDBGRiI+YWNjZW50dXJlPC90ZXh0Pjwvc3ZnPg==',
      color: '#A100FF'
    },
    {
      name: 'Wipro',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxODAiIGhlaWdodD0iNjAiIGZpbGw9IiNmZmZmZmYiLz48Y2lyY2xlIGN4PSI0MCIgY3k9IjMwIiByPSIxMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkU0RkE4IiBzdHJva2Utd2lkdGg9IjIiLz48Y2lyY2xlIGN4PSI0MCIgY3k9IjMwIiByPSI2IiBmaWxsPSIjNkU0RkE4Ii8+PHRleHQgeD0iNjAlIiB5PSI1MCUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM2RTRGQTgiPndpcHJvPC90ZXh0Pjwvc3ZnPg==',
      color: '#6E4FA8'
    },
    {
      name: 'TCS',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxODAiIGhlaWdodD0iNjAiIGZpbGw9IiNmZmZmZmYiLz48dGV4dCB4PSI1MCUiIHk9IjQ1JSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjMyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwNjZCMyI+VENTPC90ZXh0Pjx0ZXh0IHg9IjUwJSIgeT0iNjglIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiMwMDY2QjIiPlRBVEEgQ09OU1VMVEFOQ1kgU0VSVklDRVM8L3RleHQ+PC9zdmc+',
      color: '#0066B3'
    },
    {
      name: 'Mu Sigma',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxODAiIGhlaWdodD0iNjAiIGZpbGw9IiNmZmZmZmYiLz48Y2lyY2xlIGN4PSI0NSIgY3k9IjMwIiByPSIyMCIgZmlsbD0iIzhCNDUxMyIvPjx0ZXh0IHg9IjQ1IiB5PSIzNSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjIyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI2ZmZmZmZiI+zrU8L3RleHQ+PHRleHQgeD0iNjUlIiB5PSI1MCUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMzMzMzMzMiPk11IFNpZ21hPC90ZXh0Pjwvc3ZnPg==',
      color: '#8B4513'
    },
    {
      name: 'EY',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxODAiIGhlaWdodD0iNjAiIGZpbGw9IiNGRkU2MDAiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjQwIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwMDAwMCI+RVk8L3RleHQ+PHRleHQgeD0iNTAlIiB5PSI4MCUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMCIgZmlsbD0iIzAwMDAwMCI+QnVpbGRpbmcgYSBiZXR0ZXIgd29ya2luZyB3b3JsZDwvdGV4dD48L3N2Zz4=',
      color: '#FFE600'
    },
    {
      name: 'Genpact',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxODAiIGhlaWdodD0iNjAiIGZpbGw9IiNmZmZmZmYiLz48cG9seWdvbiBwb2ludHM9IjMwLDIwIDQ1LDIwIDM3LjUsMzUgNTIuNSwzNSA0NSw1MCAzMCw1MCIgZmlsbD0iIzAwQTNFMCIvPjx0ZXh0IHg9IjYwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBBM0UwIj5nZW5wYWN0PC90ZXh0Pjwvc3ZnPg==',
      color: '#00A3E0'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-8 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-blue-900">Our Alumni </span>
            <span className="text-orange-500">Work At</span>
          </h1>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center min-h-[120px] border border-gray-100"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="max-w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Optional Bottom Text */}
        <div className="text-center mt-12 text-gray-600">
          <p className="text-lg">And many more leading organizations worldwide</p>
        </div>
      </div>
    </div>
  );
}
