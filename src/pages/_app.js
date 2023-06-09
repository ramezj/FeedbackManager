import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import "flowbite";
import { AnimatePresence } from "framer-motion";
import { motion } from 'framer-motion';
import { useRouter } from "next/router";
import { Analytics } from '@vercel/analytics/react';


export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence mode='wait'>
    <motion.div className="bg-black h-auto" 
    // key={router.route}
    initial={{opacity: 0 }}
    animate={{opacity: 1 }}
    exit={{opacity: 0 }}
    transition={{
      duration:0.20
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
      <Analytics/>
    </motion.div>
    </AnimatePresence>
  )
}
