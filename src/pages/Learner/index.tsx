import React, { useMemo } from 'react';
import TopicCard from "@/components/TopicCard/TopicCard";
import Topbar from "@/components/Topbar/Topbar";

const topics = [
  { id: 1, title: 'Python', description: 'Python: High-level, versatile programming language. Widely used for web development, data science. Simple syntax, extensive libraries. Ideal for beginners.' },
  { id: 2, title: 'Java', description: 'Java: Versatile, object-oriented programming language. Used for web and mobile app development, big data processing. Strong community support.' },
  { id: 3, title: 'Javascript', description: 'JavaScript: a dynamic scripting language, adds interactivity to web pages, facilitating actions like form validation, animations, and user interface enhancements.' },
  { id: 4, title: 'HTML', description: 'HTML: The backbone of web design, using tags to structure content. Essential for creating interactive and accessible websites.' },
  { id: 5, title: 'CSS', description: 'CSS: (Cascading Style Sheets) styles HTML elements, dictating their appearance and layout on web pages, ensuring a visually appealing and consistent user experience across devices.' },
  { id: 6, title: 'C', description: 'C language, renowned for its efficiency and versatility, is a powerful programming language commonly used for system programming, software development, and embedded systems, renowned for its efficiency and versatility.' },
  { id: 7, title: 'CPP', description: 'C++, an extension of the C programming language, offers object-oriented programming features alongside efficiency, making it a popular choice for developing high-performance software, systems, and games, renowned for its versatility and performance.' },
  { id: 8, title: 'MERN', description: 'MERN stack: MERN stack is a popular JavaScript-based technology stack for building full-stack web applications, consisting of MongoDB, Express.js, React, and Node.js. It enables developers to create efficient and modern web applications with seamless data flow and dynamic user interfaces.' },
  { id: 9, title: 'MEAN', description: 'The MEAN stack combines MongoDB, Express.js, AngularJS, and Node.js to facilitate full-stack web development. With MongoDB as the database, Express.js for the server-side framework, AngularJS for front-end development, and Node.js as the JavaScript runtime, developers can create highly responsive and scalable web applications.  ' }
];

const totalQuestions = [100, 150, 120, 100, 150, 120, 100, 150, 120]; // Example total questions for each topic
const solvedQuestions = [75, 90, 80, 75, 90, 80, 75, 90, 80]; // Example solved questions for each topic

const HomePage = () => {

  const topicCards = useMemo(() => topics.map((topic, index) => (
    <TopicCard key={topic.id} topic={topic} totalQuestions={totalQuestions[index]} solvedQuestions={solvedQuestions[index]} />
  )), [topics, totalQuestions, solvedQuestions]);
  return (
    <>
    <Topbar/>
    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: `url('/landingPageBg.jpg')` }}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 text-white">Topics</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
         {topicCards}
        </div>
      </div>
    </div>
    </>
  );
};

export default HomePage;
