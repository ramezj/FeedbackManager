import React, { useState, useEffect } from 'react'
import useSWR from 'swr';
import Cookies from 'universal-cookie';
import jwt from "jsonwebtoken";
import { useRouter } from 'next/router'

const UserInfo = () => {
    const [ user, setUser ] = useState("loading");
    const [ feedback, setFeedback ] = useState([])
    const cookies = new Cookies();
    const router = useRouter()
    useEffect(() => {
        const TokenVerification = async () => {
            const userToken = cookies.get('user');
            if (!userToken) {
                router.push("/Login")
                // console.log("User Cookie Not Found")
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
                    setUser(res.user);
                    setFeedback(res.feedbacks)
                    console.log(res);
            }
        }
        TokenVerification();
    }, [])
    // Loading Spinner
    if (user == "loading") return (
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
  return (
    <div>
        <br></br>
        <h1>{user.username}</h1>
        <p>{user.email}</p>
        <p>{JSON.stringify(feedback)}</p>

    </div>
  )
}

export default UserInfo