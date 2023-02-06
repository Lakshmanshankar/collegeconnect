"use client"
import React from 'react'
import Details from './Details'
function page() {
  return (
    <div className=' w-full h-screen flex justify-center items-center'>
      <div className=' w-8/12 h-5/6 bg-slate-500 rounded-lg flex justify-center items-center '>
        <Details />
      </div>
    </div>
  )
}

export default page