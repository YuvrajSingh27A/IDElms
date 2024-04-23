import { auth } from "@/firebase/firebase";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Logout from "../Buttons/Logout";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import Timer from "../Timer/Timer";
import { problems } from "@/utils/problems";
import { Problem } from "@/utils/types/problem";

type TopbarProps = {
  problemPage?: boolean;
};

const Topbar: React.FC<TopbarProps> = ({ problemPage }) => {
  const [user] = useAuthState(auth);
  const setAuthModalState = useSetRecoilState(authModalState);
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  const handleProblemChange = (isForward: boolean) => {
    const { order } = problems[router.query.pid as string] as Problem;
    const direction = isForward ? 1 : -1;
    const nextProblemOrder = order + direction;
    const nextProblemKey = Object.keys(problems).find(
      (key) => problems[key].order === nextProblemOrder
    );

    if (isForward && !nextProblemKey) {
      const firstProblemKey = Object.keys(problems).find(
        (key) => problems[key].order === 1
      );
      router.push(`/problems/${firstProblemKey}`);
    } else if (!isForward && !nextProblemKey) {
      const lastProblemKey = Object.keys(problems).find(
        (key) => problems[key].order === Object.keys(problems).length
      );
      router.push(`/problems/${lastProblemKey}`);
    } else {
      router.push(`/problems/${nextProblemKey}`);
    }
  };

  return (
    <nav className="relative flex h-[50px] items-center px-2 sm:px-1 bg-black text-dark-gray-7">
      <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={120} height={20} />
          </Link>
          <div className="block sm:hidden">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="text-white focus:outline-none"
            >
              <BsList size={24} />
            </button>
          </div>
          
          {problemPage && (
            <div className={`flex items-center gap-4 justify-center ${showMenu ? 'block' : 'hidden'} sm:flex flex-col sm:flex-row`}>
              <div
                className="flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer"
                onClick={() => handleProblemChange(false)}
              >
                <FaChevronLeft />
              </div>
              <Link
                href="/"
                className="flex items-center gap-2 font-medium max-w-[170px] text-dark-gray-8 cursor-pointer"
              >
                <div>
                  <BsList />
                </div>
                <p>Problem List</p>
              </Link>
              <div
                className="flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer"
                onClick={() => handleProblemChange(true)}
              >
                <FaChevronRight />
              </div>
            </div>
          )}
        </div>

        <div className={`flex items-center space-x-4 ${showMenu ? 'block' : 'hidden'} sm:flex`}>
          <div>
            <Link
              href="/Questions"
              className="bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2"
            >
              Questions
            </Link>
          </div>
         <Link href="/About"> <div  className="cursor-pointer text-brand-orange hover:text-white">
            About 
            </div>
         </Link>
          <Link href="/Contact">
          <div className="cursor-pointer text-brand-orange hover:text-white">
            Contact
          </div>
          </Link>
          
          {user && problemPage && <Timer />}
          {user && (
            <div className="cursor-pointer group relative">
              <Link href="/Profile">
                <Image
                  src="/avatar.png"
                  alt="Avatar"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </Link>

              <div
                className="absolute top-10 left-2/4 -translate-x-2/4  mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg 
            z-40 group-hover:scale-100 scale-0 
            transition-all duration-300 ease-in-out"
              >
                <p className="text-sm">{user.email}</p>
              </div>
            </div>
          )}

          {user && <Logout />}
        </div>
      </div>
    </nav>
  );
};
export default Topbar;
