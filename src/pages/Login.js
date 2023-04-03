import React, { useState, useEffect } from 'react'
import LoginForm from '../components/LoginForm';
import Navbar from '../components/Navbar';
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
  const cookies = new Cookies();
  const router = useRouter();
  useEffect(() => {
    const token = cookies.get('user');
    if(!token) {
      setIsLoggedIn("Sign In")
    } else {
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
      duration:0.80
    }}
    >
   <Navbar onClickRedirect={redirectDashboard} isLoggedIn={isLoggedIn}/>
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
