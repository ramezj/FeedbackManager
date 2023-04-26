import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router'
import NavbarComponent from '../components/Navbar'
import "flowbite";
import { motion } from 'framer-motion';
import PricingComponent from '@/components/PricingComponent';

export default function Pricing() {
  const [ isLoggedIn, setIsLoggedIn ] = useState("");
  const [ link, setLink ] = useState("/Login");
  const [ logged, setLogged ] = useState(false);
  const [ username, setUsername ] = useState();
  const cookies = new Cookies();
  const router = useRouter();
  useEffect(() => {
    const token = cookies.get('user');
    if(!token) {
      setIsLoggedIn("Sign In")
    } else {
      const tokenUsername = cookies.get("username");
      setUsername(tokenUsername);
      setLogged(true);
      setIsLoggedIn("Dashboard")
      setLink("/Dashboard")
     }
  }, [])
  const redirectDashboard = () => {
    router.push(link)
  }
  return (
    <>
    <motion.div 
    initial={{opacity: 0 }}
    animate={{opacity: 1 }}
    exit={{opacity: 0 }}
    transition={{
      duration:1
    }}
    class="h-full min-h-screen bg-[#050505]"
    >
      <NavbarComponent onClickRedirect={redirectDashboard} isLoggedIn={isLoggedIn} logged={logged} username={username}/>
      <center>
        <br></br><br></br><br></br>
        <div className="mx-auto max-w-2xl sm:text-center w-4/5">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Simple, <b className="bg-gradient-to-r from-purple-600 to-blue-500 inline-block text-transparent bg-clip-text">No-Tricks</b> Pricing.</h2>
          <p className="mt-6 text-lg leading-8 text-white">
            Interacting with your users shouldnt be a hassle. Simple, no-tricks pricing. Wether youre starting out, or if youre at enterprise-level.
          </p>
          <br></br>
          <br></br>
          <a href="#" class="shadow-lg shadow-blue-500/50 inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800">
            <span class="shadow-md shadow-purple-500/20 bg-gradient-to-r from-purple-600 to-blue-500 text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3 font-bold">Subscription-Based</span> <span class="text-sm font-medium">All Packages are billed <b>Monthly.</b></span> 
            <svg aria-hidden="true" class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a>
        </div>
        <br></br><br></br><br></br>
        <PricingComponent/>
    </center>
    </motion.div>
    </>
  )
}
