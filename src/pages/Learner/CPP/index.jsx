import React from "react";
import Sidebar from "../../../components/TextContent/Sidebar/Sidebar";
import Header from "../../../components/TextContent/Header/Header";
import Body from "../../../components/TextContent/Body/Body";
import Topbar from "../../../components/Topbar/Topbar";
import TryItYourself from "../../../components/Buttons/TryItYourself";

//const boldWord = <b>hello</b>


const CPage = () => {
  const topics = [
    " Home", " Intro", " Get Started", " Syntax", " Output", " Comments", 
    " Variables", " Data Types", " Constants", " Operators", " Strings", 
    " Math", " Booleans"," Conditions", " If..Else", " Switch", " While Loop", 
    " For Loop", " Break/Continue", " Arrays", " User Input", " Pointers", 
    " Functions", " Function Parameters", " Function Declaration", 
    " Function Overloading", " Function Overriding", " Recursion", " OOP", 
    " Classes/Objects", " Class Methods", " Constructors", " Access Specifiers",
    " Encapsulation", " Inheritance", " Polymorphism", " Files", " Exceptions"
  ];

  return (
    <div className="flex flex-col h-screen">
      <Topbar />
      <div className="flex flex-1 overflow-auto bg-slate-300">
        <Sidebar items={topics} language={"CPP"} />
        <div className="flex flex-col ml-60 p-14">
          <Header title="C++ Tutorial:" subtitle="Learn C++" />
          <div className="text-xl mt-4 bg-slate-400 p-4">
          <Body content={(
      <>
        <strong>C++</strong> is a popular programming language.
        <br/> 
        <br/>                  
        <strong>C++</strong> is used to create computer programs, and is one of the most used languages in game development. 
        <br/> 
        <br/> 
        <strong>C++</strong> gives you a lot of freedom to do things your way.
        <br/> 
        <br/> 
        Once you learn <strong>C++</strong>, you can conquer many other languages easily.
        <br/> 
        <br/> 
        <strong>Example</strong>
        <br/>
        <div className="m-4">
        #include &lt;iostream&gt;
        <br/> 
        using namespace std;
        <br/> 
        <span style={{color:"blue"}}>int</span> main() &#123;
        <br/> 
          cout &lt;&lt;  <span style={{color:"red"}}>{`"Hello World"`}</span>;
          <br/> 
          <span style={{color:"blue"}}>return</span> <span style={{color:"red"}}>0</span>;
          <br/> 
        &#125;
        </div>
        <TryItYourself/>
       
      </>
      
    )} />

          </div>
          
<br/>
       <br/>
        </div>
      </div>
      
    </div>
  );
};

export default CPage;
