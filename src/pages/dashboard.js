import React, { useEffect } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'

const Dashboard = () => {
    const router = useRouter()
    const { data: session, status } = useSession()
      if (status === "unauthenticated") {
        // don't return router.push
        router.push('/unauthorized')
        return null;
      }
    
      return (
        <>
          <center>
            <h2>{JSON.stringify(session)}</h2>
          </center>
        </>
      )
}

export default Dashboard