import React from 'react';

function ToolsLearn() {
  const tools = [
    // Row 1
    [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Tableau", logo: "https://img.icons8.com/color/96/tableau-software.png" },
      { name: "Midjourney", logo: "https://img.icons8.com/fluency/96/sailboat.png" },
      { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
    ],
    // Row 2
    [
      { name: "Gemini", logo: "https://img.icons8.com/color/96/google-gemini.png" },
      { name: "SQL", logo: "https://img.icons8.com/color/96/sql.png" },
      { name: "Power BI", logo: "https://img.icons8.com/color/96/power-bi.png" },
      { name: "Kaggle", logo: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-kaggle-an-online-community-of-data-scientists-and-machine-learners-owned-by-google-logo-color-tal-revivo.png" },
      { name: "ChatGPT", logo: "https://img.icons8.com/color/96/chatgpt.png" },
      { name: "DeepSeek", logo: "https://img.icons8.com/fluency/96/artificial-intelligence.png" }
    ],
    // Row 3
    [
      { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "Jupyter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
      { name: "DALL-E", logo: "https://img.icons8.com/color/96/artificial-intelligence.png" },
      { name: "Perplexity", logo: "https://img.icons8.com/fluency/96/search.png" }
    ],
    // Row 4
    [
      { name: "Matplotlib", logo: "https://img.icons8.com/color/96/scatter-plot.png" },
      { name: "NLTK", logo: "https://img.icons8.com/color/96/natural-language-processing.png" },
      { name: "Keras", logo: "https://img.icons8.com/color/96/keras.png" },
      { name: "Hugging Face", logo: "https://img.icons8.com/color/96/hugging-face_app.png" },
      { name: "spaCy", logo: "https://img.icons8.com/color/96/chatbot.png" },
      { name: "REST API", logo: "https://img.icons8.com/color/96/api-settings.png" }
    ]
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-blue-900">Tools You Will </span>
            <span className="text-orange-500">Learn</span>
          </h1>
          <p className="text-gray-700 text-base md:text-lg max-w-4xl mx-auto">
            Master 10+ in-demand tools that will help you work efficiently, save time, and sharpen your skills!
          </p>
        </div>

        {/* Tools Grid */}
        <div className="space-y-6">
          {tools.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
            >
              {row.map((tool, toolIndex) => (
                <div
                  key={toolIndex}
                  className="bg-white border-2 border-blue-900 rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer min-h-[120px]"
                >
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="w-12 h-12 object-contain mb-3"
                    onError={(e) => {
                      e.target.src = "https://img.icons8.com/color/96/code.png";
                    }}
                  />
                  <p className="text-gray-900 font-semibold text-center text-sm">
                    {tool.name}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolsLearn;
