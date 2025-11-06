import React from "react";

const Growth = () => {
  return (
    <section className="py-20 bg-gray-50 px-6 md:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Personal Growth</h1>
        <p className="text-gray-600 text-lg mb-10">
          Learn. Share. Evolve. Growth is the heart of our mission at SkillSwap.
        </p>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all">
            <h3 className="font-semibold text-xl mb-2">Skill Improvement</h3>
            <p className="text-gray-600 text-sm">
              Learn new skills directly from peers and real-world experiences.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all">
            <h3 className="font-semibold text-xl mb-2">Confidence Building</h3>
            <p className="text-gray-600 text-sm">
              Sharing what you know builds confidence and communication ability.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all">
            <h3 className="font-semibold text-xl mb-2">Lifelong Learning</h3>
            <p className="text-gray-600 text-sm">
              Keep growing as you continuously learn from the SkillSwap community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Growth;
