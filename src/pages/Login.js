import React, { useState, useEffect } from 'react'
import LoginForm from '../components/LoginForm';
import Navbar from '../components/Navbar';
import jwt from "jsonwebtoken";
import { useRouter } from 'next/router'
import Cookies from 'universal-cookie';

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
    <>
   <Navbar onClickRedirect={redirectDashboard} isLoggedIn={isLoggedIn} logged={logged}/>
    <center>
      <LoginForm />
    </center>
    </>
  )
}
