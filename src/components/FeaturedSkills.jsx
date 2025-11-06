// import React from "react";
// import { Laptop, Palette, Globe, Music } from "lucide-react";

// const FeaturedSkills = () => {
//   const skills = [
//     {
//       icon: <Laptop size={36} className="text-blue-600" />,
//       name: "Web Development",
//     },
//     {
//       icon: <Palette size={36} className="text-blue-600" />,
//       name: "Graphic Design",
//     },
//     {
//       icon: <Globe size={36} className="text-blue-600" />,
//       name: "Language Exchange",
//     },
//     {
//       icon: <Music size={36} className="text-blue-600" />,
//       name: "Music",
//     },
//   ];

//   return (
//     <section className="text-center py-20 px-6 md:px-16 bg-gray-50">
//       <h2 className="text-3xl md:text-4xl font-bold mb-12 max-w-7xl container mx-auto">Featured Skills</h2>

//       <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl container mx-auto py-5 px-8">
//         {skills.map((skill, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-md hover:shadow-lg transition duration-200 rounded-2xl p-8 flex flex-col items-center space-y-4 "
//           >
//             {skill.icon}
//             <p className="font-semibold text-gray-800">{skill.name}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FeaturedSkills;


import React, { useEffect} from "react";
import { Code, PenTool, Languages, Music } from "lucide-react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


const FeaturedSkills = () => {
     useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
      }, []);
  const skills = [
    {
      icon: <Code size={40} data-aos="flip-right" className="text-indigo-600" />,
      title: "Web Development",
      desc: "Build and improve your coding and web dev skills.",
      path: "/web-development",
    },
    {
      icon: <PenTool size={40} data-aos="flip-right" className="text-pink-500" />,
      title: "Graphic Design",
      desc: "Learn design principles, tools, and visual creativity.",
      path: "/graphic-design",
    },
    {
      icon: <Languages size={40} data-aos="flip-right" className="text-green-500" />,
      title: "Language Exchange",
      desc: "Connect with people to practice new languages.",
      path: "/language-exchange",
    },
    {
      icon: <Music size={40} data-aos="flip-right" className="text-yellow-500" />,
      title: "Music",
      desc: "Share and learn music skills from passionate artists.",
      path: "/music",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Featured Skills
        </h2>

        <div data-aos="fade-up" className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <Link
              key={index}
              to={skill.path}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="bg-gray-100 p-4 rounded-full">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {skill.title}
                </h3>
                <p className="text-gray-600 text-sm">{skill.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSkills;
