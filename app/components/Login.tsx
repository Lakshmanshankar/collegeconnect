"use client";
import React, { useState, useEffect } from 'react'
import { GoogleLogin, GoogleOAuthProvider, CredentialResponse } from '@react-oauth/google'
import jwtDecode from "jwt-decode";


export type userType = {
    name: string,
    email: string,
    picture: string,
    sub: string,
    id: string,
    role: string,
    hd?: string
}

export default function AuthGoogle() {
    const [user, setUser] = useState<userType>();

    useEffect(() => {
        const user = window.localStorage.getItem("user");
        if (user) {
            setUser(JSON.parse(user));
        } else {
            return () => {
                // window.localStorage.removeItem("user");
            }
        }
    }, [])

    useEffect(() => {
        if (user) {
            sendData(user);
        }
        return () => {

        }
    }, [user])

    return (
        <>
            {user &&
                <div aria-details='user-account-banner' className=' flex flex-col items-center p-5 w-fit rounded-2xl shadow-xl '>
                    <img src={user.picture} alt="profile" width={100} height={100} className=" rounded-full my-2" draggable={false} />
                    <h1 className=' w-4/5 poppins font-extrabold sm:text-lg flex justify-center'>{user.name}</h1>
                    <h2 className=' poppins sm:text-lg sm:m-3'>{user.email}</h2>
                    <div className="login-visible sm:m-2 p-1 w-fit" id='login-visible'></div>
                    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}>
                        <GoogleLogin
                            onSuccess={(e: CredentialResponse) => {
                                const res: userType = jwtDecode(e.credential || "");
                                // if (res.hd !== "kprcas.ac.in") {
                                //     alert("Please use your KPRCAS email to login");
                                // } else {
                                // console.log(res);
                                var student: userType = {
                                    name: res.name,
                                    email: res.email,
                                    picture: res.picture,
                                    sub: res.sub,
                                    id: res.email,
                                    role: "student"
                                }
                                setUser(student);
                                window.localStorage.removeItem("user");
                                window.localStorage.setItem("user", JSON.stringify(student));
                                // }
                            }}
                            onError={() => { console.log("Unable to Login User") }}
                            useOneTap
                        />
                    </GoogleOAuthProvider>
                </div>
            }
        </>
    )
}

async function sendData(student: userType) {
    try {
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
        })
        const data = await res.json()
    } catch (error) {
        console.log(error)
    }
}