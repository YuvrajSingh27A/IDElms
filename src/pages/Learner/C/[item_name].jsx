import { useRouter } from 'next/router';
import Sidebar from '../../../components/TextContent/Sidebar/Sidebar';
import Header from '../../../components/TextContent/Header/Header';
import Body from '../../../components/TextContent/Body/Body';


const ItemPage = () => {
    const topics =["C Home", "C Intro", "C Get Started", "C Syntax", "C Output", "C Comments", "C Variables", "C Data Types", "C Constants", "C Operators", "C Strings", "C Math", "C Booleans", "C If..Else", "C Switch", "C While Loop", "C For Loop", "C Break/Continue", "C Arrays", "C User Input", "C Memory Address", "C Pointers", "C Functions", "C Function Parameters", "C Function Declaration", "C Recursion"]
  const router = useRouter();
  const { item_name} = router.query;
    console.log(item_name, "this is item");
    const item = item_name? item_name.replace(/_/g, '-') : null;
  return (
    <div>
       <div className="flex">
                <div className="flex-initial w-1/8">
                       
                         <Sidebar items={topics} language={"C"}/>
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