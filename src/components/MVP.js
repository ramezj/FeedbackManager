import React, { useState, useEffect } from 'react'
import useSWR from 'swr';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router'
import { Input } from "@nextui-org/react";
import { motion } from 'framer-motion';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const MVP = (props) => {
    const [ rating, setRating ] = useState(2);
    const [ description, setDescription ] = useState("");
    const [ projectId, setProjectId ] = useState("");
    const [ feedbackData, setFeedbackData ] = useState();
    const [ loading, setLoading ] = useState();
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
        setLoading(true);
        const payload = {
            rating:rating,
            description:description,
            projectId: props.projectId
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
        if (res.ok == true) {
          setLoading(false);
          setFeedbackData("Thanks! We received your feedback.");
        } else {
          setFeedbackData("Something went wrong");
        }
        console.log(res);
    } 
    return (
    <div> 
            <motion.div class="shadow-xl max-w-sm p-6 bg-zinc-900 rounded-2xl shadow dark:bg-gray-950">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Whats on your mind? 🔨 </h5>
        <br></br>
    </a>
<textarea required value={description} onChange={(e) => setDescription(e.target.value)} id="message" rows="4" class="shadow-xl block p-2.5 w-full text-sm text-white bg-zinc-800 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
<br></br>
<div class="space-x-4">
<motion.button onClick={setBad} whileHover={{scale: 1.1}} class="focus:bg-slate-900 shadow-xl bg-slate-800 duration-500 shadow-xl px-6 py-2 font-large tracking-wide text-white capitalize transition-colors transform rounded-lg">
 😬
</motion.button>
<motion.button onClick={setNeutral} whileHover={{scale: 1.1}} class="focus:bg-slate-900 shadow-xl bg-slate-800 duration-500 shadow-xl px-6 py-2 font-large tracking-wide text-white capitalize transition-colors transform rounded-lg">
 😐
</motion.button>
<motion.button onClick={setGood} whileHover={{scale: 1.1}} class="focus:bg-slate-900 shadow-xl bg-slate-800 duration-500 shadow-xl px-6 py-2 font-large tracking-wide text-white capitalize transition-colors transform rounded-lg">
 😁
</motion.button>
<motion.button onClick={setVeryGood} whileHover={{scale: 1.1}} class="focus:bg-slate-900 shadow-xl bg-slate-800 duration-500 shadow-xl px-6 py-2 font-large tracking-wide text-white capitalize transition-colors transform rounded-lg">
 🥰
</motion.button>
</div>
<br></br>
<motion.button onClick={sendFeedback} whileHover={{scale: 1.1}} class="bg-blue-700 duration-500 shadow-xl px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors transform rounded-lg">
Send Feedback 🔖
</motion.button>
<br></br>
{/* {
    feedbackData
    ? <motion.button class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Success</motion.button>
    : <motion.button></motion.button>
} */}
<br></br>
 {
    loading 
    ? (
        <>
        <div role="status">
    <svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>
        </>
    )
    : (
        <>
        <p>{feedbackData}</p>
        </>
      )
 }
 </motion.div>
<br></br><br></br><br></br><br></br>
</div>

  )
}

export default MVP