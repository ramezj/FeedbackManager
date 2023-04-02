import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'universal-cookie';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import MVP from '../components/MVP';
import GlowAlert from '../components/GlowAlert';
import Footer from '../components/Footer';


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
    <GlowAlert />
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">Best realtime feedback & website analytics service.</h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
       <motion.button whileHover={{scale: 1.1}} onClick={redirectUser} class="bg-blue-700 duration-500 shadow-xl px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors transform rounded-lg">
        Get Started
       </motion.button>     
            <motion.button whileHover={{scale:1.1}} class="inline-flex justify-center items-center px-7 py-3 text-base duration-300 text-center text-white font-bold rounded-lg dark:bg-transparent duration-500 dark:text-white">
                Learn More →
            </motion.button>  
        </div>
        </div> 
        <center>
        <MVP userId={"64242d7de859353bfa82d4fa"}/>
        </center>
</section>
<Footer />
    </div>
  )
}
