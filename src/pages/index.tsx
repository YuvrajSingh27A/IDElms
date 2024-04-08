import React, { useEffect, useState } from 'react';
import NavigationButton from '../components/Buttons/NavigationButton'; // Adjust the import path as needed
import { HiLockClosed } from 'react-icons/hi'; // Import lock icon
import type { NextPage } from 'next';
import { HiUser, HiUserGroup, HiClipboardCheck, HiBriefcase, HiDocumentReport, HiChatAlt2, HiOutlineDocumentDuplicate } from 'react-icons/hi'; // Import additional icons
import Link from "next/link";
import Topbar from "@/components/Topbar/Topbar";

const Home: NextPage = () => {
  const welcomeText = "Namaste...";
  const [letters, setLetters] = useState<{ letter: string; delay: number }[]>([]);

  useEffect(() => {
    const letterArray = Array.from(welcomeText).map((char, index) => ({
      letter: char,
      delay: index * 0.1
    }));
    setLetters(letterArray);
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Updated to include new functionalities
  const features = [
    { id: 'Categories', label: 'Student', icon: <HiUser size={44} className="text-orange-500" /> },
    { id: 'Profile', label: 'Learner', icon: <HiUserGroup size={44} className="text-orange-500" /> },
    { id: 'assessment', label: 'Assessment', icon: <HiClipboardCheck size={44} className="text-orange-500" /> },
    { id: 'placement', label: 'Placement Service', icon: <HiBriefcase size={44} className="text-orange-500" /> },
    { id: 'assignment', label: 'Assignment', icon: <HiDocumentReport size={44} className="text-orange-500" /> }, // Example icon
    { id: 'community', label: 'Community', icon: <HiChatAlt2 size={44} className="text-orange-500" /> }, // Example icon
    { id: 'cv-builder', label: 'CV Builder', icon: <HiOutlineDocumentDuplicate size={44} className="text-orange-500" /> }, // Example icon
  ];

  // Function to determine if a feature is coming soon
  const isComingSoon = (id: string) => [ 'placement', 'assignment', 'community', 'cv-builder'].includes(id);

  return (
    <>
      <Topbar />
      <div className="landingPage bg-cover bg-center min-h-screen" style={{ backgroundImage: `url('./landingPageBg.jpg')` }}>
        <div className="flex flex-col items-center justify-center min-h-screen text-white px-4">
          <h1 className='text-3xl md:text-5xl font-bold text-center mt-10 mb-10 md:mb-20'>
            {letters.map((item, index) => (
              <span key={index} style={{
                opacity: 0,
                animation: `appear 0.5s forwards ${item.delay}s`,
                display: 'inline-block'
              }}>
                {item.letter}
              </span>
            ))}
          </h1>
          <div className="flex flex-wrap justify-center gap-4 md:gap-20 mb-10">
            {features.map((feature, index) => (
              <div key={index}
                className={`border border-gray-200 shadow-xl rounded-xl bg-gradient-to-br from-transparent to-transparent w-full sm:w-[250px] h-[200px] sm:h-[250px] transition-all duration-300 ease-in-out flex flex-col items-center justify-center bg-clip-padding backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 ${isComingSoon(feature.id) ? 'blur' : ''}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  transform: hoveredIndex === index ? 'perspective(1500px) rotateY(15deg) rotateX(15deg)' : 'none',
                  boxShadow: hoveredIndex === index ? '0 0 20px 5px orange' : '0 4px 6px rgba(0, 0, 0, 0.1)',
                  filter: hoveredIndex !== null && hoveredIndex !== index ? 'blur(4px)' : 'none'
                }}
              >
                {isComingSoon(feature.id) && (
                  <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
                    <HiLockClosed size={32} />
                    <div>Coming Soon</div>
                  </div>
                )}
                <div className="text-3xl md:text-4xl">
                  {feature.icon}
                </div>
                <div className="mt-2 text-sm md:text-lg">{feature.label}</div>
                <NavigationButton destination={`/${feature.id}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
