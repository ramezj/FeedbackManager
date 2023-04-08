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
    const setAwful = () => {
        setRating(1)
    }
    const setBad = () => {
        setRating(2)
    } 
    const setNeutral = () => {
        setRating(3)
    }
    const setGood = () => {
        setRating(4)
    }
    const setVeryGood = () => {
        setRating(5)
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
          setFeedbackData(true);
        } else {
          setFeedbackData(false);
        }
        console.log(res);
    } 
    // Light Mode -- > 
    if (props.mode == "Light" || props.mode == "light") {
        return (
            <div> 
            <motion.div class="shadow-xl max-w-sm p-6 bg-white rounded-2xl shadow dark:bg-gray-950">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">Whats on your mind? 🔨 </h5>
        <br></br>
    </a>
<textarea required value={description} onChange={(e) => setDescription(e.target.value)} id="message" rows="4" class="shadow-xl block p-2.5 w-full text-sm text-black bg-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
<br></br>
<div class="space-x-4">
    <motion.button onClick={setAwful} whileHover={{scale: 1.2}} class="text-3xl">
    😕
    </motion.button>
<motion.button onClick={setBad} whileHover={{scale: 1.2}} class="text-3xl ">
 😬
</motion.button>
<motion.button onClick={setNeutral} whileHover={{scale: 1.2}} class="text-3xl">
 😐
</motion.button>
<motion.button onClick={setGood} whileHover={{scale: 1.2}} class="text-3xl">
 😁
</motion.button>
<motion.button onClick={setVeryGood} whileHover={{scale: 1.2}} class="text-3xl">
 🥰
</motion.button>
</div>
<br></br>
<motion.button onClick={sendFeedback} whileHover={{scale: 1.1}} class="shadow-md shadow-purple-500/10 bg-gradient-to-br from-purple-600 to-blue-500 duration-500 shadow-xl px-12 py-3 font-lg tracking-wide text-white capitalize transition-colors transform rounded-lg">
{
    loading 
    ? (
        <>
        <p className='font-bold text-white'>Sending Feedback..</p>
        </>
    )
    : feedbackData ? (
        <>
        <div className="checkmark">
  <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="23px" viewBox='0 0 154 154'>
    <g fill="none" stroke="#22AE73" strokeWidth="2">
      <circle cx="77" cy="77" r="72" style={{ strokeDasharray: "480px, 480px", strokeDashoffset: "960px" }}></circle>
      <circle fill="#22AE73" cx="77" cy="77" r="72" style={{ strokeDasharray: "480px, 480px", strokeDashoffset: "960px" }}></circle>
      <polyline className="st0" stroke="#fff" strokeWidth="10" points="43.5,77.8 63.7,97.9 112.2,49.4 " style={{ strokeDasharray: "100px, 100px", strokeDashoffset: "200px" }} />
    </g>
  </svg>
</div>
        </>
    ) 
    : (
        <>
        <p className='font-bold text-white'>Send Feedback!</p>
        </>
    )
 }
</motion.button>
<br></br>
<br></br>
 </motion.div>
<br></br><br></br><br></br><br></br>
</div>
        )
    }
    return (
    <div> 
            <motion.div class="shadow-xl max-w-sm p-6 bg-zinc-900 rounded-2xl shadow dark:bg-gray-950 ">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Whats on your mind? 🔨 </h5>
        <br></br>
    </a>
<textarea required value={description} onChange={(e) => setDescription(e.target.value)} id="message" rows="4" class="shadow-xl block p-2.5 w-full text-sm text-white bg-zinc-800 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
<br></br>
<div class="space-x-4 ">
    <motion.button onClick={setAwful} whileHover={{scale: 1.2}} class="text-3xl">
    😕
    </motion.button>
<motion.button onClick={setBad} whileHover={{scale: 1.2}} class="text-3xl">
 😬
</motion.button>
<motion.button onClick={setNeutral} whileHover={{scale: 1.2}} class="text-3xl">
 😐
</motion.button>
<motion.button onClick={setGood} whileHover={{scale: 1.2}} class="text-3xl">
 😁
</motion.button>
<motion.button onClick={setVeryGood} whileHover={{scale: 1.2}} class="text-3xl">
 🥰
</motion.button>
</div>
<br></br>
<motion.button onClick={sendFeedback} whileHover={{scale: 1.1}} class="shadow-md shadow-purple-500/10 bg-gradient-to-br from-purple-600 to-blue-500 duration-500 shadow-xl px-12 py-3 font-lg tracking-wide text-white capitalize transition-colors transform rounded-lg">
{
    loading 
    ? (
        <>
        <p className='font-bold text-white'>Sending Feedback..</p>
        </>
    )
    : feedbackData ? (
        <>
        <div className="checkmark">
  <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="23px" viewBox='0 0 154 154'>
    <g fill="none" stroke="#22AE73" strokeWidth="2">
      <circle cx="77" cy="77" r="72" style={{ strokeDasharray: "480px, 480px", strokeDashoffset: "960px" }}></circle>
      <circle fill="#22AE73" cx="77" cy="77" r="72" style={{ strokeDasharray: "480px, 480px", strokeDashoffset: "960px" }}></circle>
      <polyline className="st0" stroke="#fff" strokeWidth="10" points="43.5,77.8 63.7,97.9 112.2,49.4 " style={{ strokeDasharray: "100px, 100px", strokeDashoffset: "200px" }} />
    </g>
  </svg>
</div>
        </>
    ) 
    : (
        <>
        <p className='font-bold text-white'>Send Feedback!</p>
        </>
    )
 }
</motion.button>
<br></br>
<br></br>
 </motion.div>
<br></br><br></br><br></br><br></br>
</div>

  )
}

export default MVP