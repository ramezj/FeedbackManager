import React, { useState, useEffect } from 'react'
import useSWR from 'swr';
import Cookies from 'universal-cookie';
import jwt from "jsonwebtoken";


const UserInfo = () => {
    const [ user, setUser ] = useState("loading data");
    const cookies = new Cookies();
    useEffect(() => {
        const TokenVerification = async () => {
            const userToken = cookies.get('user');
            if (!userToken) {
                console.log("User Cookie Not Found")
            } else {
                    const response = await fetch('/api/dashboard', {
                        method:'GET',
                        headers: {
                            "Content-Type": "application/json",
                            credentials: "same-origin",
                            "credentials":"same-origin"
                        },
                    })
                    const res = await response.json();
                    setUser(res);
                    console.log(res);
            }
        }
        TokenVerification();
    }, [])
  return (
    <div>
        <p>{JSON.stringify(user)}</p>
    </div>
  )
}

export default UserInfo