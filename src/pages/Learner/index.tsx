// pages/index.js
import React from 'react';
import TopicCard from "@/components/TopicCard/TopicCard";
import Topbar from "@/components/Topbar/Topbar";
const topics = [
  { id: 1, title: 'Python', description: 'Python: High-level, versatile programming language. Widely used for web development, data science. Simple syntax, extensive libraries. Ideal for beginners.' },
  { id: 2, title: 'Java', description: 'Java: Versatile, object-oriented programming language. Used for web and mobile app development, big data processing. Strong community support.' },
  { id: 3, title: 'Dsa', description: 'Data Structures and Algorithms (DSA): Fundamental concepts for organizing and processing data efficiently in computer science and programming.' },
  { id: 4, title: 'Dsa', description: 'Description of Topic 4' },
  { id: 5, title: 'Dsa', description: 'Description of Topic 5' },
  { id: 6, title: 'Dsa', description: 'Description of Topic 6' },
  { id: 7, title: 'Dsa', description: 'Description of Topic 7' },
  { id: 8, title: 'Dsa', description: 'Description of Topic 8' },
  { id: 9, title: 'Dsa', description: 'Description of Topic 9' }
  // Add more topics as needed
];

const totalQuestions = [100, 150, 120, 100, 150, 120, 100, 150, 120]; // Example total questions for each topic
const solvedQuestions = [75, 90, 80, 75, 90, 80, 75, 90, 80]; // Example solved questions for each topic

const HomePage = () => {
  return (
    <>
    <Topbar/>
    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: `url('/landingPageBg.jpg')` }}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 text-white">Topics</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics.map((topic, index) => (
            <TopicCard key={topic.id} topic={topic} totalQuestions={totalQuestions[index]} solvedQuestions={solvedQuestions[index]} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
  
};

export default HomePage;
