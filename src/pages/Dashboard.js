import React, { useEffect, useState } from 'react'
import UserInfo from '../components/UserInfo';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router'
import NavbarComponent from '../components/Navbar'
import "flowbite";
import  Footer  from '../components/Footer';
import { motion } from 'framer-motion';
import UpgradeSubscription from "../components/UpgradeSubscription";

export default function Dashboard() {
  const [ isLoggedIn, setIsLoggedIn ] = useState("");
  const [ link, setLink ] = useState("/Login");
  const [ logged, setLogged ] = useState(false);
  const [ username, setUsername ] = useState();
  const [ uid, setUid ] = useState();
  const cookies = new Cookies();
  const router = useRouter();
  useEffect(() => {
    const TokenVerification = async () => {
      const token = cookies.get('user');
      if(!token) {
        setIsLoggedIn("Sign In")
      } else {
        const tokenUsername = cookies.get("username");
        const uidCookie = cookies.get("uid")
        setUid(uidCookie);
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
    class="h-full min-h-screen bg-[#050505]"
    >
      <NavbarComponent onClickRedirect={redirectDashboard} isLoggedIn={isLoggedIn} logged={logged} username={username}/>
      <center>
        <br></br>
        <UpgradeSubscription />
        <br></br><br></br>
        <div>
          <motion.h1 class="text-3xl font-medium">👋 Hello, Welcome <b>{username}</b></motion.h1>
        </div>
        <br></br>
      <UserInfo />
    </center>
    </motion.div>
    <Footer/>
    </>
  )
}
