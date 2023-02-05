"use client";
import React, { useState, useEffect } from 'react'
import AuthGoogle from './AuthLogin'

function Navbar() {
  let [profile, setProfile] = useState<boolean>(false);
  let [mobileView, setMobileView] = useState<boolean>(true);
  useEffect(() => {
    let div = document.getElementById("account-banner");
    if (div) {
      if (profile) {
        div.classList.toggle("show", true);
        div.classList.toggle("hide", false);
        div.style.animation = "slide-in 0.5s ease-in-out";
        return;
      } else {
        div.classList.toggle("show", false);
        div.classList.toggle("hide", true);
        div.style.animation = "slide-out 0.5s ease-in-out";
        return
      }
    }
  }, [profile]);

  
  useEffect(() => {
    let div = document.getElementById("mobilenav");
    if (div) {
      if (mobileView) {
        div.classList.toggle("show", true);
        div.classList.toggle("hide", false);
        div.style.animation = "slide-in 0.5s ease-in-out";
        return;
      } else {
        div.classList.toggle("show", false);
        div.classList.toggle("hide", true);
        div.style.animation = "slide-out 0.5s ease-in-out";
        return
      }
    }
  }, [mobileView]);

  return (
    <nav className=' w-full flex sm:h-14 p-2 sm:justify-between fixed bg-red-200 z-30'>
      <div className="logo sm:flex hidden  mt-2">CollegeConnect</div>
      {/* search bar */}
      <div className="gloabl-search sm:w-6/12 flex justify-center h-10">
        <input type="text" placeholder="Search" className=' sm:w-8/12 w-36 py-2 bg-gray-400 rounded-md font-poppins text-gray-50 font-semibold px-2 absolute sm:relative left-5 ' />
      </div>

      {/*  Theme,Notification and profile Holder */}
      <button className=' sm:hidden sm:pointer-events-none h-min absolute right-0' onClick={() => { if (window.innerWidth < 750) { setMobileView(!mobileView) } }}> Menu</button>
      <div className="right-refs flex  flex-col sm:flex-row mt-12  sm:mt-0" id='mobilenav'>
        <button onClick={() => {
        }}> Theme</button>

        <button onClick={() => {
        }}> Notification</button>

        <div className="w-full flex flex-col mt-0">
          <button onClick={() => {
            setProfile(!profile)
          }} className=' mb-1'>Show User</button>

          <div className="wrapper w-min" id='account-banner' >
            <AuthGoogle />
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar