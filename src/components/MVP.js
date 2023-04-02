import React, { useState, useEffect } from 'react'
import useSWR from 'swr';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router'
import { Input } from "@nextui-org/react";
import { motion } from 'framer-motion';

const MVP = (props) => {
    const [ rating, setRating ] = useState();
    const [ description, setDescription ] = useState("");
    const [ feedbackData, setFeedbackData ] = useState();
    const setBad = () => {
        setRating(1)
    } 
    const setNeutral = () => {
        setRating(2)
    }
    const setGood = () => {
        setRating(3)
    }
    const setVeryGood = () => {
        setRating(4)
    }
    const sendFeedback = async () => {
        setsetFeedbackData("loading");
        const payload = {
            rating:rating,
            description:description,
        }
        const response = await fetch(`/api/receiveFeedback?id=${props.userId}`, {
            method:'POST',
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(payload)
        });
        const res = await response.json();
        setFeedbackData(res);
    } 
    return (
    <div> 
<motion.div whileHover={{scale:1.1}} class="shadow-xl max-w-sm p-6 bg-zinc-900 rounded-2xl shadow dark:bg-gray-950">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Whats on your mind? 🔨 </h5>
        <br></br>
    </a>
<textarea value={description} onChange={(e) => setDescription(e.target.value)} id="message" rows="4" class="shadow-xl block p-2.5 w-full text-sm text-white bg-zinc-800 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
<br></br>
<div class="space-x-4">
<motion.button onClick={setBad} whileHover={{scale: 1.1}} class="shadow-xl bg-slate-700 duration-500 shadow-xl px-6 py-2 font-large tracking-wide text-white capitalize transition-colors transform rounded-lg">
 😬
</motion.button>
<motion.button onClick={setNeutral} whileHover={{scale: 1.1}} class="shadow-xl bg-slate-700 duration-500 shadow-xl px-6 py-2 font-large tracking-wide text-white capitalize transition-colors transform rounded-lg">
 😐
</motion.button>
<motion.button onClick={setGood} whileHover={{scale: 1.1}} class="shadow-xl bg-slate-700 duration-500 shadow-xl px-6 py-2 font-large tracking-wide text-white capitalize transition-colors transform rounded-lg">
 😁
</motion.button>
<motion.button onClick={setVeryGood} whileHover={{scale: 1.1}} class="shadow-xl bg-slate-700 duration-500 shadow-xl px-6 py-2 font-large tracking-wide text-white capitalize transition-colors transform rounded-lg">
 🥰
</motion.button>
</div>
<br></br>
<motion.button onClick={sendFeedback} whileHover={{scale: 1.1}} class="bg-blue-700 duration-500 shadow-xl px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors transform rounded-lg">
Send Feedback 🔖
</motion.button>
{JSON.stringify(feedbackData)}
</motion.div>
<br></br><br></br><br></br><br></br>
    </div>  
  )
}

export default MVP