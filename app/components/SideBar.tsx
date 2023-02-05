// Global Side Bar
"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
export default function SideBar() {
    const [navbar, setNav] = useState<boolean>(false);

    useEffect(() => {
        let div = document.getElementById("hidableNav")
        if (div) {
            if (navbar) {
                div.classList.toggle("show", true);
                div.classList.toggle("hide", false);
                div.style.animation = "slide-in-reverse 0.5s ease-in-out";
                return;
            } else {
                div.classList.toggle("show", false);
                div.classList.toggle("hide", true);
                div.style.animation = "slide-out 0.5s ease-in-out";
                return
            }

        }


    }, [navbar])

    return (
        <div className=' w-2/12 left-0 z-10 fixed'>
            <div className='w-9/12 px-2 h-screen flex flex-col absolute left-0 top-14 bg-black items-center' id='hidableNav'>
                <ul className=' flex flex-col mt-24 h-3/6 justify-evenly w-full'>
                    <li className=' rounded-lg py-2 bg-slate-50 grid place-content-center w-full'> <Link href={`/`}>Home</Link> </li>
                    <li className=' rounded-lg py-2 bg-slate-50 grid place-content-center w-full'> <Link href={`/profile`}>Profile</Link> </li>
                    <li className=' rounded-lg py-2 bg-slate-50 grid place-content-center w-full'> <Link href={`/marks`}>Marks</Link> </li>
                    <li className=' rounded-lg py-2 bg-slate-50 grid place-content-center w-full'> <Link href={`/attendance`}>Attendance</Link> </li>
                    <li className=' rounded-lg py-2 bg-slate-50 grid place-content-center w-full'> <Link href={`/library`}>Library</Link> </li>
                </ul>
            </div>
            <button id="sideLaunch" className=' absolute top-72 mt-5 rotate-90 bg-lime-500' onClick={() => setNav(!navbar)}>Side</button>
        </div>

    )
}
