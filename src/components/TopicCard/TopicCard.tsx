import React from 'react';
import Dashboard from "@/components/Dashboard/Dashboard";

const TopicCard = ({ topic, totalQuestions, solvedQuestions }) => {
  return (
    <div className="group relative overflow-hidden bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-md p-6 mb-4 transform hover:scale-105 transition-transform text-white">
      <div className=" rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-2">{topic.title}</h2>
        <p className="text-white mb-4">{topic.description}</p>
        <Dashboard totalQuestions={totalQuestions} solvedQuestions={solvedQuestions} />
        <div className="flex justify-end">
          <button className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </div>
      {/* Frame hover effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="border-4 border-orange-500 absolute inset-0 transform scale-0 group-hover:scale-110 transition-transform"></div>
      </div>
    </div>
  );
};

export default TopicCard;
