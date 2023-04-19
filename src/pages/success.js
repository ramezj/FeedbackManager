import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";

export default function success() {
  return (
    <motion.div 
    initial={{opacity: 0 }}
    animate={{opacity: 1 }}
    exit={{opacity: 0 }}
    transition={{
      duration:1
    }}
    className='bg-black'
    >
    <center>
      <motion.h1>Thanks for subscribing!
        Redirecting you in a minute.
      </motion.h1>
    </center>
    </motion.div>
  )
}
