import React from "react";

const GraphicDesign = () => {
  const mentors = [
    {
      name: "Neha Singh",
      skill: "UI/UX & Figma",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    },
    {
      name: "Rohit Mehra",
      skill: "Logo & Brand Design",
      img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-red-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Graphic Design 🎨
        </h1>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Learn creativity, design principles, and tool mastery like Photoshop,
          Figma, and Illustrator. Connect with expert designers.
        </p>

        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition"
            >
              <img
                src={mentor.img}
                alt={mentor.name}
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {mentor.name}
              </h3>
              <p className="text-gray-500">{mentor.skill}</p>
              <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition button-anim">
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GraphicDesign;
