import React from 'react';
import Lottie from "lottie-react";
import mainGif from "../../public/mainPageGif.json";
import Topbar from '@/components/Topbar/Topbar';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import  Link  from 'next/link';
import { NextPage } from 'next';

const Home: NextPage= () => {
  return (
    <>
      <Topbar />
      <div className="flex bg-black h-screen justify-center items-center">
        {/* Left side */}
        <div className="w-1/3 p-4 flex flex-col justify-center items-center"> {/* Reduced width to 1/3 */}
          {/* Student Card */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-4  ml-56 relative aspect-w-1 aspect-h-1 transform rotate-0 transition-transform duration-500 hover:rotate-360 hover:scale-105 backdrop-filter backdrop-blur-lg bg-opacity-20 w-11/12 hover:shadow-orange">
            <h2 className="text-lg font-semibold mb-2 text-white">Student</h2>
            <p className="text-sm text-white mb-4">Short description about the student card goes here.</p>
            <Link href="/StudentHome"><button className="bg-orange-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-300">
              LOGIN <HiOutlineArrowNarrowRight className="inline-block ml-1" />
            </button></Link>
          </div>
          {/* Trainer Card */}
          <div className="bg-white rounded-lg ml-56 shadow-md p-4 relative aspect-w-1 aspect-h-1 transform rotate-0 transition-transform duration-500 hover:rotate-360 hover:scale-105 backdrop-filter backdrop-blur-lg bg-opacity-20 w-11/12 hover:shadow-orange">
            <h2 className="text-lg font-semibold mb-2 text-white">Trainer</h2>
            <p className="text-sm text-white mb-4">Short description about the trainer card goes here.</p>
            <button className="bg-orange-500 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-300">
              LOGIN <HiOutlineArrowNarrowRight className="inline-block ml-1" />
            </button>
          </div>
        </div>
        {/* Right side */}
        <div className="w-2/3 p-4"> {/* Increased width to 2/3 */}
          {/* Space for GIF */}
          <div className="rounded-lg shadow-md p-4 h-full flex justify-center items-center">
            <Lottie animationData={mainGif} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
