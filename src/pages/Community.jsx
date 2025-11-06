import React from "react";

const Community = () => {
  return (
    <section className="py-20 bg-gray-50 px-6 md:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Our Community</h1>
        <p className="text-gray-600 text-lg mb-10">
          Join a thriving network of learners, teachers, and creators who
          believe in exchanging knowledge and growing together.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-all">
            <h3 className="font-semibold text-xl mb-3">Diverse Network</h3>
            <p className="text-gray-600 text-sm">
              Connect with learners across different fields and skill levels.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-all">
            <h3 className="font-semibold text-xl mb-3">Inclusive Culture</h3>
            <p className="text-gray-600 text-sm">
              We welcome everyone, regardless of their background or experience.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-all">
            <h3 className="font-semibold text-xl mb-3">Real Growth</h3>
            <p className="text-gray-600 text-sm">
              Learn from others, share your skills, and make lasting friendships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
