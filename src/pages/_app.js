import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps }) {
  
  return (
    <div className="bg-dark">
      <Component {...pageProps} />
    </div>

  )
}
