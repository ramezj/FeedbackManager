import React, { useState, useEffect } from 'react'
import useSWR from 'swr';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router'
import { Input } from "@nextui-org/react";

const LoginForm = () => {
    const cookies = new Cookies();
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ loading, setLoading ] = useState();
    const [ response, setResponse ] = useState();
    const router = useRouter()
    const redirectUserToLogin = () => {
        router.push('/Register');
    }
    const LoginUser = async () => {
        setLoading(true);
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
        setLoading(false);
        if(res.ok == false) {
            setResponse(res.message);
        }
        if (res.ok == true) {
            setResponse("Signed In Successfully, Redirecting!")
            cookies.set('user' , res.token);
            cookies.set('username' , res.username)
            router.push('/Dashboard')
        }
        console.log(res);
    } 

    return (
    <div>
  <div class="shadow-lg w-full max-w-sm p-4 bg-zinc-900 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 space-y-6">
    <h1 class="text-3xl font-semibold text-white">Sign In</h1>
        <div>
            <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white float-left">Your email</label>
            <input type="email" name="email" value={email} onChange={(e) => {setEmail(e.target.value)}} class="bg-slate-900 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white shadow shadow-lg" placeholder="name@company.com" />
        </div>
        <div>
            <label for="password" class="block mb-2 text-sm font-medium text-white dark:text-white float-left">Your password</label>
            <input type="password" name="password" id="password" value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder="••••••••" class="shadow shadow-lg bg-slate-900 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        <button onClick={LoginUser} class="shadow-md shadow-purple-500/20 bg-gradient-to-br from-purple-600 to-blue-500 duration-500 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded-lg focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 w-full">Login to your account</button>
        {
                loading 
                ? (
                    <div role="status">
    <svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>
                )
                : (
                    <>
                    <p>{response}</p>
                    </>
                )
            }
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
            <b class="float-left">Not registered? <a onClick={redirectUserToLogin} class="cursor-pointer text-blue-700 hover:underline dark:text-blue-500">Create an account</a></b>
            <br></br>
        </div>
</div>
</div>  
  )
}

export default LoginForm