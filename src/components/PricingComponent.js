import { CheckIcon } from '@heroicons/react/20/solid'
import React, { useState, useEffect } from 'react'
import useSWR from 'swr';
import Cookies from 'universal-cookie';
import jwt from "jsonwebtoken";
import { useRouter } from 'next/router'
import { motion } from 'framer-motion';

const includedFeatures = [
  'Unlimited Feedbacks',
  'Unlimited Projects',
  'Easy Integration',
  'Customize your widget',
]

export default function PricingComponent() {
    const [ user, setUser ] = useState(false);
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
        }
    }
    TokenVerification();
}, [])

  const redirectUser = () => {
    if (user == false) {
      router.push('/Login');
    } else {
      router.push('https://lunix.lemonsqueezy.com/checkout/buy/a1971243-711f-4546-9ac3-24754c09392c')
    }
  }
  return (
    // <div className="py-24 sm:py-32 shadow shadow-lg">
    //   <div className="mx-auto max-w-7xl px-6 lg:px-8">
    //     <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-indigo-600 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
    //       <div className="p-8 sm:p-10 lg:flex-auto">
    //         <h3 className="text-2xl font-bold tracking-tight text-white">Get started now.</h3>
    //         <p className="mt-6 text-base leading-7 text-gray-600">
    //           Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis
    //           repellendus etur quidem assumenda.
    //         </p>
    //         <div className="mt-10 flex items-center gap-x-4">
    //           <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
    //           <div className="h-px flex-auto bg-gray-100" />
    //         </div>
    //         <ul
    //           role="list"
    //           className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-white sm:grid-cols-2 sm:gap-6"
    //         >
    //           {includedFeatures.map((feature) => (
    //             <li key={feature} className="flex gap-x-3">
    //               <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
    //               {feature}
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //       <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
    //         <div className="rounded-2xl bg-zinc-900 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
    //           <div className="mx-auto max-w-xs px-8">
    //             <p className="text-base font-semibold text-white">Monthly Subscription</p>
    //             <p className="mt-6 flex items-baseline justify-center gap-x-2">
    //               <span className="text-5xl font-bold tracking-tight text-white">$3,99</span>
    //               <span className="text-sm font-semibold leading-6 tracking-wide text-white">USD</span>
    //             </p>
    //             <button
    //             onClick={redirectUser}
    //               className="mt-10 block w-full rounded-md shadow-md shadow-purple-500/20 bg-gradient-to-br from-purple-600 to-blue-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //             >
    //               Get Access
    //             </button>
    //             <p className="mt-6 text-xs leading-5 text-gray-100">
    //               Invoices and receipts available for easy company reimbursement
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
<div>
  <br></br>
<div className="flex flex-wrap gap-6 justify-center w-full">
<motion.div 
    whileHover={{
        scale:1.1
    }}
    class="w-1/2 max-w-md p-6 bg-zinc-900 shadow-lg dark:bg-gray-800 dark:border-gray-700 rounded-2xl">
            <a href="#">
                <h5 class="mb-2 text-4xl font-bold tracking-tight text-white dark:text-white">Free</h5> 
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Absolutely Free.</h5> 
            </a>
            <br></br>
            <p class="mb-3 font-normal text-white dark:text-gray-400">10 User Feedbacks</p>
            <p class="mb-3 font-normal text-white dark:text-gray-400">1 Project</p>
            <p class="mb-3 font-normal text-white dark:text-gray-400">test</p>
            <p class="mb-3 font-normal text-white dark:text-gray-400">test</p>
            <motion.button whileHover={{scale: 1.1}} onClick={redirectUser} class="w-3/4 shadow-md shadow-purple-500/20 bg-gradient-to-br from-purple-600 to-blue-500 duration-500 shadow-xl px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors transform rounded-lg">
        Get Started
       </motion.button>    
            
    </motion.div>  
    <motion.div 
    initial={{scale:1.17}}
    whileHover={{
        scale:1.3
    }}
    class="w-1/2 max-w-md p-6 bg-zinc-900 shadow-lg rounded-2xl">
            <a href="#">
                <h5 class="mb-2 text-4xl font-bold tracking-tight text-white dark:text-white">Individual</h5> 
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">$3.99</h5>
            </a>
            <br></br>
            <p class="mb-3 font-normal text-white dark:text-gray-400">100 User Feedbacks</p>
            <p class="mb-3 font-normal text-white dark:text-gray-400">1 Project </p>
            <p class="mb-3 font-normal text-white dark:text-gray-400">test</p>
            <p class="mb-3 font-normal text-white dark:text-gray-400">test</p>
            <motion.button whileHover={{scale: 1.1}} onClick={redirectUser} class="w-3/4 shadow-md shadow-purple-500/20 bg-gradient-to-br from-purple-600 to-blue-500 duration-500 shadow-xl px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors transform rounded-lg">
       Start Free
       </motion.button>    
            
    </motion.div> 
    <motion.div 
    whileHover={{
        scale:1.1
    }}
    class="
    max-w-md
    w-1/2 p-6 bg-zinc-900 shadow-lg dark:bg-gray-800 dark:border-gray-700 rounded-2xl">
            <a href="#">
                <h5 class="mb-2 text-4xl font-bold tracking-tight text-white dark:text-white">Enterprise</h5> 
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">$35.99</h5> 
            </a>
            <br></br>
            <p class="mb-3 font-normal text-white dark:text-gray-400">Unlimited User Feedbacks </p>
            <p class="mb-3 font-normal text-white dark:text-gray-400">Unlimited Projects </p>
            <p class="mb-3 font-normal text-white dark:text-gray-400">test</p>
            <p class="mb-3 font-normal text-white dark:text-gray-400">test</p>
            <motion.button whileHover={{scale: 1.1}} onClick={redirectUser} class="w-3/4 shadow-md shadow-purple-500/20 bg-gradient-to-br from-purple-600 to-blue-500 duration-500 shadow-xl px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors transform rounded-lg">
        Get Started
       </motion.button>    
            
    </motion.div> 
</div>
</div>
  )
}
