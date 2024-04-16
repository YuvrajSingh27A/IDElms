import { useRouter } from 'next/router';
import React, { useMemo, lazy, Suspense } from 'react';
import Topbar from '../../../components/Topbar/Topbar';
const Sidebar = lazy(() => import('../../../components/TextContent/Sidebar/Sidebar'));
const Header = lazy(() => import('../../../components/TextContent/Header/Header'));
const Body = lazy(() => import('../../../components/TextContent/Body/Body'));


const ItemPage = () => {
  const topics =[" Home", " Intro", " Get Started", " Syntax", "Output", "Comments", " Variables", "Data Types", "Constants", " Operators", "Strings", " Math", "Booleans"," Conditions", " If..Else", " Switch", " While Loop", " For Loop", " Break/Continue", " Arrays", " User Input", " Pointers", " Functions", " Function Parameters", " Function Declaration"," Function Overloading", " Function Overriding", " Recursion", " OOP"," Classes/Objects", " Class Methods", " Constructors"," Access Specifiers"," Encapsulation"," Inheritance"," Polymorphism"," Files"," Exceptions"]
  const router = useRouter();
  const { item_name} = router.query;
    console.log(item_name, "this is item");
    const item = item_name ? item_name.replace(/_/g, '-').replace(/\+/g, '-') : null
    return (
      <div className='flex-col'>
        <div className="fixed w-screen"><Topbar/></div>
        <div className="flex">
          <Suspense fallback={<div>Loading...</div>}>
            <Sidebar items={topics} language={"CPP"} />
          </Suspense>
          <div className="fixed top-0 left-60 flex-col">
            <Suspense fallback={<div>Loading...</div>}>
              <div className=""><Header /></div>
              <div className=""><Body /></div>
            </Suspense>
            <h1>{item}</h1>
          </div>
        </div>
      </div>
    );
  };
  
  export default ItemPage;