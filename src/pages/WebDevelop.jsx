import React from "react";

const WebDevelopment = () => {
  const mentors = [
    {
      name: "Riya Sharma",
      skill: "React & Tailwind",
      img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    },
    {
      name: "Aman Verma",
      skill: "Node.js & Express",
      img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Web Development 💻
        </h1>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Learn modern web technologies — HTML, CSS, JavaScript, React, and
          more. Collaborate with experienced developers and build your dream
          projects!
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
              <button className=" button-anim mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
