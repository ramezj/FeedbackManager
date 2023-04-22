import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";

export default function success() {
  return (
    <div className="dark bg-black dark:bg-black">
    <motion.div 
    initial={{opacity: 0 }}
    animate={{opacity: 1 }}
    exit={{opacity: 0 }}
    transition={{
      duration:1
    }}
    class="h-full min-h-screen bg-black"
    >
    <center>
      <br></br><br></br>
      <br></br><br></br>
      <br></br><br></br>
      <br></br><br></br>
      <br></br><br></br>
      <br></br><br></br>
      <br></br><br></br>
      <motion.div className="checkmark">
  <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="60px" viewBox='0 0 154 154'>
    <g fill="none" stroke="#22AE73" strokeWidth="2">
      <circle cx="77" cy="77" r="72" style={{ strokeDasharray: "480px, 480px", strokeDashoffset: "960px" }}></circle>
      <circle fill="#22AE73" cx="77" cy="77" r="72" style={{ strokeDasharray: "480px, 480px", strokeDashoffset: "960px" }}></circle>
      <polyline className="st0" stroke="#fff" strokeWidth="10" points="43.5,77.8 63.7,97.9 112.2,49.4 " style={{ strokeDasharray: "100px, 100px", strokeDashoffset: "200px" }} />
    </g>
  </svg>
  <br></br>
  <motion.h1 className="text-3xl">Payment <b className="bg-gradient-to-r from-purple-600 to-blue-500 inline-block text-transparent bg-clip-text">Successfull,</b> Redirecting you Soon..</motion.h1>
</motion.div>
    </center>
    <br></br><br></br>
      <br></br><br></br>
      <br></br><br></br>
      <br></br><br></br>
      <br></br><br></br>
      <br></br><br></br>
      <br></br><br></br>
      <br></br><br></br>
      <br></br><br></br>
      <br></br><br></br>
      <br></br><br></br>
      <br></br><br></br>
    </motion.div>
    </div>
  )
}
