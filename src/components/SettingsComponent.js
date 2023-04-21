import React, { useState, useEffect } from 'react'
import useSWR from 'swr';
import Cookies from 'universal-cookie';
import jwt from "jsonwebtoken";
import { useRouter } from 'next/router'
import { motion } from 'framer-motion';

const UserInfo = () => {
    const [ user, setUser ] = useState(null);
    const [ isLoading, setLoading ] = useState(false);
    const [ feedback, setFeedback ] = useState([]);
    const [ projects, setProjects ] = useState([]);
    const [ cancelSubscription, setCancelSubscription ] = useState();
    const [ updateCard, setUpdateCard ] = useState();
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
                    setFeedback(res.user.feedbacks);
                    setCancelSubscription(res.user.subscription_cancel_url);
                    setUpdateCard(res.user.subscription_update_url);
                    setProjects(res.user.projects)
                    setLoading(false)
                    console.log(res);
            }
        }
        TokenVerification();
    }, [])
    const cancelSubscriptionRedirect = () => {
        console.log(cancelSubscription);
        router.push(cancelSubscription);
    }
    const updateCardRedirect = () => {
        router.push(updateCard);
    }
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
    <div 
    class="shadow shadow-xl w-3/4 p-4 text-center bg-form rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label class="block mb-2 text-sm font-medium text-white dark:text-white">Username</label>
            <input type="text" id="first_name" class="font-bold bg-MVP text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white shadow shadow-lg" value={user.username} required/>
        </div>
        <div>
            <label class="block mb-2 text-sm font-medium text-white dark:text-white">Email</label>
            <input type="text" id="last_name" class="font-bold bg-MVP text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white shadow shadow-lg" value={user.email} required/>
        </div>
        <div>
            <label class="block mb-2 text-sm font-medium text-white dark:text-white">API Key</label>
            <input type="text" id="last_name" class="font-bold bg-MVP text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white shadow shadow-lg" value="Doe" required/>
        </div>  
        <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-white dark:text-white">Website URL</label>
            <input type="text" id="last_name" class="font-bold bg-MVP text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white shadow shadow-lg" value={user.websiteUrl} required/>
        </div>
    </div>
    <div class="space-x-4 space-y-4">
    <motion.button 
    onClick={updateCardRedirect}
    whileHover={{scale:1.1}}
    class="shadow-md shadow-purple-500/20 bg-gradient-to-br from-purple-600 to-blue-500 duration-500 shadow-xl px-12 py-2 font-medium tracking-wide text-white capitalize transition-colors transform rounded-lg">
    Change Payment Info
    </motion.button>
    <motion.button 
    onClick={cancelSubscriptionRedirect}
    whileHover={{scale:1.1}}
    class="shadow-md shadow-purple-500/20 bg-gradient-to-br from-pink-500 to-orange-400 duration-500 shadow-xl px-12 py-2 font-medium tracking-wide text-white capitalize transition-colors transform rounded-lg">
    Cancel Subscription
    </motion.button>
    </div>
    </div>
  )
}

export default UserInfo