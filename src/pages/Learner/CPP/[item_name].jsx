import { useRouter } from 'next/router';
import Sidebar from '../../../components/TextContent/Sidebar/Sidebar';
import Header from '../../../components/TextContent/Header/Header';
import Body from '../../../components/TextContent/Body/Body';


const ItemPage = () => {
  const topics =[" Home", " Intro", " Get Started", " Syntax", "Output", "Comments", " Variables", "Data Types", "Constants", " Operators", "Strings", " Math", "Booleans"," Conditions", " If..Else", " Switch", " While Loop", " For Loop", " Break/Continue", " Arrays", " User Input", " Pointers", " Functions", " Function Parameters", " Function Declaration"," Function Overloading", " Function Overriding", " Recursion", " OOP"," Classes/Objects", " Class Methods", " Constructors"," Access Specifiers"," Encapsulation"," Inheritance"," Polymorphism"," Files"," Exceptions"]
  const router = useRouter();
  const { item_name} = router.query;
    console.log(item_name, "this is item");
    const item = item_name ? item_name.replace(/_/g, '-').replace(/\+/g, '-') : null
  return (
    <div>
       <div className="flex">
                <div className="flex-initial w-1/8">
                       
                         <Sidebar items={topics} language={"CPP"}/>
                </div>
                <div className="fixed top-0 left-60 flex-col  ">
                    <div className="flex-initial w-1/8">
                         <Header/>
                    </div>
                    <div className="flex-initial w-7/8"> 
                         <Body/>
                    </div>
                    <h1>{item_name}</h1>
                </div>
                
            </div>
     
      
    </div>
  );
};

export default ItemPage;