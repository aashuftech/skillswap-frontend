import React, { useEffect } from "react";
import hero from '../assets/images/hero.png';
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);
  return (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl container mx-auto py-16 px-8"
    >
      <div className="max-w-lg">
        <h1 data-aos="fade-right" className="text-4xl md:text-5xl font-bold mb-4">
          Learn New Skills. <br /> Teach What You Know.
        </h1>
        <p className="text-gray-600 mb-6" data-aos="fade-right">
          A <span className="font-semibold">community</span> where passion meets collaboration.
        </p>
        <button data-aos="fade-up" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 button-anim">
          <Link to="/start-swap">Start Swapping Now</Link>
        </button>
      </div>
      <img src={hero} alt="Illustration" data-aos="fade-left"  className="w-150 " />
    </section>
  );
};

export default Hero;
