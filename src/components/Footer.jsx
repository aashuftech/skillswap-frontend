// src/components/Footer.jsx
import React, { useEffect } from "react";
// import { FaFacebookF, FaGithub, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";


const Footer = () => {
   useEffect(() => {
            AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
          }, []);
  return (
    <footer data-aos="fade-up" className="bg-gradient-to-b from-white to-gray-100 border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand / Message */}
          <div className="text-center md:text-left">
            <h2 data-aos="flip-left" className="text-xl font-semibold text-gray-800">
              You Share, We Care 
            </h2>
            <p data-aos="flip-right" className="text-gray-600">
              Build Your Skills & Become the Rare 
            </p>
          </div>

          {/* Navigation Links */}
          <ul data-aos="fade-up" className="flex flex-wrap justify-center gap-8 text-gray-600 text-lg mr-40">
            <li><Link to="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
            <li><Link to="/explore" className="hover:text-blue-600 transition-colors">Features</Link></li>
            <li><Link to="/about" className="hover:text-blue-600 transition-colors">About</Link></li>
          </ul>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 text-gray-600 text-xl">
            <Link to="/" data-aos="fade-right" className="hover:text-blue-600 transition-transform transform hover:scale-110"><FaFacebook /></Link>
            <Link to="/" data-aos="fade-right" className="hover:text-sky-500 transition-transform transform hover:scale-110"><FaTwitter /></Link>
            <Link to="/" data-aos="fade-right" className="hover:text-blue-700 transition-transform transform hover:scale-110"><FaLinkedin /></Link>
            <Link to="/" data-aos="fade-right" className="hover:text-gray-800 transition-transform transform hover:scale-110"><FaGithub /></Link>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="my-8 border-gray-300" />

        {/* Bottom Text */}
        <p className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} SkillSwap. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
