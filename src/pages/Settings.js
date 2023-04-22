import React, { useEffect, useState } from 'react'
import UserInfo from '../components/UserInfo';
import Cookies from 'universal-cookie';
import jwt from "jsonwebtoken";
import { useRouter } from 'next/router'
import NavbarComponent from '../components/Navbar'
import "flowbite";
import  Footer  from '../components/Footer';
import { motion } from 'framer-motion';
import SettingsComponent from "../components/SettingsComponent";

export default function Settings() {
  const [ isLoggedIn, setIsLoggedIn ] = useState("");
  const [ link, setLink ] = useState("/Login");
  const [ logged, setLogged ] = useState(false);
  const [ username, setUsername ] = useState();
  const cookies = new Cookies();
  const router = useRouter();
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
  return (
    <>
    <motion.div 
    initial={{opacity: 0 }}
    animate={{opacity: 1 }}
    exit={{opacity: 0 }}
    transition={{
      duration:1
    }}
    class="h-full min-h-screen bg-black"
    >
      <NavbarComponent onClickRedirect={redirectDashboard} isLoggedIn={isLoggedIn} logged={logged} username={username}/>
      <center>
        <br></br><br></br>
        <button class="text-white bg-zinc-900 shadow shadow-xl font-semibold focus:ring-4 focus:outline-none font-xl rounded-lg text-2xl sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:focus:ring-blue-800">User Settings</button>
        <br></br><br></br>
        <SettingsComponent />
    </center>
    </motion.div>
    <br></br><br></br><br></br>
    <br></br><br></br><br></br>
    <br></br><br></br><br></br>
    <br></br><br></br><br></br>
    <br></br><br></br><br></br>
    <br></br><br></br><br></br>
    <Footer/>
    </>
  )
}
