import { CheckIcon } from '@heroicons/react/20/solid'
import React, { useState, useEffect } from 'react'
import useSWR from 'swr';
import Cookies from 'universal-cookie';
import jwt from "jsonwebtoken";
import { useRouter } from 'next/router'
import { motion } from 'framer-motion';
import { PaddleLoader } from '../components/PaddleLoader';

export default function PricingComponent() {
    const [ user, setUser ] = useState(false);
    const [ uid, setUid ] = useState();
    const [ email, setEmail ] = useState();
    const cookies = new Cookies();
    const router = useRouter()

  useEffect(() => {
    const TokenVerification = async () => {
        const userToken = cookies.get('user');
        if (!userToken) {
            setUser(false)
            console.log("No Token Found.")
        } else {
            setUser(true);
            const emailCookie = cookies.get('email');
            const userIdCookie = cookies.get('uid');
            setEmail(emailCookie);
            setUid(userIdCookie)
        }
    }
    TokenVerification();
}, [])

  const redirectUser = () => {
    if (user == false) {
      router.push('/Login');
    }
  }
  const redirectSignUp = () => {
    if (user == false) {
      router.push('/Login');
    } else router.push('/Dashboard');
  }
  if (user == true && uid != undefined && email != undefined) {
    return (
      <>
      <PaddleLoader/>
      <div
      class="h-full min-h-screen bg-[#050505]"
      >
<div className="flex flex-wrap gap-6 justify-center w-full">
<motion.div 
    whileHover={{
        scale:1.1
    }}
    class="w-1/2 max-w-md p-6 bg-gradient-to-br from-[#1d1d1d] to-[#0c0c0c] shadow-lg dark:bg-gray-800 dark:border-gray-700 rounded-2xl">
            <a href="#">
                <h5 class="mb-2 text-4xl font-bold tracking-tight text-white dark:text-white">Free</h5> 
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Absolutely Free.</h5> 
            </a>
            <br></br>
            <p class="mb-3 font-normal text-white dark:text-gray-400">10 User Feedbacks</p>
            <p class="mb-3 font-normal text-white dark:text-gray-400">1 Project</p>
            <p class="mb-3 font-normal text-white dark:text-gray-400">test</p>
            <p class="mb-3 font-normal text-white dark:text-gray-400">test</p>
            <motion.button whileHover={{scale: 1.1}} onClick={redirectSignUp} class="w-3/4 shadow-md shadow-purple-500/20 bg-gradient-to-br from-purple-600 to-blue-500 duration-500 shadow-xl px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors transform rounded-lg">
       Start Free
       </motion.button>     
    </motion.div>  
    <motion.div 
    initial={{scale:1.17}}
    whileHover={{
        scale:1.3
    }}
    class="w-1/2 max-w-md p-6 bg-gradient-to-br from-[#1d1d1d] to-[#0c0c0c]  shadow-lg rounded-2xl">
            <a href="#">
                <h5 class="mb-2 text-4xl font-bold tracking-tight text-white dark:text-white">Individual</h5> 
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">$3.99</h5>
            </a>
            <br></br>
            <p class="mb-3 font-normal text-white dark:text-gray-400">100 User Feedbacks</p>
            <p class="mb-3 font-normal text-white dark:text-gray-400">1 Project </p>
            <p class="mb-3 font-normal text-white dark:text-gray-400">test</p>
            <p class="mb-3 font-normal text-white dark:text-gray-400">test</p>
            <motion.button onClick={(()=> {
            Paddle.Checkout.open({
              product:49358,
              passthrough:uid,
              email:email,
              success:'/success'
            })
          })}
        whileHover={{scale: 1.1}} class="w-3/4 shadow-md shadow-purple-500/20 bg-gradient-to-br from-purple-600 to-blue-500 duration-500 shadow-xl px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors transform rounded-lg">
        Get Started
       </motion.button>   
    </motion.div> 
    <motion.div 
    whileHover={{
        scale:1.1
    }}
    class="
    max-w-md
    w-1/2 p-6 bg-gradient-to-br from-[#1d1d1d] to-[#0c0c0c]  shadow-lg dark:bg-gray-800 dark:border-gray-700 rounded-2xl">
            <a href="#">
                <h5 class="mb-2 text-4xl font-bold tracking-tight text-white dark:text-white">Enterprise</h5> 
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">$35.99</h5> 
            </a>
            <br></br>
            <p class="mb-3 font-normal text-white dark:text-gray-400">Unlimited User Feedbacks </p>
            <p class="mb-3 font-normal text-white dark:text-gray-400">Unlimited Projects </p>
            <p class="mb-3 font-normal text-white dark:text-gray-400">test</p>
            <p class="mb-3 font-normal text-white dark:text-gray-400">test</p>
            <motion.button onClick={(()=> {
            Paddle.Checkout.open({
              product:49810,
              passthrough:uid,
              email:email,
              success:'/success'
            })
          })}
        whileHover={{scale: 1.1}} class="w-3/4 shadow-md shadow-purple-500/20 bg-gradient-to-br from-purple-600 to-blue-500 duration-500 shadow-xl px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors transform rounded-lg">
        Get Started
       </motion.button>    
    </motion.div> 
</div>
</div>
      <p>{uid}</p>
      </>
    )
  }
  else {
    return (
      <div className="flex flex-wrap gap-6 justify-center w-full">
<motion.div 
    whileHover={{
        scale:1.1
    }}
    class="w-1/2 max-w-md p-6 bg-gradient-to-br from-[#1d1d1d] to-[#0c0c0c] shadow-lg dark:bg-gray-800 dark:border-gray-700 rounded-2xl">
            <a href="#">
                <h5 class="mb-2 text-4xl font-bold tracking-tight text-white dark:text-white">Free</h5> 
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Absolutely Free.</h5> 
            </a>
            <br></br>
            <p class="mb-3 font-normal text-white dark:text-gray-400">10 User Feedbacks</p>
            <p class="mb-3 font-normal text-white dark:text-gray-400">1 Project</p>
            <p class="mb-3 font-normal text-white dark:text-gray-400">test</p>
            <p class="mb-3 font-normal text-white dark:text-gray-400">test</p>
            <motion.button onClick={redirectUser}
            whileHover={{scale: 1.1}} class="w-3/4 shadow-md shadow-purple-500/20 bg-gradient-to-br from-purple-600 to-blue-500 duration-500 shadow-xl px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors transform rounded-lg">
       Start Free
       </motion.button>     
    </motion.div>  
    <motion.div 
    initial={{scale:1.17}}
    whileHover={{
        scale:1.3
    }}
    class="w-1/2 max-w-md p-6 bg-gradient-to-br from-[#1d1d1d] to-[#0c0c0c]  shadow-lg rounded-2xl">
            <a href="#">
                <h5 class="mb-2 text-4xl font-bold tracking-tight text-white dark:text-white">Individual</h5> 
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">$3.99</h5>
            </a>
            <br></br>
            <p class="mb-3 font-normal text-white dark:text-gray-400">100 User Feedbacks</p>
            <p class="mb-3 font-normal text-white dark:text-gray-400">1 Project </p>
            <p class="mb-3 font-normal text-white dark:text-gray-400">test</p>
            <p class="mb-3 font-normal text-white dark:text-gray-400">test</p>
            <motion.button onClick={redirectUser}
        whileHover={{scale: 1.1}} class="w-3/4 shadow-md shadow-purple-500/20 bg-gradient-to-br from-purple-600 to-blue-500 duration-500 shadow-xl px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors transform rounded-lg">
        Get Started
       </motion.button>   
    </motion.div> 
    <motion.div 
    whileHover={{
        scale:1.1
    }}
    class="
    max-w-md
    w-1/2 p-6 bg-gradient-to-br from-[#1d1d1d] to-[#0c0c0c]  shadow-lg dark:bg-gray-800 dark:border-gray-700 rounded-2xl">
            <a href="#">
                <h5 class="mb-2 text-4xl font-bold tracking-tight text-white dark:text-white">Enterprise</h5> 
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">$35.99</h5> 
            </a>
            <br></br>
            <p class="mb-3 font-normal text-white dark:text-gray-400">Unlimited User Feedbacks </p>
            <p class="mb-3 font-normal text-white dark:text-gray-400">Unlimited Projects </p>
            <p class="mb-3 font-normal text-white dark:text-gray-400">test</p>
            <p class="mb-3 font-normal text-white dark:text-gray-400">test</p>
            <motion.button onClick={redirectUser}
        whileHover={{scale: 1.1}} class="w-3/4 shadow-md shadow-purple-500/20 bg-gradient-to-br from-purple-600 to-blue-500 duration-500 shadow-xl px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors transform rounded-lg">
        Get Started
       </motion.button>    
    </motion.div> 
</div>
    )
  }
}
