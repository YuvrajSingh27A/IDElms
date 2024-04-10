import { useRouter } from 'next/router';
import Sidebar from '../../../components/TextContent/SideBar/SideBar';
import Header from '../../../components/TextContent/Header/Header';
import Body from '../../../components/TextContent/Body/Body';
import Topbar from "../../../components/Topbar/Topbar";

const ItemPage = () => {
  const topics =["Python Home", "Python Intro", "Python Get Started", "Python Syntax", "Python Comments", "Python Variables", "Python Data Types", "Python Numbers", "Python Casting", "Python Strings", "Python Booleans", "Python Operators", "Python Lists", "Python Tuples", "Python Sets", "Python Dictionaries", "Python If...Else", "Python While Loops", "Python Functions", "Python Lambda", "Python Arrays", "Python Classes/Objects", "Python Inheritance", "Python Iterators", "Python Polymorphism", "Python Scope", "Python Modules", "Python Dates", "Python Math", "python JSON", "Python RegEx", "Python PIP","Python Try...Except", "Python User Input", "Python String Formatting"
]
  const router = useRouter();
  const { item_name} = router.query;
    console.log(item_name, "this is item");
    const item = item_name? item_name.replace(/_/g, '-') : null;
  return (
    <div className='flex-col'>
       <div className="fixed w-screen"><Topbar/></div>
       <div className="flex">
                      <div>
                              <Sidebar items={topics} language={"Python"}/>
                      </div> 
                <div className="fixed top-0 left-60 flex-col">
                    <div className="">
                         <Header/>
                    </div>
                    <div className=""> 
                         <Body/>
                    </div>
                    <h1>{item_name}</h1>
                </div>
                
            </div>
     
      
    </div>
  );
};

export default ItemPage;