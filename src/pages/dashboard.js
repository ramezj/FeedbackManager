import React, { useEffect } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'

const Dashboard = () => {
    const router = useRouter()
    const { data: session, status } = useSession()
      if (status === "unauthenticated") {
        router.push('/unauthorized')
      }
    
      return (
        <>
          <h1>Protected Page</h1>
          <p>You can view this page because you are signed in.</p>
        </>
      )
}

export default Dashboard