import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'universal-cookie';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';


export default function Home() {
  const [ isLoggedIn, setIsLoggedIn ] = useState("");
  const [ link, setLink ] = useState("/Login");
  const [ logged, setLogged ] = useState(false);
  const cookies = new Cookies();
  const router = useRouter()
  const redirectUser = () => {
    router.push('/Login')
  }
  useEffect(() => {
    const token = cookies.get('user');
    if(!token) {
      setIsLoggedIn("Sign In")
    } else {
      setIsLoggedIn("Dashboard");
      setLogged(true);
      setLink("/Dashboard")
    }
  }, [])
  const redirectDashboard = () => {
    router.push(link)
  }
  return (
    <div>
      <Navbar onClickRedirect={redirectDashboard} isLoggedIn={isLoggedIn} logged={logged}/>
<br></br><br></br><br></br>
      <section class="dark:bg-gray-900 dark:text-white">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 ">
    <a href="#" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800">
            <span class="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span class="text-sm font-medium">Feedbacker was launched! See Whats <b>NEW</b></span> 
            <svg aria-hidden="true" class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a>
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">Best realtime feedback & website analytics service.</h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
       <motion.button whileHover={{scale: 1.1}} onClick={redirectUser} class="bg-blue-700 duration-500 shadow-xl px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors transform rounded-lg">
        Get Started
       </motion.button>     
            <a href="#" class="shadow-xl inline-flex justify-center items-center px-7 py-3 text-base font-medium duration-300 text-center text-black rounded-lg bg-white dark:bg-white hover:bg-slate-400 duration-500 dark:text-black">
                <svg class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                Pricing
            </a>  
        </div>
        </div> 
</section>

    </div>
  )
}
