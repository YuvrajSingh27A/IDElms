import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Button from '../components/Buttons/button';
import { HiUser, HiUserGroup, HiClipboardCheck } from 'react-icons/hi';
import Link from "next/link";
import Topbar from "@/components/Topbar/Topbar";

const Home: NextPage = () => {
  const welcomeText = "Namaste..." ;
  const [letters, setLetters] = useState<{ letter: string; delay: number }[]>([]);

  useEffect(() => {
    // Generate the letter array for the "Welcome" animation
    const letterArray = Array.from(welcomeText).map((char, index) => ({
      letter: char,
      delay: index * 0.1 // Adjust this value for speed
    }));
    setLetters(letterArray);
  }, []);

  // State to track which card is hovered for the tilt effect
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <Topbar />
      <div className="landingPage bg-cover bg-center min-h-screen" style={{ backgroundImage: `url('./landingPageBg.jpg')` }}>
        <div className="flex flex-col items-center justify-center min-h-screen  text-white">
          <h1 className='text-5xl font-bold text-center mt-10 mb-20'>
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
          <div className="flex space-x-4 mb-10 gap-20 justify-center text-start">
            {['Student', 'Learner', 'Online Test'].map((label, index) => (
              <div key={index}
                className="border border-gray-200 shadow-xl rounded-xl bg-gradient-to-br from-transparent to-transparent w-[250px] h-[250px] transition-all duration-300 ease-in-out flex flex-col items-center justify-center bg-clip-padding backdrop-filter backdrop-blur-lg bg-white bg-opacity-10"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  transform: hoveredIndex === index ? 'perspective(1500px) rotateY(15deg) rotateX(15deg)' : 'none',
                  boxShadow: hoveredIndex === index ? '0 0 20px 5px orange' : '0 4px 6px rgba(0, 0, 0, 0.1)', // Glow effect on hover
                  filter: hoveredIndex !== null && hoveredIndex !== index ? 'blur(4px)' : 'none' // Blur effect on other cards
                }}
              >
                <div className="text-4xl">
                  {label === 'Student' && <HiUser size={44} className="text-orange-500" />}
                  {label === 'Learner' && <HiUserGroup size={44} className="text-orange-500" />}
                  {label === 'Online Test' && <HiClipboardCheck size={44} className="text-orange-500" />}
                </div>
                <div className="mt-2.5 text-lg">{label}</div>
                <Link href='/Categories'>
                  <button
                    className="mt-5 bg-orange-500 text-white rounded p-2"
                  >
                    Learn More
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
