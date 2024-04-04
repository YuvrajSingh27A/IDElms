import type { NextPage } from 'next';
import Button from '../components/Buttons/button';
import { HiUser, HiUserGroup, HiClipboardCheck } from 'react-icons/hi'; // Icons from react-icons
import Link from "next/link";
import Topbar from "@/components/Topbar/Topbar";

const Home: NextPage = () => {
 return (
  <>
    <Topbar />
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white"> {/* Updated here for white text */}
      <h1 className='text-5xl font-bold text-center mt-20 mb-10'>Welcome</h1> {/* Moved and adjusted margins */}
      <div className="flex space-x-4 mb-10 gap-20 justify-center text-start">
        {/* Individual card for each option */}
        <div className="border-1 shadow-xl rounded-xl bg-gradient-to-br from-slate-300 to-slate-400 w-[180px] h-[250px] hover:shadow-2xl transition duration-300 ease-in-out flex flex-col items-center justify-center">
          <a href="https://hopingminds.com/" target="_blank" rel="noopener noreferrer">
            <Button label="Student" icon={<HiUser size={44} />} />
          </a>
        </div>
        <div className="border-1 shadow-xl rounded-xl bg-gradient-to-br from-slate-300 to-slate-400 w-[180px] h-[250px] hover:shadow-2xl transition duration-300 ease-in-out flex flex-col items-center justify-center">
          <Link href='/Categories'>
            <Button label="Learner" icon={<HiUserGroup size={44} />} />
          </Link>
        </div>
        <div className="border-1 shadow-xl rounded-xl bg-gradient-to-br from-slate-300 to-slate-400 w-[180px] h-[250px] hover:shadow-2xl transition duration-300 ease-in-out flex flex-col items-center justify-center">
          <Button label="Online Test" icon={<HiClipboardCheck size={44} />} />
        </div>
      </div>
    </div>
  </>
 );
};

export default Home;
