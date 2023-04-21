import React, { useState, useEffect } from 'react'
import LoginForm from '../components/LoginForm';
import NavbarComponent from '../components/Navbar';
import jwt from "jsonwebtoken";
import { useRouter } from 'next/router'
import Cookies from 'universal-cookie';
import { AnimatePresence } from "framer-motion";
import { motion } from 'framer-motion';
import Footer from "../components/Footer";

export default function Login() {
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
      setIsLoggedIn("Sign Out")
      setLink("/Signout")
     }
  }, [])
  const redirectDashboard = () => {
    router.push(link)
  }
  return (
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
      <LoginForm />
    </center>
    <br></br><br></br><br></br>
    <br></br><br></br><br></br>
    <Footer/>
    </motion.div>
  )
}
