import React from "react";
import { PiStackSimple, PiBracketsCurly, PiQuotes, PiTreeStructureLight } from "react-icons/pi";
import { MdOutlineDataArray } from "react-icons/md";
import { SlLoop } from "react-icons/sl";
import { AiOutlineStock } from "react-icons/ai";
import { GrGraphQl } from "react-icons/gr";
import { TbBrandMiniprogram } from "react-icons/tb";
import { GiLinkedRings, GiBallPyramid } from "react-icons/gi";
import { FaSortAmountUpAlt } from "react-icons/fa";
import Topbar from "@/components/Topbar/Topbar";


const categories = [
  { name: "Stacks", icon: <PiStackSimple /> },
  { name: "Queues", icon: <MdOutlineDataArray />},
  { name: "Arrays", icon: <MdOutlineDataArray />},
  { name: "Functions", icon: <PiBracketsCurly />},
  { name: "Strings", icon: <PiQuotes />},
  { name: "Recursion", icon: <SlLoop /> },
  { name: "Graphs", icon: <GrGraphQl /> },
  { name: "Trees", icon: <PiTreeStructureLight />},
  { name: "DP", icon: <TbBrandMiniprogram />},
  { name: "Linked List", icon: <GiLinkedRings />},
  { name: "Sorting", icon: <FaSortAmountUpAlt />},
  { name: "Heaps", icon: <GiBallPyramid />},
];

function App() {
  const handleLearnMore = (categoryName) => {
    alert(`Learn more about ${categoryName}`);
  };

  return (
     <>
     <Topbar/>
    <div className="flex flex-col items-center p-5 h-full bg-black text-white">
      <div className="flex flex-col justify-center items-center text-white py-10">
      <div className="flex items-center text-white py-2 px-5">
      <h1 className="text-4xl font-bold mr-2">CONQUER DSA</h1>
      <AiOutlineStock className="text-4xl" />
    </div>
      <p className="text-lg">Master Data Structures and Algorithms</p>
    </div>
      
      <div className="flex flex-wrap justify-center items-start gap-5 m-5 w-full max-w-4xl">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center border border-orange-500 rounded-lg p-5 w-full sm:w-1/4 max-w-xs min-w-[150px] bg-black-900">
            <div className="text-4xl ">{category.icon}</div>
            <div className="mt-2.5 text-lg">{category.name}</div>
            <button
              className="bg-orange-500 text-white rounded mt-5 p-2 outline-none border-none"
              onClick={() => handleLearnMore(category.name)}
              aria-label={`Learn more about ${category.name}`}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default App;
