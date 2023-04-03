import React, { useEffect, useState } from 'react'
import UserInfo from '../components/UserInfo';
import Cookies from 'universal-cookie';
import jwt from "jsonwebtoken";
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar'

export default function Signout() {
  const [ isLoggedIn, setIsLoggedIn ] = useState("");
  const [ link, setLink ] = useState("/Login");
  const cookies = new Cookies();
  const router = useRouter();
  useEffect(() => {
    const token = cookies.get('user');
    if(!token) {
      router.push('/Login')
    } else {
      cookies.remove('user');
      router.push('/')
     }
  }, [])
  return (
    <>
    </>
  )
}
