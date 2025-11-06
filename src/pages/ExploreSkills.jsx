// import React from "react";

// const ExploreSkills = () => {
//   const skills = [
//     {
//       name: "Web Development",
//       desc: "Building and maintaining websites.",
//       icon: "💻",
//     },
//     {
//       name: "Graphic Design",
//       desc: "Creating visual content.",
//       icon: "🎨",
//     },
//     {
//       name: "Language Exchange",
//       desc: "Practice and learn new languages.",
//       icon: "🌍",
//     },
//     {
//       name: "Music",
//       desc: "Learning and playing instruments or singing.",
//       icon: "🎵",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white px-6 sm:px-10 lg:px-20 py-16">
//       {/* Page Heading */}
//       <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
//         Explore Skills.
//       </h1>

//       {/* Search Bar */}
//       <div className="max-w-lg mb-10">
//         <input
//           type="text"
//           placeholder="Search skills"
//           className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       {/* Skills Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {skills.map((skill, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center justify-center p-8 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300"
//           >
//             <div className="text-5xl mb-4">{skill.icon}</div>
//             <h3 className="text-lg font-semibold text-gray-900 mb-1">
//               {skill.name}
//             </h3>
//             <p className="text-gray-500 text-sm text-center">{skill.desc}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ExploreSkills;


import HowItWorks from "../components/HowItWorks";
import FeaturedSkills from "../components/FeaturedSkills";


const ExploreSkills = () => {
  return (
    <div>
      {/* Hero / Search */}
      <HowItWorks />
      <FeaturedSkills />
    </div>
  );
};

export default ExploreSkills;
