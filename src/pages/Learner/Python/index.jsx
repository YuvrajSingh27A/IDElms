import React, { useMemo, lazy, Suspense } from "react";
import Topbar from "../../../components/Topbar/Topbar";

const Sidebar = lazy(() => import("../../../components/TextContent/Sidebar/Sidebar"));
const Header = lazy(() => import("../../../components/TextContent/Header/Header"));
const Body = lazy(() => import("../../../components/TextContent/Body/Body"));

const PythonPage = () => {
    const topics =["Python Home", "Python Intro", "Python Get Started", "Python Syntax", "Python Comments", "Python Variables", "Python Data Types", "Python Numbers", "Python Casting", "Python Strings", "Python Booleans", "Python Operators", "Python Lists", "Python Tuples", "Python Sets", "Python Dictionaries", "Python If...Else", "Python While Loops", "Python Functions", "Python Lambda", "Python Arrays", "Python Classes/Objects", "Python Inheritance", "Python Iterators", "Python Polymorphism", "Python Scope", "Python Modules", "Python Dates", "Python Math", "python JSON", "Python RegEx", "Python PIP","Python Try...Except", "Python User Input", "Python String Formatting"]
    return (
    <div className="flex-col">
    <div className="fixed w-screen"><Topbar /></div>
    <div className="flex">
      <Suspense fallback={<div>Loading Sidebar...</div>}>
        <div>
          <Sidebar items={topics} language={"Python"} />
        </div>
      </Suspense>
      <div className="flex-col">
        <Suspense fallback={<div>Loading Header...</div>}>
          <div className="fixed top-20"><Header /></div>
        </Suspense>
        <Suspense fallback={<div>Loading Body...</div>}>
          <div className="fixed top-40"><Body /></div>
        </Suspense>
      </div>
    </div>
  </div>
);
}

export default PythonPage