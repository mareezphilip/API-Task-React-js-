import { useState } from "react";

function Form(){
    let[name,setname]=useState('');
    let[password,setpassword] = useState('');
    let[gender,setgender]=useState('');
    
    const namehandler = (value)=>{
        setname(value)
    }

    const passwordhandlerevent =( value)=>{
     setpassword(value);
    }
    return( 
        <>
        <form onSubmit={(e) =>{
            e.preventDefault()
            console.log(name);
            console.log(password)
        }}> 
        <label> Name</label>
        <input type="text" placeholder="enter your name" onChange={(event)=>{
           namehandler(event.target.value ) }}/>
        <br/>
        <label> password</label>
        <input type="password" placeholder="password" onChange={(event)=>{
            passwordhandlerevent(event.target.value)
        }}/>
        <br/>
        <label> gender</label>
        <select>
            <option value="male"> male</option>
            <option value="female"> female</option>
        </select>
        <button type="submit"> Submit</button>
        </form>
        </>
        
    )
}

export default Form ;