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
<div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 space-y-6">
        <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white float-left">Your email</label>
            <input type="email" name="email" value={email} onChange={(e) => {setEmail(e.target.value)}} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
        </div>
        <div>
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white float-left">Your password</label>
            <input type="password" name="password" id="password" value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        <button onClick={LoginUser} type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
            <b class="float-left">Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a></b>
            <p>{error}</p>
        </div>
</div>
    </div>
  )
}

export default LoginForm