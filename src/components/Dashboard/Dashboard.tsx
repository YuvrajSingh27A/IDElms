// components/Dashboard/Dashboard.js
import React from 'react';

const Dashboard = ({ totalQuestions, solvedQuestions }) => {
  return (
    <div className="flex justify-between mt-4">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white mr-2">
          {totalQuestions}
        </div>
        <span>Total Questions</span>
      </div>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white mr-2">
          {solvedQuestions}
        </div>
        <span>Solved Questions</span>
      </div>
    </div>
  );
};

export default Dashboard;
