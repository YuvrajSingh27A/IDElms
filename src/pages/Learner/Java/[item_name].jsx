import { useRouter } from 'next/router';
import Sidebar from '../../../components/TextContent/Sidebar/Sidebar';
import Header from '../../../components/TextContent/Header/Header';
import Body from '../../../components/TextContent/Body/Body';


const ItemPage = () => {
    const topics =["Java Home", "Java Intro", "Java Get Started", "Java Syntax", "Java Output", "Java Comments", "Java Variables", "Java Data Types", "Java Type Casting", "Java Operators", "Java Strings", "Java Math", "Java Booleans", "Java If..Else", "Java Switch", "Java While Loop", "Java For Loop", "Java Break/Continue", "Java Arrays"]
  const router = useRouter();
  const { item_name} = router.query;
    console.log(item_name, "this is item");
<<<<<<< HEAD
    const item = item_name ? item_name.replace(/_/g, '-').replace(/\+/g, '-') : null
=======
    const item =item_name? item_name.replace(/_/g, '-').replace(/\+/g, '-') : null
>>>>>>> a6713dd6f7a790996fab5c0a1087cd59888869fd
  return (
    <div>
       <div className="flex">
                <div className="flex-initial w-1/8">
                       
                         <Sidebar items={topics} language={"Java"}/>
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