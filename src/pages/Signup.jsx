import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import signup from '../assets/images/signupImg.png'
import AOS from "aos";
import "aos/dist/aos.css";

const Signup = () => {

   useEffect(() => {
     AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
   }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });

    let navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log("Submitting signup form...");

    const response = await fetch("http://localhost:4000/api/signup",{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({ name:formData.name, email:formData.email, password:formData.password, location:formData.geolocation})
    })
    const json = await response.json()
    console.log("Hello from Backend",json);

    if(json.success){
      localStorage.setItem("userEmail",formData.email);
      localStorage.setItem("authToken",json.authToken);
      window.dispatchEvent(new Event("authChange"));
      navigate("/")
    }else{
      alert("Enter Valid Credentials");
    }

  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-white px-6 sm:px-10 lg:px-20 py-16">
      {/* Left SignUp Form */}

      <div data-aos="fade-right" className="w-full lg:w-1/2 max-w-md ml-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
          Create Account
        </h1>
        <p className="text-gray-600 mb-10">
          Join SkillSwap and start exchanging skills with the world.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-200"
        >
          {/* Name */}
          <div className="relative mb-5">
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="peer w-full bg-transparent border-0 border-b-2 border-gray-300 px-4 py-3 text-gray-900 placeholder-transparent focus:border-blue-500 focus:outline-none transition-all duration-300"
              required
            />
             <label className="absolute left-4 top-3 text-gray-500 text-base transition-all duration-300 
      peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
      peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600
      peer-[&:not(:placeholder-shown)]:-top-2 
      peer-[&:not(:placeholder-shown)]:text-sm 
    peer-[&:not(:placeholder-shown)]:text-blue-600">
              Full Name
            </label>
          </div>

          {/* Email */}
          <div className="relative mb-5">
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              autoComplete="username"
              className="peer w-full bg-transparent border-0 border-b-2 border-gray-300 px-4 py-3 text-gray-900 placeholder-transparent focus:border-blue-500 focus:outline-none transition-all duration-300"
              required
            />
             <label className="absolute left-4 top-3 text-gray-500 text-base transition-all duration-300 
      peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
      peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600
      peer-[&:not(:placeholder-shown)]:-top-2 
      peer-[&:not(:placeholder-shown)]:text-sm 
    peer-[&:not(:placeholder-shown)]:text-blue-600">
              Email
            </label>
          </div>

          {/* Password */}
          <div className="relative mb-5">
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password" 
              className="peer w-full bg-transparent border-0 border-b-2 border-gray-300 px-4 py-3 text-gray-900 placeholder-transparent focus:border-blue-500 focus:outline-none transition-all duration-300"
              required
            />
            <label className="absolute left-4 top-3 text-gray-500 text-base transition-all duration-300 
      peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
      peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600
      peer-[&:not(:placeholder-shown)]:-top-2 
      peer-[&:not(:placeholder-shown)]:text-sm 
    peer-[&:not(:placeholder-shown)]:text-blue-600">
              Password
            </label>
          </div>

          {/* Confirm Password */}
          <div className="relative mb-6">
            <input
              type="text"
              name="geolocation"
              placeholder="Your Address"
              value={formData.geolocation}
              onChange={handleChange}
              className="peer w-full bg-transparent border-0 border-b-2 border-gray-300 px-4 py-3 text-gray-900 placeholder-transparent focus:border-blue-500 focus:outline-none transition-all duration-300"
              required
            />
             <label className="absolute left-4 top-3 text-gray-500 text-base transition-all duration-300 
      peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
      peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600
      peer-[&:not(:placeholder-shown)]:-top-2 
      peer-[&:not(:placeholder-shown)]:text-sm 
    peer-[&:not(:placeholder-shown)]:text-blue-600">
              Address
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="button-anim w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>

          {/* Login Link */}
          <p className="text-center text-gray-600 mt-6 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Log in
            </Link>
          </p>
        </form>
      </div>

      
      {/* Left Illustration */}
      <div className="hidden lg:flex lg:w-1/2 justify-center">
        <img
          src={signup}
          data-aos="fade-left"
          alt="Signup illustration"
          className="w-4/5 max-w-md ml-40"
        />
      </div>

    </div>
  );
};

export default Signup;
