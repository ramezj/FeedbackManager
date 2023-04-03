import React, { useEffect, useState } from 'react'
import UserInfo from '../components/UserInfo';
import Cookies from 'universal-cookie';
import jwt from "jsonwebtoken";
import { useRouter } from 'next/router'
import NavbarComponent from '../components/Navbar'
import "flowbite";
import  Footer  from '../components/Footer';
import SyntaxHighlighter from "react-syntax-highlighter";
// import { shadesOfPurple } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Documentation() {
  const [ isLoggedIn, setIsLoggedIn ] = useState("");
  const [ link, setLink ] = useState("/Login");
  const [ logged, setLogged ] = useState(false);
  const cookies = new Cookies();
  const router = useRouter();
  const codeString = `import feedbacker from "feedbacker"`
  useEffect(() => {
    const token = cookies.get('user');
    if(!token) {
      setIsLoggedIn("Sign In")
    } else {
      setLogged(true);
      setIsLoggedIn("Dashboard")
      setLink("/Dashboard")
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
        <div class="w-96 rounded-lg">
        <SyntaxHighlighter language="javascript">
            {codeString}        
        </SyntaxHighlighter>
        </div>
    </center>
    </div>
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
