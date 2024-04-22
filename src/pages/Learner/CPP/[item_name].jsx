import { useRouter } from 'next/router';
import React, { useMemo, lazy, Suspense, useEffect } from 'react';
import Topbar from '../../../components/Topbar/Topbar';
import CppTopicsContent from '../../../components/TextContent/CppTopicsContent/CppTopicsContent';
import Image from 'next/image';
import { cppSyntax } from '../../../utils/Constants/CPP/syntax';
import CodeHighlighter from '../../../components/CodeHighlighter/CodeHighlighter';
import MarkDownRenderer from '../../../components/MarkDownRenderer/MarkDownRenderer';

const Sidebar = lazy(() => import('../../../components/TextContent/Sidebar/Sidebar'));
const Header = lazy(() => import('../../../components/TextContent/Header/Header'));
const Body = lazy(() => import('../../../components/TextContent/Body/Body'));


const ItemPage = () => {
 
  const topics =[" Home", " Intro", " Get Started", " Syntax", "Output", "Comments", " Variables", "Data Types", "Constants", " Operators", "Strings", " Math", "Booleans"," Conditions", " If..Else", " Switch", " While Loop", " For Loop", " Break/Continue", " Arrays", " User Input", " Pointers", " Functions", " Function Parameters", " Function Declaration"," Function Overloading", " Function Overriding", " Recursion", " OOP"," Classes/Objects", " Class Methods", " Constructors"," Access Specifiers"," Encapsulation"," Inheritance"," Polymorphism"," Files"," Exceptions"]
  const router = useRouter();
  const { item_name} = router.query;
    //console.log(item_name, "this is item");
    const item = item_name ? item_name.replace(/_/g, '-').replace(/\+/g, '-') : null
    console.log(item,"item hai ji");
   console.log(item?.includes("Intro"))
   
  useEffect(() => {
    if (item?.includes("Home")) {
       router.push('/Learner/CPP');
    }
   
  }, [item, router])


    return (
      <div className='flex flex-col h-screen'>
        <Topbar/>
        <div className="flex flex-1 overflow-auto">
          <Suspense fallback={<div>Loading...</div>}>
            <Sidebar items={topics} language={"CPP"} />
          </Suspense>
          <div className="flex flex-col ml-60 p-14">
         
           {item?.includes("Intro") &&  
            <>
              <Header title="C++ Introduction:" subtitle="What is C++" />
              <div className="text-xl mt-4">
                      <CppTopicsContent content = {(
                          <>
                            <strong>C++</strong> is a cross-platform language that can be used to create high-performance 
                            applications.
                            <br/> 
                            <br/>                  
                            <strong>C++</strong> was developed in the early 1980s by Bjarne Stroustrup.The first version of 
                            C++ was released in 1985.
                            <br/> 
                            <br/> 
                            <strong>C++</strong> is a type of language that tells computers what to do.It’s like giving step by-step instructions to a computer to perform tasks.
                            <br/> 
                            <br/> 
                            The language was updated 4 major times in <strong>2011</strong>, <strong>2014</strong>,<strong>2017</strong>,and <strong>2020</strong> 
                            &ensp;to <strong>C++11</strong>, <strong>C++14</strong>, <strong>C++17</strong>, <strong>C++20</strong>
                            <br/> 
                            <br/> 
                          </>
                      )}/>
              </div> 
              <>
              <Header title="" subtitle="Why use C++" />
              <div className="text-xl mt-4">
                      <CppTopicsContent content = {(
                          <>
                            <strong>C++</strong> is one of the world's most popular programming languages.
                            <br/> 
                            <br/>                  
                            <strong>C++</strong>  is fun and easy to learn!
                            <br/> 
                            <br/> 
                            <strong>C++</strong> programs can be very fast, making it suitable for tasks where quick 
execution is essential.
                            <br/> 
                            <br/> 
                            <strong>C++</strong>  is an object-oriented programming language which gives a clear structure 
to programs and allows code to be reused, lowering development costs.
                            <br/> 
                            <br/> 
                            <strong>C++</strong>  is an object-oriented programming language which gives a clear structure 
to programs and allows code to be reused, lowering development costs.
                           
                            <br/> 
                            <br/> 
                            <strong>C++</strong> programs can run really fast because they're closer to the hardware. This 
makes it great for applications where speed is important, like video games or 
high-performance software.
                            <br/> 
                            <br/> 
                            <strong>C++</strong> is widely supported across different platforms and systems. This means 
code written in C++ can often be easily ported to run on different devices or 
operating systems.
                          </>
                      )}/>
              </div> 
              </>
              <>
              <Header title="" subtitle="Difference between C and C++"/>
              <div className="text-xl mt-4 mb-4">
                <Image src="/DiffbwCC++.png" width={1000} height={300}/>
              </div>
             
              </>
           </>
           }
          {item?.includes("Started") &&  
            <>
              <Header title="C++ Getting Started"
               subtitle="C++ Get Started" />
              <div className="text-xl mt-4">
                      <CppTopicsContent content = {(
                          <>
                           To start using <strong>C++</strong>, you need two things:
                           <ol className="pl-10"style={{ listStyleType: 'decimal' }}>
                               <br/>
                               <li className=''> A text editor, like Notepad, to write <strong>C++</strong> code</li>
                               <li>A compiler, like GCC, to translate the <strong>C++</strong> code into a language that the 
                                   computer will understand
                               </li>
                           </ol>
                           <br/>
                           <p>There are many text editors and compilers to choose from. In this tutorial, we 
                              will use an IDE (see below).
                           </p>
                           <br/>
                          </>
                      )}/>
              </div> 
            
              <>
              <Header title="" subtitle="C++ Install IDE" />
              <div className="text-xl mt-4">
                      <CppTopicsContent content = {(
                          <>
                            <p>An IDE (Integrated Development Environment) is used to edit AND compile the 
                              code.
                            </p>
                            <br/> 
                            <p>Popular IDE's include Code::Blocks, Eclipse, and Visual Studio. These are all 
                               free, and they can be used to both edit and debug C++ code.
                            </p>
                            <br/> 
                            <strong>Note:</strong> Web-based IDE's can work as well, but functionality is limited
                             execution is essential.
                            <br/> 
                            <br/>
                          </>
                      )}/>
              </div> 
              </>
              
           </>
           }
           {item?.includes("Syntax") && 
            <>
            <Header title="C++ Syntax" subtitle="" />
            <div className='text-xl mt-4 '>
              <CppTopicsContent  content={cppSyntax?.syntax[0]?.text}/>
              
              <CppTopicsContent content={<CodeHighlighter className="overflow-auto" language="cpp" code={cppSyntax?.syntax[0]?.Example}/>}/>
              
              <h3>Example Explained</h3>
              <br/>
              <p>Let us now understand every line and the terminologies of the above program.</p>
              <br/>
              
              <b>1. // C++ program to display “Hello World”</b>
              <br/>
              <br/>
              <CppTopicsContent content = {cppSyntax?.syntax[0]?.problem}/>
              <br/>
              <br/>
              <b>2. #include</b>
              <br/>
              <br/>
              <CppTopicsContent content = {cppSyntax?.syntax[0]?.include}/>
              <br/>
              <br/>
              <b>3. using namespace std</b>
              <br/>
              <br/>
              <CppTopicsContent content = {cppSyntax?.syntax[0]?.using_namespace_std}/>
              <br/>
              <br/>
              <b>4. A blank line or white space</b>
              <br/>
              <br/>
              <CppTopicsContent content = {cppSyntax?.syntax[0]?.A_blank_line_or_white_space}/>
              <br/>
              <br/>
              <b>5. int main() { }</b>
              <br/>
              <br/>
              <CppTopicsContent content = {cppSyntax?.syntax[0]?.int_main}/>
              <br/>
              <br/>
              <b>6. cout “Hello World”;</b>
              <br/>
              <br/>
              <CppTopicsContent content = {cppSyntax?.syntax[0]?.cOut}/>
              <br/>
              <br/>
              <CppTopicsContent content={<CodeHighlighter className="overflow-auto" language="cpp" code={cppSyntax?.syntax[0]?.Note_1}/>}/>
              <br/>
              <br/>
              <b>6. return 0</b>
              <br/>
              <br/>
              <CppTopicsContent content = {cppSyntax?.syntax[0]?.return}/>
              <br/>
              <br/>
              <CppTopicsContent content={<CodeHighlighter className="overflow-auto" language="cpp" code={cppSyntax?.syntax[0]?.Note_2}/>}/>
              <br/>
              <br/>
              <b>Important Points:</b>
             
              <CppTopicsContent  content = {<MarkDownRenderer  markDown_text={cppSyntax?.syntax[0]?.Imp_points}/>}/>
              <br/>
              <br/>
              <h2 className='font-semibold'>Exclude Namespace</h2>
              <br/>
            </div>
            </>}
          </div>
          </div>
        </div>
     
    );
  };
  
  export default ItemPage;