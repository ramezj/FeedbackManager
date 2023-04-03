import React, { useEffect, useState } from 'react'
import UserInfo from '../components/UserInfo';
import Cookies from 'universal-cookie';
import jwt from "jsonwebtoken";
import { useRouter } from 'next/router'
import NavbarComponent from '../components/Navbar'
import "flowbite";

export default function Dashboard() {
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
    <div class="bg-black dark:bg-black">
      <NavbarComponent onClickRedirect={redirectDashboard} isLoggedIn={isLoggedIn} logged={logged}/>
      <center>
        <br></br><br></br><br></br>
      <UserInfo />
    </center>
    </div>
    </>
  )
}
