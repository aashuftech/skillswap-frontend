// import React from "react";
// import { UserPlus, List, CheckSquare } from "lucide-react";
// // import Login from "../pages/Login";
// // import AddSkill from "../pages/AddSkills";
// import { Link } from "react-router-dom";


// const HowItWorks = () => {
//   const steps = [
//     {
//       icon: <UserPlus size={40} className="text-blue-600" />,
//       title: "Create your profile",
//       path:'/login',
//     },
//     {
//       icon: <List size={40} className="text-blue-600" />,
//       title: "List your skills to offer",
//       path: "/add-skills",
//     },
//     {
//       icon: <CheckSquare size={40} className="text-blue-600" />,
//       title: "Find matches & start learning",
//       path: '/start-swap',
//     },
//   ];

//   return (
//     <section className="text-center py-20 px-6 md:px-16 bg-white container mx-a">
//       <h2 className="text-3xl md:text-4xl font-bold mb-12 container mx-auto max-w-7xl">
//         How It Works
//       </h2>

//       <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl container mx-auto py-5 px-5">
//         {steps.map((step, index) => (
//           <Link
//             key={index}
//             to={step.path}
//             className="flex flex-col items-center text-gray-800 max-w-xs space-y-4 px-15"
//           >
//             <div className="bg-blue-100 p-4 rounded-full">{step.icon}</div>
//             <h3 className="font-semibold text-lg">{step.title}</h3>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;

import React, { useEffect} from "react";
import { UserPlus, List, CheckSquare } from "lucide-react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const HowItWorks = () => {
   useEffect(() => {
      AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
    }, []);
  const steps = [
    {
      icon: <UserPlus size={40} data-aos="flip-right" className="text-indigo-600" />,
      title: "Create Your Profile",
      desc: "Sign up or log in to create your personal SkillSwap profile.",
      path: "/login",
      color: "from-indigo-100 via-indigo-50 to-white",
    },
    {
      icon: <List size={40} data-aos="flip-right" className="text-pink-500" />,
      title: "List Your Skills",
      desc: "Add the skills you can offer and what you want to learn.",
      path: "/add-skills",
      color: "from-pink-100 via-pink-50 to-white",
    },
    {
      icon: <CheckSquare size={40} data-aos="flip-right" className="text-green-500" />,
      title: "Find Matches & Start Learning",
      desc: "Connect with people who complement your learning goals.",
      path: "/start-swap",
      color: "from-green-100 via-green-50 to-white",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          How It Works
        </h2>

        <div data-aos="fade-up" className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <Link
              key={index}
              to={step.path}
              className={`bg-gradient-to-br ${step.color} rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="bg-white p-4 rounded-full shadow-sm">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
