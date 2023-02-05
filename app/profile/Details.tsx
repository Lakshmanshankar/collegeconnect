"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export type profileType = {
  id: string
  address: string
  phone: string
  class: string
  department: string
  regno: string
}

function Details() {
  const [user, setUser] = useState<profileType>()
  const [localDetails, setLocalDetails] = useState<any>(null)

  async function getDetails(email: string) {
    const url = `/api/student/profile/${email}`
    const res = await axios.get(url, {
      params: {
        email
      }
    })
    console.log(res.data)
    setUser(res.data[0])
  }

  useEffect(() => {
    let res = window.localStorage.getItem("user")
    if (res) {
      const result = getDetails(JSON.parse(res).email)
      setLocalUser(setLocalDetails)
    }
  }, [])


  useEffect(() => {
    console.log("user", user)
    return () => {
      console.log("clean up")
    }
  }, [user])

  return (
    <div className=' w-max px-10 py-10 rounded-lg bg-gray-500'>
      <h1 className=' flex justify-center items-center'>Personal Detisl</h1>
      {user && <div>
        <span className='flex justify-center items-center'>
          <img src={`${localDetails.picture}`} alt="" className=' rounded-full' />
        </span>
        <p className='p-2 font-poppins bg-white rounded-md m-5'>Reg No: {user.regno}</p>
        <p className='p-2 font-poppins bg-white rounded-md m-5'>Name : {localDetails.name}</p>
        <p className='p-2 font-poppins bg-white rounded-md m-5'>Phone Number: {user.phone}</p>
        <p className='p-2 font-poppins bg-white rounded-md m-5'>Email: {user.id}</p>
        <p className='p-2 font-poppins bg-white rounded-md m-5'>Address: {user.address}</p>
        <p className='p-2 font-poppins bg-white rounded-md m-5'>role:{localDetails.role}</p>
        <p className='p-2 font-poppins bg-white rounded-md m-5'>Class: {user.class}</p>
        <p className='p-2 font-poppins bg-white rounded-md m-5'>Department: {user.department}</p>

      </div>}
    </div>
  )
}

function setLocalUser(setUser: any) {
  const localDetails = window.localStorage.getItem("user")
  if (!localDetails) {
    window.location.href = "/login"
  } else {
    console.log("local details", localDetails)
    setUser(JSON.parse(localDetails))
  }

}

export default Details