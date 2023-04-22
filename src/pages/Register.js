import React, { useEffect, useState } from 'react'
import UserInfo from '../components/UserInfo';
import Cookies from 'universal-cookie';
import jwt from "jsonwebtoken";
import { useRouter } from 'next/router'
import NavbarComponent from '../components/Navbar'
import "flowbite";
import  Footer  from '../components/Footer';
import { motion } from 'framer-motion';
import RegisterForm from "../components/RegisterForm";

export default function Register() {
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
    class="h-full min-h-screen bg-[#050505]"
    >
      <NavbarComponent logged={logged} username={username}/>
      <center>
        <br></br><br></br>
      <RegisterForm />
    </center>
    <Footer/>
    </motion.div>
  )
}
