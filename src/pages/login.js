import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

const Login = () => {
    const { data: session } = useSession()
  if (session) {
    console.log(session);
    return (
        <div>
          Hello
            <p>Welcome, {session.user.name}</p>
            <img src={session.user.image}></img>
            <br/>
            <button onClick={() => signOut()}>Sign Out</button>
        </div>
    )
  } else {
    return (
        <div>
            <p>You are not signed in..</p>
            <button onClick={() => signIn()}>Sign In</button>
        </div>
    )
  }
}

export default Login