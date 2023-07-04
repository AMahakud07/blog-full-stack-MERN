import { useState } from "react"

export default function LoginPage(){
    const [username,setUsername]= useState('');
    const [password,setPassword]= useState('');
    function login(e){
        e.preventDefault();

        fetch('http://localhost:4000/login',{
            method: 'POST',
            body: JSON.stringify({username,password}),
            headers:{'Content-Type':'application/json'}
        })
    }
    return (
        <>
        <form className="login">
            <h1>Login</h1>
            <input 
            type="text" 
            placeholder="usrename"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            />
            <input 
            type="password" 
            placeholder="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            />
            <button>Login</button>
        </form>
        </>
    )
} 