import React, { useState, useEffect } from 'react';
import NavigationButton from '../Buttons/NavigationButton';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const TopicCard = ({ topic }) => {
  const [progress, setProgress] = useState(0);

  // Simulating fetching progress data from a backend API
  useEffect(() => {
    // Replace this with your actual fetch call
    const fetchProgress = async () => {
      // Simulating fetching progress data from backend API
      // Example: const response = await fetch(`/api/progress/${topic.id}`);
      // Example: const data = await response.json();
      // Example: setProgress(data.progress);
      
      // Simulating setting progress after fetching data
      setProgress(Math.floor(Math.random() * 101)); // Random progress between 0 and 100
    };

    fetchProgress();
  }, [topic.id]);

  return (
    <div className="group relative overflow-hidden bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-md p-4 mb-2 transform hover:scale-105 transition-transform">
      <div className="rounded-lg p-4 " >
        <h2 className="text-lg font-bold text-white mb-1">{topic.title}</h2>
        <p className="text-white mb-2  text-sm">{topic.description}</p>
        <div className="flex justify-between items-center mt-5">
          <div style={{ width: 60, height: 60 }}>
            <CircularProgressbar
              value={progress}
              text={`${progress}%`}
              strokeWidth={8} // Increase the strokeWidth for a larger progress bar
              styles={buildStyles({
                textColor: '#f97718',
                pathColor: '#f97718',
                trailColor: 'transparent',
                textSize: '20px'
              })}
            />
          </div>
          <NavigationButton destination={`/Learner/${topic.title}`} />
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
