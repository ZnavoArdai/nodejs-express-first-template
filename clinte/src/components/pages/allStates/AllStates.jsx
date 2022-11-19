import React from 'react'
import Card from '../card/Card';
import { useEffect } from "react";
import { useState } from "react";

 const CreateState = () => {
    const [homeDate, setHomeData] = useState();

    useEffect(() => {
  
      const getDate= async()=>{
      const data=await fetch("http://localhost:8080/travel")
  
      const filtterDate=await data.json()
  
       setHomeData(filtterDate)
      }
        
    getDate()
    
  }, []);
  if(!homeDate) return null;
  console.log(homeDate);
  return (
    <>
     {homeDate.map((item)=>{

return  <Card  item={item}/>

})}
    </>
  )
}

export default CreateState;
