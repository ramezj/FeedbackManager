import React, { useState, useEffect } from 'react'
import useSWR from 'swr';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router'

const LoginForm = () => {
    const cookies = new Cookies();
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState();
    const router = useRouter()
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
        if(res.ok == false) {
            setError(res.message);
        }
        if (res.ok == true) {
            cookies.set('user', res.token);
            router.push('/Dashboard')
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
    <p>{error}</p>
    </div>
  )
}

export default LoginForm