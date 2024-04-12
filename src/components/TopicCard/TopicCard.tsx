import React from 'react';
import Dashboard from "@/components/Dashboard/Dashboard";
import Link from 'next/link';
import NavigationButton from '../Buttons/NavigationButton';

const TopicCard = ({ topic, totalQuestions, solvedQuestions }) => {
  return (
    <div className="group relative overflow-hidden bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-md p-6 mb-4 transform hover:scale-105 transition-transform">
      <div className="rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-2">{topic.title}</h2>
        <p className="text-white mb-4">{topic.description}</p>
        <Dashboard totalQuestions={totalQuestions} solvedQuestions={solvedQuestions} />
        <div className="flex justify-end">
          <NavigationButton destination={`/Learner/${topic.title}`}/>
        </div>
      </div>
      {/* Border animation on hover */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="border-4 border-orange-400 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
    </div>
  );
};

export default TopicCard;
