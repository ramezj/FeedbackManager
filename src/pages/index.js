import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'universal-cookie';
import NavbarComponent from '../components/Navbar';
import { motion } from 'framer-motion';
import MVP from '../components/MVP';
import GlowAlert from '../components/GlowAlert';
import Footer from '../components/Footer';
import "flowbite"
import { useScroll, animated, } from '@react-spring/web'
import Features from "../components/Features"

export default function Home() {
  const [content, set] = useState(2);
  const scrollIntertia = 70;
  const [ isLoggedIn, setIsLoggedIn ] = useState("");
  const [ link, setLink ] = useState("/Login");
  const [ logged, setLogged ] = useState(false);
  const [ username, setUsername ] = useState();
  const cookies = new Cookies();
  const router = useRouter()
  useEffect(() => {
    const TokenVerification = async () => {
      const token = cookies.get('user');
      if(!token) {
        setIsLoggedIn("Sign In")
      } else {
        const tokenUsername = cookies.get("username");
        setUsername(tokenUsername);
        setLogged(true);
        setIsLoggedIn("Sign Out")
        setLink("/Signout")
       }
    }

     TokenVerification();
  }, [])
  const redirectDashboard = () => {
    router.push(link)
  }
  const redirectUser = () => {
    if(logged) {
      router.push("/Dashboard")
    } else {
      router.push('/Login')
    }
  }
  return (
    <motion.div 
    initial={{opacity: 0 }}
    animate={{opacity: 1 }}
    exit={{opacity: 0 }}
    transition={{
      duration:2
    }}
    >
      <NavbarComponent onClickRedirect={redirectDashboard} isLoggedIn={isLoggedIn} logged={logged} username={username}/>
      <section class="dark:bg-gray-900 dark:text-white">
      <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1 }}
    exit={{opacity: 0}}
    transition={{
      duration:0.80,
      delay:0.25
    }}>
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 ">
    <GlowAlert alert={"Beta"} text={"Feedbacker is currently in Private "} bold={"Beta"}/>
        <motion.h1 
        class="mb-4 text-7xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-8xl dark:text-white">The <b className="bg-gradient-to-r from-purple-600 to-blue-500 inline-block text-transparent bg-clip-text">Next</b> Generation Feedback Manager</motion.h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white ">Managing your users feedback shouldnt be hard, nor expensive. Integrate the Feedbacker Widget Now!</p>
        <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
       <motion.button whileHover={{scale: 1.1}} onClick={redirectUser} class="shadow-md shadow-purple-500/20 bg-gradient-to-br from-purple-600 to-blue-500 duration-500 shadow-xl px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors transform rounded-lg">
        Get Started
       </motion.button>     
            <motion.button whileHover={{scale:1.1}} class="inline-flex justify-center items-center px-7 py-3 text-base duration-300 text-center text-white font-bold rounded-lg dark:bg-transparent duration-500 dark:text-white">
                Learn More →
            </motion.button>  
        </div>
        </div> 
        </motion.div>
        {/* <Features /> */}
        <center>
        <MVP userId={"6437d4b7450b4af65b3207d8"} projectId={"6437d4b7450b4af65b3207d9"} mode="dark"/>
        </center>
        <center>
        </center>
</section>
<Footer />
    </motion.div>
  )
}
