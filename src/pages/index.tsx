import React, { useEffect, useState } from 'react';
import Lottie from "lottie-react";
import mainGif from "../../public/mainPageGif.json";
import Topbar from '@/components/Topbar/Topbar';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import  Link  from 'next/link';
import { NextPage } from 'next';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '@/atoms/authModalAtom';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import Footer from '@/components/Footer/Footer';
import About from '../components/About'


const Home: NextPage= () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const [user] = useAuthState(auth)
  const handleSuccessfulLogin = () => {
    setAuthModalState((prev) => ({
      ...prev,
      isOpen: true,
      type: "login",
    }))
    
  }

  useEffect(() => {
    if (user) {
      router.push('/StudentHome');
    }
  }, [user]); 
  return (
    <>
      <Topbar />
      <div className="flex h-screen justify-center items-center" style={{ backgroundImage: `url('/mainPageBg.jpg')`}}>
        {/* Left side */}
        <div className="w-1/3 p-4 flex flex-col justify-center items-center"> {/* Reduced width to 1/3 */}
          {/* Student Card */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-4  ml-48 relative aspect-w-1 aspect-h-1 transform rotate-0 transition-transform duration-500 hover:rotate-360 hover:scale-105 backdrop-filter backdrop-blur-lg bg-opacity-20 w-11/12 hover:shadow-orange">
            <h2 className="text-lg font-semibold mb-2 text-white">Student</h2>
            <p className="text-sm text-white mb-4">Short description about the student card goes here.</p>
            <Link 
             href="/auth"
             onClick={handleSuccessfulLogin}
             
            >
            <button className="bg-orange-500 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gradient-to-r from-black to-orange-500">
              LOGIN <HiOutlineArrowNarrowRight className="inline-block ml-1" />
            </button>
            </Link>
            
           
            
          </div>
         
       
          {/* Trainer Card */}
          <div className="bg-white rounded-lg ml-48 shadow-md p-4 relative aspect-w-1 aspect-h-1 transform rotate-0 transition-transform duration-500 hover:rotate-360 hover:scale-105 backdrop-filter backdrop-blur-lg bg-opacity-20 w-11/12 hover:shadow-orange">
            <h2 className="text-lg font-semibold mb-2 text-white">Trainer</h2>
            <p className="text-sm text-white mb-4">Short description about the trainer card goes here.</p>
            <button className="bg-orange-500 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gradient-to-r from-black to-orange-500">
              LOGIN <HiOutlineArrowNarrowRight className="inline-block ml-1" />
            </button>
          </div>
        </div>
       
        <div className="w-2/3 p-4"> {/* Increased width to 2/3 */}
         
          <div className="rounded-lg shadow-md p-4 h-full flex justify-center items-center">
            <Lottie animationData={mainGif} />
          </div>
        </div>
      </div>
      <About/>
      <Footer/>
    </>
  );
};

export default Home;
