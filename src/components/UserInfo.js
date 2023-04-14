import React, { useState, useEffect } from 'react'
import Cookies from 'universal-cookie';
import jwt from "jsonwebtoken";
import { useRouter } from 'next/router'
import { motion } from 'framer-motion';

const UserInfo = () => {
    const [ user, setUser ] = useState(null);
    const [ isLoading, setLoading ] = useState(false);
    const [ feedback, setFeedback ] = useState([]);
    const [ projects, setProjects ] = useState([]);
    const cookies = new Cookies();
    const router = useRouter()
    useEffect(() => {
        setLoading(true);
        const TokenVerification = async () => {
            const userToken = cookies.get('user');
            if (!userToken) {
                console.log("No Token Found, redirecting.")
                router.push("/Signout")
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
                        return router.push("/Signout")
                    }
                    setUser(res.user);
                    setFeedback(res.user.feedbacks);
                    setProjects(res.user.projects)
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
    <br></br>
    <motion.button whileHover={{scale: 1.1}} class="bg-gradient-to-r from-green-400 to-blue-500 duration-500 shadow-xl px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors transform rounded-lg">
        Create Project
       </motion.button> 
       <br></br>
    {
            projects.map((y) => {
                return (
                    <>
                    <span class="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">Project Id : {y.id}</span>
                    </>
                )
            })
        }
        <br></br><br></br>    
  {feedback.map((x) => {
            return (
                <>
    <motion.div 
    whileHover={{
        scale:1.1
    }}
    class="max-w-sm p-6 bg-zinc-900 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
    <span class="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">{x.projectId}</span>
        <span class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{x.title}</span>
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">{x.title}</h5> 
            </a>
            <p class="mb-3 font-normal text-white dark:text-gray-400">{x.description}</p>
            
    </motion.div>
                </>
            )
        })}
        <br></br>
    </div>
  )
}

export default UserInfo