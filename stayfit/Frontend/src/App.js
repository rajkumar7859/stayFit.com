import "./App.css";
import AllRoutes from "./AllRoutes";
import { useEffect, useState } from "react";
import { Image } from "@chakra-ui/react";


function App() {

  const [ preLoading , setPreloading ]=useState(true)

useEffect(()=>{
  const load=setInterval(() => {
    setPreloading(false)
  }, 1000);
  return () => {
    clearInterval(load);
  };
},[])

  return (
    <div>
      {
        preLoading?<Image w="20rem" m="auto" src="https://www.fugusau.edu.ng/wp-content/uploads/2021/01/loading-icon-animated-gif-19.gif" />:
      <AllRoutes/>
      }
    </div>
      );
}

export default App;
