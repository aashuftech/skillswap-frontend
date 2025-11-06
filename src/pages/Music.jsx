import React from "react";

const Music = () => {
  const mentors = [
    {
      name: "Aarav Patel",
      skill: "Guitar & Composition",
      img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
    },
    {
      name: "Sara Khan",
      skill: "Vocals & Piano",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Music 🎶
        </h1>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Learn instruments, vocals, and production techniques from talented
          musicians around the world.
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
              <button className="button-anim mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Music;
