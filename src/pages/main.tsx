// Dashboard.js

import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Left side */}
      <div className="w-1/2 p-4">
        {/* Student Card */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          <h2 className="text-lg font-semibold mb-2">Student</h2>
          {/* Add student details here */}
        </div>
        {/* Trainer Card */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-2">Trainer</h2>
          {/* Add trainer details here */}
        </div>
      </div>
      {/* Right side */}
      <div className="w-1/2 p-4">
        {/* Space for GIF */}
        <div className="bg-gray-200 rounded-lg shadow-md p-4 h-full flex justify-center items-center">
          <img src="path_to_your_gif.gif" alt="GIF" className="max-w-full max-h-full" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
