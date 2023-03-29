import React, { useState, useEffect } from 'react'
import useSWR from 'swr';
import Cookies from 'universal-cookie';
import jwt from "jsonwebtoken";
import { useRouter } from 'next/router'

const UserInfo = () => {
    const [ user, setUser ] = useState(null);
    const [ isLoading, setLoading ] = useState(false);
    const [ feedback, setFeedback ] = useState([])
    const cookies = new Cookies();
    const router = useRouter()
    useEffect(() => {
        setLoading(true);
        const TokenVerification = async () => {
            const userToken = cookies.get('user');
            if (!userToken) {
                console.log("No Token Found, redirecting.")
                router.push("/Login")
            } else {
                    const response = await fetch('/api/dashboard', {
                        method:'GET',
                        headers: {
                            "Content-Type": "application/json",
                            credentials: "same-origin",
                            "credentials":"same-origin"
                        },
                    })
                    const res = await response.json();
                    if(res.user == null || res.user == "null") {
                        console.log("User token is null, redirecting.")
                        return router.push("/Login")
                    }
                    setUser(res.user);
                    setFeedback(res.feedbacks);
                    setLoading(false)
                    console.log(res);
            }
        }
        TokenVerification();
    }, [])
    // Loading Spinner
    if (isLoading) return (
        <>
        <br></br>
        <div role="status" class="max-w-sm animate-pulse">
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <span class="sr-only">Loading...</span>
        </div>
        </>
    )
    if (!user) return <><p>No Profile Data..</p></>
  return (
    <div>
        <div class="min-h-screen flex">
  <div class="flex-1 ...">
  <br></br><br></br>
  <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white">
  Hello {user.username} 👋, Welcome to your account!
  </h1>
  </div>
  <div class="flex-1 ...">
  {feedback.map((x) => {
            return (
                <>
    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <span class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{x.title}</span>
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{x.title}</h5> 
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{x.description}</p>
    </div>
                </>
            )
        })}
        {/* <p>{JSON.stringify(feedback)}</p> */}
  </div>
</div>
    </div>
  )
}

export default UserInfo