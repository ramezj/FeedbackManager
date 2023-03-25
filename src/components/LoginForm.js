import React, { useState, useEffect } from 'react'
import useSWR from 'swr';
import Cookies from 'universal-cookie';

const LoginForm = () => {
    const cookies = new Cookies();
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const LoginUser = async () => {
        const payload = {
            email:email,
            password: password
        }
        const response = await fetch('/api/auth/login', {
            method:'POST',
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body:JSON.stringify(payload)
        })
        const res = await response.json();
        if (res.ok == true) {
            cookies.set('user', res.token);
        }
        console.log(res);
    } 

    return (
    <div>
        <br></br>
    <input type="text" placeholder="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
    <br></br><br></br>
    <input type="pas{sword" placeholder="email" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
    <br></br>
    <button onClick={LoginUser}> Login </button>
    </div>
  )
}

export default LoginForm