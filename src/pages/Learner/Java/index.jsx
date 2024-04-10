import React from "react";
import Sidebar from "../../../components/TextContent/Sidebar/Sidebar";
import Header from "../../../components/TextContent/Header/Header"
import Body from "../../../components/TextContent/Body/Body"
const JavaPage = () => {
    const topics =["Java Home", "Java Intro", "Java Get Started", "Java Syntax", "Java Output", "Java Comments", "Java Variables", "Java Data Types", "Java Type Casting", "Java Operators", "Java Strings", "Java Math", "Java Booleans", "Java If..Else", "Java Switch", "Java While Loop", "Java For Loop", "Java Break/Continue", "Java Arrays"]
    return (
        
            <div className="flex">
                <div className="flex-initial w-1/8">
                         <Sidebar items={topics} language={"Java"}/>
                </div>
                <div className="flex-col">
                    <div className="flex-initial w-1/8">
                         <Header/>
                    </div>
                    <div className="flex-initial w-7/8"> 
                         <Body/>
                    </div>
                </div>
            </div>
    )
}

export default JavaPage