import React, { useEffect, useState } from 'react'
import UserInfo from '../components/UserInfo';
import Cookies from 'universal-cookie';
import jwt from "jsonwebtoken";
import { useRouter } from 'next/router'
import NavbarComponent from '../components/Navbar'
import "flowbite";
import  Footer  from '../components/Footer';
import SyntaxHighlighter from "react-syntax-highlighter";
import { motion } from "framer-motion";
// import { shadesOfPurple } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Documentation() {
  const [ isLoggedIn, setIsLoggedIn ] = useState("");
  const [ link, setLink ] = useState("/Login");
  const [ logged, setLogged ] = useState(false);
  const [ username, setUsername ] = useState("");
  const cookies = new Cookies();
  const router = useRouter();
  const codeString = `import feedbacker from "feedbacker"`
  useEffect(() => {
    const TokenVerification = async () => {
      const token = cookies.get('user');
      if(!token) {
        setUsername("Sign In")
        setIsLoggedIn("Sign In")
      } else {
        try {
          const response = await fetch('/api/dashboard', {
            method:'GET',
            headers: {
                "Content-Type": "application/json",
                credentials: "same-origin",
                "credentials":"same-origin"
            },
        })
        const res = await response.json();
        setUsername(res.user.username)
        if(res.user == null || res.user == "null") {
            console.log("User token is null, redirecting.")
            return router.push("/Login")
        }
        } catch (error) {
          
        }
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
      duration:0.80
    }}
    >
      <NavbarComponent onClickRedirect={redirectDashboard} isLoggedIn={isLoggedIn} logged={logged} username={username}/>
      <center>
        <br></br><br></br><br></br>
        <div class="w-96 rounded-lg">
        <SyntaxHighlighter language="javascript">
            {codeString}        
        </SyntaxHighlighter>
        </div>
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
