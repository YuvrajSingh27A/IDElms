import React from "react";
import Sidebar from "../../../components/TextContent/Sidebar/Sidebar";
import Header from "../../../components/TextContent/Header/Header"
import Body from "../../../components/TextContent/Body/Body"

const CPage = () => {
    const topics =[" Home", " Intro", " Get Started", " Syntax", " Output", " Comments", " Variables", " Data Types", " Constants", " Operators", " Strings", " Math", " Booleans"," Conditions", " If..Else", " Switch", " While Loop", " For Loop", " Break/Continue", " Arrays", " User Input", " Pointers", " Functions", " Function Parameters", " Function Declaration"," Function Overloading", " Function Overriding", " Recursion", " OOP"," Classes/Objects", " Class Methods", " Constructors"," Access Specifiers"," Encapsulation"," Inheritance"," Polymorphism"," Files"," Exceptions"]
    return (
        <div className="flex">
            <div className="flex-initial w-1/8">
                <Sidebar items={topics} language={"C++"}/>
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

export default CPage
