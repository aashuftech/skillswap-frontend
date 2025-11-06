import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import about from '../assets/images/aboutimg.png';
import Community from "./Community";
import Collaboration from "./Collaboration";
import Growth from "./Growth";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
     useEffect(() => {
          AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
        }, []);
  return (
    <div className="min-h-screen bg-white px-6 sm:px-10 lg:px-20 py-16">
      {/* Heading */}
      <h1 data-aos="fade-up" className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
        About SkillSwap
      </h1>

      {/* Intro Text */}
      <p data-aos="fade-left" className="text-gray-600 text-lg leading-relaxed max-w-3xl mb-10">
        SkillSwap is a platform built to connect passionate learners and
        teachers around the world. We believe that everyone has something to
        teach and something to learn — whether it’s coding, design, language, or
        music. Our mission is to make skill sharing simple, fun, and
        collaborative.
      </p>

      {/* Illustration Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 mb-12">
        <img
          src={about}
          data-aos="fade-left"
          alt="Collaboration illustration"
          className="w-4/5 max-w-md shadow-md ml-15"
        />
        <div className="lg:w-1/2 ml-30">
          <h2 data-aos="fade-up" className="text-2xl font-semibold text-gray-900 mb-3">
            Why SkillSwap?
          </h2>
          <p data-aos="fade-right" className="text-gray-600 mb-4">
            Traditional learning often feels one-sided. SkillSwap changes that
            by allowing users to *swap* their expertise — you can teach one
            skill while learning another in return.
          </p>
          <p data-aos="fade-right" className="text-gray-600">
            It’s learning powered by community, collaboration, and creativity.
            Whether you’re a beginner or an expert, SkillSwap helps you grow
            while sharing your knowledge with others.
          </p>
        </div>
      </div>

      {/* Core Values Section */}
      <div data-aos="fade-up" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {[
          {
            title: "Community",
            desc: "Connecting learners and teachers across the world.",
            icon: "🌍",
            path:'/community',
          },
          {
            title: "Collaboration",
            desc: "Learning together through real interaction and teamwork.",
            icon: "🤝",
            path:'/collaboration',
          },
          {
            title: "Growth",
            desc: "Empowering people to develop personally and professionally.",
            icon: "🚀",
            path:'/growth',
          },
        ].map((value, i) => (
          <Link
            key={i}
            to={value.path}
            data-aos="zoom-out"
            className="p-8 border border-gray-200 rounded-2xl text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300"
          >
            <div data-aos="zoom-in" className="text-5xl mb-3">{value.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {value.title}
            </h3>
            <p className="text-gray-600 text-sm">{value.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default About;
