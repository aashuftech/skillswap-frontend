import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// import riya from "../assets/images/riyaSharmaImg.png";
// import aman from "../assets/images/amanVermaImg.png";
// import neha from "../assets/images/nehaSinghImg.png";
import digital from "../assets/images/digital.png";
import develop from "../assets/images/develop.png";
import content from "../assets/images/content.png";
import AOS from "aos";
import "aos/dist/aos.css";



const StartSwap = () => {

  useEffect(() => {
            AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
          }, []);

  const navigate = useNavigate(); 

  const [skills] = useState([
    {
      id: 1,
      name: "Web Development",
      user: "Riya Sharma",
      offer: "Graphic Design",
      img: develop,
    },
    {
      id: 2,
      name: "Content Writing",
      user: "Aman Verma",
      offer: "SEO Optimization",
      img: content,
    },
    {
      id: 3,
      name: "Digital Marketing",
      user: "Neha Singh",
      offer: "Video Editing",
      img: digital,
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 px-4 py-16">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 data-aos="fade-up" className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Start Swapping Skills 🚀
        </h1>
        <p data-aos="fade-up" className="text-gray-600 max-w-2xl mx-auto">
          Share what you know and learn what you love. Connect with skilled
          people and grow together!
        </p>
      </div>

      <div data-aos="zoom-out" className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.id}
            data-aos="flip-left"
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col justify-between"
          >
            <div>
              <img
                src={skill.img}
                alt={skill.name}
                className="rounded-xl mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-semibold text-gray-800">
                {skill.name}
              </h3>
              <p className="text-gray-600 mt-1">by {skill.user}</p>
              <p className="mt-3 text-blue-600 font-medium">
                Wants to learn: {skill.offer}
              </p>
            </div>

            <button onClick={()=> navigate(`/chat?room=skill-${skill.id}&user= ${encodeURIComponent(skill.user)}`)} 
            className=" button-anim mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition">
              Connect Now
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <Link to="/add-skills"
        data-aos="fade-left"
          className="button-anim bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition inline-block">
          + Add Your Skill
        </Link>
      </div>
    </div>
  );
};

export default StartSwap;
