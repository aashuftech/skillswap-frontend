import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const AddSkill = () => {
  useEffect(() => {
              AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
            }, []);
  const [formData, setFormData] = useState({
    name: "",
    offer: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userEmail = localStorage.getItem("userEmail");

    try {
      // const response = await fetch("http://localhost:4000/api/addskill",{
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/addskill`,{
        method: 'POST',
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({ email:userEmail, name:formData.name, offer:formData.offer, }),
      });

      const data = await response.json();
      if(response.ok){
        alert("Skill added successfully");
        console.log(data.skills);

        navigate('/start-swap')                                  //-------------------------//
      }else{
        alert( data.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Server error!");
    }
    // console.log("Skill Added:", formData);
    // alert("Skill added successfully! (Backend connection pending)");
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center px-4 py-16 pt-24">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full">
        <h1 data-aos="fade-up" className="text-3xl font-bold text-center text-gray-800 mb-6">
         Add Your Skill
        </h1>

        <form onSubmit={handleSubmit} data-aos="zoom-out" className="space-y-6">
          {/* Skill Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Web Development"
              className="peer w-full bg-transparent border-0 border-b-2 border-gray-300 px-4 py-3 text-gray-900 placeholder-transparent focus:border-blue-500 focus:outline-none transition-all duration-300"
              required
            />
            <label className="absolute left-4 top-3 text-gray-500 text-base transition-all duration-300 
      peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
      peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600
      peer-[&:not(:placeholder-shown)]:-top-2 
      peer-[&:not(:placeholder-shown)]:text-sm 
    peer-[&:not(:placeholder-shown)]:text-blue-600">
              Your Skill
            </label>
          </div>

          {/* Skill You Want to Learn */}
          <div className="relative">
            <input
              type="text"
              name="offer"
              value={formData.offer}
              onChange={handleChange}
              placeholder="e.g. Graphic Design"
              className="peer w-full bg-transparent border-0 border-b-2 border-gray-300 px-4 py-3 text-gray-900 placeholder-transparent focus:border-blue-500 focus:outline-none transition-all duration-300"
              required
            />
             <label className="absolute left-4 top-3 text-gray-500 text-base transition-all duration-300 
      peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
      peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600
      peer-[&:not(:placeholder-shown)]:-top-2 
      peer-[&:not(:placeholder-shown)]:text-sm 
    peer-[&:not(:placeholder-shown)]:text-blue-600">
              Want to Learn
            </label>
          </div>

          <button
            type="submit"
            className="button-anim w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Add Skill
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSkill;
