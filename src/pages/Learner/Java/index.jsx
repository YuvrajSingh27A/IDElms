import React, { useState } from "react";
import Sidebar from "../../../components/TextContent/Sidebar/Sidebar";
import Header from "../../../components/TextContent/Header/Header"
import Body from "../../../components/TextContent/Body/Body"
import { GiHamburgerMenu, GiCrossMark } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const JavaPage = () => {
    const topics =["Java Home", "Java Intro", "Java Get Started", "Java Syntax", "Java Output", "Java Comments", "Java Variables", "Java Data Types", "Java Type Casting", "Java Operators", "Java Strings", "Java Math", "Java Booleans", "Java If..Else", "Java Switch", "Java While Loop", "Java For Loop", "Java Break/Continue", "Java Arrays"]
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        
        <div className="flex">
           
            <div className={`flex-initial w-1/8 ${!sidebarOpen && 'hidden'} sm:block`}>
                <Sidebar items={topics} language={"Java"}/>
            </div>
            
           
            <div className="flex-col">
                {/* Header with Sidebar Icon (visible on small screens) */}
                <div className="flex-initial w-1/8">
                    <Header />
                    <div className="sm:hidden" onClick={toggleSidebar}>
                        {sidebarOpen ? 
                        (
                        <div className="sidebar-icon"><ImCross /></div>
                    ) : (
                        <div className="sidebar-icon"><GiHamburgerMenu /></div>
                    )}

                           
                           
                </div>
                
                
                <div className="flex-initial w-7/8"> 
                    <h1>Java Tutorial</h1>
                    <b> Learn Java </b>
                    vansh chuttad
                </div>
            </div>
        </div>
        </div>
    )
}

export default JavaPage;
