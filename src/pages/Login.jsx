import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import login from '../assets/images/loginimg.png';
import AOS from "aos";
import "aos/dist/aos.css";

const Login = () => {

   useEffect(() => {
              AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
            }, []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
   
    const response = await fetch('http://localhost:4000/api/loginuser',{
      method:'POST',
      headers: {'Content-Type': 'application/json'
      },
      body:JSON.stringify({ email:formData.email, password:formData.password })
    })
    const json = await response.json();
    console.log(json);

    if(json.success){
      localStorage.setItem("userEmail", formData.email);
      localStorage.setItem("authToken", json.authToken);
      window.dispatchEvent(new Event("authChange"));
      navigate('/')
    }else{
     alert('Enter Valid Credentials'); 
    }

  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-white px-6 sm:px-10 lg:px-20 py-16">
      {/* Left Illustration */}
      <div className="hidden lg:flex lg:w-1/2 justify-center">
        <img
          src={login}
          data-aos="fade-right"
          alt="Login illustration"
          className="w-4/5 max-w-md mr-15"
        />
      </div>

      {/* Right Login Form */}
      <div data-aos="fade-left" className="w-full lg:w-1/2 max-w-md">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
          Welcome Back 
        </h1>
        <p className="text-gray-600 mb-10">
          Log in to continue exploring and sharing skills.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-200"
        >
          <div className="relative mb-5">
            <input
            id="email"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              autoComplete="username"
              className="peer w-full bg-transparent border-0 border-b-2 border-gray-300 px-4 py-3 text-gray-900 placeholder-transparent focus:border-blue-500 focus:outline-none transition-all duration-300"
              required
            />
            <label htmlFor="email" 
            className="absolute left-4 top-3 text-gray-500 text-base transition-all duration-300 
      peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
      peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600
      peer-[&:not(:placeholder-shown)]:-top-2 
      peer-[&:not(:placeholder-shown)]:text-sm 
    peer-[&:not(:placeholder-shown)]:text-blue-600">
              Email
            </label>
          </div>

          <div className="relative mb-6">
            <input
            id="password"
              type="password"
              name="password"
              placeholder=" "
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password" 
              className="peer w-full bg-transparent border-0 border-b-2 border-gray-300 px-4 py-3 text-gray-900 placeholder-transparent focus:border-blue-500 focus:outline-none transition-all duration-300"
              required
            />
              <label htmlFor="password" 
            className="absolute left-4 top-3 text-gray-500 text-base transition-all duration-300 
      peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
      peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600
      peer-[&:not(:placeholder-shown)]:-top-2 
      peer-[&:not(:placeholder-shown)]:text-sm 
    peer-[&:not(:placeholder-shown)]:text-blue-600">
              Password
            </label>
          </div>

          <button
            type="submit"
            className="button-anim w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition duration-300"
          >
            Log In
          </button>

          <p className="text-center text-gray-600 mt-6 text-sm">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
