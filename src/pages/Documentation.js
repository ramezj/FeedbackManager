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
  const codeString1 = `npm i feedbacker`
  const codeString2 = `yarn add feedbacker`
  useEffect(() => {
    const TokenVerification = async () => {
      const token = cookies.get('user');
      if(!token) {
        setUsername("Sign In")
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
      duration:0.80
    }}
    >
      <NavbarComponent onClickRedirect={redirectDashboard} isLoggedIn={isLoggedIn} logged={logged} username={username}/>
      <center>
        <br></br><br></br><br></br>
    <div class="w-96">
    <SyntaxHighlighter language="javascript">
            {codeString1}    
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
