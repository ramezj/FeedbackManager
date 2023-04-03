import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import "flowbite";
import { AnimatePresence } from "framer-motion";
import { motion } from 'framer-motion';
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence mode='wait'>
    <motion.div className="bg-black" 
    initial="initialState"
    animate="animateState"
    exit="exitState"
    transition={{
      duration:0.75
    }}
    variants={{
      initialState: {
        opacity:0
      },
      animateState: {
        opacity:1
      },
      exitState:{
      }
    }}
    >
      <Component {...pageProps} />
    </motion.div>
    </AnimatePresence>
  )
}
