import React, { useMemo, lazy, Suspense } from 'react';
import { useRouter } from 'next/router';
import Topbar from '../../../components/Topbar/Topbar';

const Sidebar = lazy(() => import('../../../components/TextContent/Sidebar/Sidebar'));
const Header = lazy(() => import('../../../components/TextContent/Header/Header'));
const Body = lazy(() => import('../../../components/TextContent/Body/Body'));

const ItemPage = () => {
  const router = useRouter();
  const { item_name } = router.query;
  const item = useMemo(() => item_name ? item_name.replace(/_/g, '-') : null, [item_name]);

  const topics = useMemo(() => [
    "Python Home", "Python Intro", "Python Get Started", "Python Syntax", "Python Comments", "Python Variables",
    "Python Data Types", "Python Numbers", "Python Casting", "Python Strings", "Python Booleans", "Python Operators",
    "Python Lists", "Python Tuples", "Python Sets", "Python Dictionaries", "Python If...Else", "Python While Loops",
    "Python Functions", "Python Lambda", "Python Arrays", "Python Classes/Objects", "Python Inheritance",
    "Python Iterators", "Python Polymorphism", "Python Scope", "Python Modules", "Python Dates", "Python Math",
    "python JSON", "Python RegEx", "Python PIP", "Python Try...Except", "Python User Input", "Python String Formatting"
  ], []);

  return (
    <div className='flex-col'>
      <div className="fixed w-screen"><Topbar /></div>
      <div className="flex">
        <Suspense fallback={<div>Loading...</div>}>
          <Sidebar items={topics} language={"Python"} />
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
