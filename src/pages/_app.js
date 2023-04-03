import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import "flowbite";

export default function App({ Component, pageProps }) {
  
  return (
    <div className="bg-black">
      <Component {...pageProps} />
    </div>

  )
}
