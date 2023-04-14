import React, { useState, useEffect } from 'react';
import { PaddleLoader } from "../components/PaddleLoader";
import Cookies from 'universal-cookie';
import jwt from "jsonwebtoken";
import { useRouter } from 'next/router'
import { motion } from 'framer-motion';

const UpgradeSubscription = () => {
    const [ user, setUser ] = useState(null);
    const [ isLoading, setLoading ] = useState(false);
    const [ feedback, setFeedback ] = useState([]);
    const [ projects, setProjects ] = useState([]);
    const [ premium, setPremium ] = useState()
    const [ premiumLoading, setPremiumLoading ] = useState(true);
    const [ uid, setUid ] = useState()
    const cookies = new Cookies(); 
    const router = useRouter()
    useEffect(() => {
        const uidCookie = cookies.get("uid");
        setUid(uidCookie)
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
                    setPremium(res.user.isSubscribed)
                    setPremiumLoading(false)
                    console.log(premium)
                    setLoading(false)
                    console.log(res);
            } 
        }
        TokenVerification();
    }, [])
    
    // useEffect(() => {
    //     setPremium(user.isSubscribed);
    //     console.log(premium)
    //     setPremiumLoading(false);
    // }, [])
    if (premium === undefined) {
        return (
            <>
            <div role="status" class="max-w-sm animate-pulse">
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        </div>
            </>
        )
    }
    if (premium == true ) {
        return (
            <>
            <p>Subscribed</p>
            </>
        )
    } if (premium == false) {
        return (
            <>
        <PaddleLoader/>
        <motion.button 
        onClick={(()=> {
            Paddle.Checkout.open({
              product:49358,
              passthrough:uid,
              email:user.email
            })
          })}
        whileHover={{scale: 1.1}} class="bg-gradient-to-r from-green-400 to-blue-500 duration-500 shadow-xl px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors transform rounded-lg">
        Upgrade 
       </motion.button>
        </>
        )
    }
    <p>
        {String(premium)}
    </p>
}

export default UpgradeSubscription