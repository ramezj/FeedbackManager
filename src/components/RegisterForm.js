import React, { useState, useEffect } from 'react'
import useSWR from 'swr';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router'

const RegisterForm = () => {
    const cookies = new Cookies();
    const [ username, setUsername ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState();
    const router = useRouter()
    const RegisterUser = async () => {
        const payload = {
            username:username,
            email:email,
            password: password
        }
        const response = await fetch('/api/auth/Register', {
            method:'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(payload)
        })
        const res = await response.json();
        if (res.ok == false) {
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
    <input type="text" placeholder="username" value={username} onChange={(e) => {setUsername(e.target.value)}}/>
    <br></br><br></br>
    <input type="text" placeholder="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
    <br></br><br></br>
    <input type="password" placeholder="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
    <br></br>
    <button onClick={RegisterUser}> Register </button>
    <p>{error}</p>
    </div>
  )
}

export default RegisterForm