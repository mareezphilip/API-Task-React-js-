import { useState } from "react";
function Welcome (props){
    let [counter , setCounter]  = useState(0);
    return(

        <>
         <h1> welcome {props.name} </h1>
         
         <button onClick={
            ()=>{
                setCounter(counter++)
                
            }
         }> 
            +
         </button>
         <p> {counter}</p>
        </>
        
    )
}
export default Welcome;