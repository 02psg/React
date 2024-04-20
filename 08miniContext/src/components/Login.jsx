import React from 'react'
import { useState } from 'react'
import UserContext from '../context/UserContext';
import { useContext } from 'react';


const Login = () => {
    const [name,setname] = useState('');
    const [password,setpassword] = useState('')
    const {setUser} = useContext(UserContext);

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        setUser({name,password});

       console.log({name,password})
      
    }
  
    return (
    
    <>
    <div>
        <h1>
            Login Page
        </h1>
        <input type="text" value={name} onChange={(e)=>{
            setname(e.target.value)
        }} placeholder="Enter your name"/>
        <input type="password" value={password} onChange={(e)=>{
            setpassword(e.target.value)
        }} placeholder="Enter your password"/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
    </>
  )
}

export default Login