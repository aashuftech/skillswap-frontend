import React from "react";
import { Link } from "react-router-dom";

const Collaboration = () => {
  return (
    <section className="py-20 bg-white px-6 md:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Collaboration</h1>
        <p className="text-gray-600 text-lg mb-10">
          Build meaningful connections and collaborate through skill-swapping.
        </p>

        <div className="bg-indigo-50 p-10 rounded-2xl shadow-md hover:shadow-lg transition-all max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-indigo-600 mb-3">
            Start Collaborating Today!
          </h3>
          <p className="text-gray-600 mb-6">
            Pair up with learners who complement your skills and begin your
            learning journey together.
          </p>
          <Link
            to="/start-swap"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            Find Your Match
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
