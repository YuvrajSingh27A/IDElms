import React from "react";
import Sidebar from "../../../components/TextContent/Sidebar/Sidebar";
import Header from "../../../components/TextContent/Header/Header";
import Body from "../../../components/TextContent/Body/Body";
import Topbar from "../../../components/Topbar/Topbar";
const PythonPage = () => {
    const topics =["Python Home", "Python Intro", "Python Get Started", "Python Syntax", "Python Comments", "Python Variables", "Python Data Types", "Python Numbers", "Python Casting", "Python Strings", "Python Booleans", "Python Operators", "Python Lists", "Python Tuples", "Python Sets", "Python Dictionaries", "Python If...Else", "Python While Loops", "Python Functions", "Python Lambda", "Python Arrays", "Python Classes/Objects", "Python Inheritance", "Python Iterators", "Python Polymorphism", "Python Scope", "Python Modules", "Python Dates", "Python Math", "python JSON", "Python RegEx", "Python PIP","Python Try...Except", "Python User Input", "Python String Formatting"
 ]
    return (
        
            <div className="flex-col">
                       <div className="fixed w-screen"><Topbar/></div>
                <div className="flex">
                       <div>
                              <Sidebar items={topics} language={"Python"}/>
                       </div>  
                        <div className="flex-col">
                              <div className="fixed top-20"><Header/></div>
                              <div className="fixed top-40"><Body/></div>
                        </div>
                </div>
                
            </div>
    )
}

export default PythonPage