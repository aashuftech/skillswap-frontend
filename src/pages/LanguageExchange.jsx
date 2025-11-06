import React from "react";

const LanguageExchange = () => {
  const mentors = [
    {
      name: "Carlos Diaz",
      skill: "Spanish & English",
      img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    },
    {
      name: "Mina Lee",
      skill: "Korean & English",
      img: "https://images.unsplash.com/photo-1552058544-f2b08422138a",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Language Exchange 🗣️
        </h1>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Improve your language skills by connecting with native speakers.  
          Practice real conversations and learn cultural nuances!
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
              <button className="button-anim mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageExchange;
