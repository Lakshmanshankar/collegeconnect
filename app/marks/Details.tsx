"use client"
import axios from 'axios'
import React, { useState, useEffect } from 'react'


function Details() {
    const [email, setEmail] = useState < string > ()
    const [localDetails, setLocalDetails] = useState < any > (null)
    const [total, setTotal] = useState < Array < number >> ([])

    useEffect(() => {
        let res = window.localStorage.getItem("user")
        if (res) {
            const result = getDetails(JSON.parse(res).email)
        }
    }, [])

    async function getDetails(email: string) {
        const url = `/api/student/marks`
        const res = await axios.get(url, {
            params: {
                email
            }
        })
        setLocalDetails(res.data)
        let total: Array<number> = []
        res.data.map((item: any, id: number) => total.push(item.Graphics + item.WebTech + item.IOT + item.STLab))
        setTotal(total)
    }

    return (
        <div className=' flex w-full justify-evenly '>
            {
                localDetails && localDetails.map((item: any, id: number) => <div key={id}>
                    <h1 className='p-2 font-poppins bg-white rounded-md m-5 w-9/12 flex font-extrabold  text-2xl scale'>{item.testname}</h1>
                    <div className='flex flex-col  justify-center items-center w-full'>
                        <p className=' flex justify-between w-full bg-slate-300 p-2 m-2 rounded-md font-poppins text-xl scale'>Graphics Multimedia
                            <span className='font-bold text-green-500 bg-slate-200 px-3 rounded-sm'> {item.Graphics}</span>
                        </p>
                        <p className=' flex justify-between w-full bg-slate-300 p-2 m-2 rounded-md font-poppins text-xl scale'>Web Technology
                            <span className='font-bold text-green-500 bg-slate-200 px-3 rounded-sm'> {item.WebTech}</span>
                        </p>

                        <p className=' flex justify-between w-full bg-slate-300 p-2 m-2 rounded-md font-poppins text-xl scale'>IOT
                            <span className='font-bold text-green-500 bg-slate-200 px-3 rounded-sm'> {item.IOT}</span>
                        </p>

                        <p className=' flex justify-between w-full bg-slate-300 p-2 m-2 rounded-md font-poppins text-xl scale'>ST Lab
                            <span className='font-bold text-green-500 bg-slate-200 px-3 rounded-sm'> {item.STLab}</span>
                        </p>

                        <p className=' flex justify-between w-full bg-slate-300 p-2 m-2 rounded-md font-poppins text-xl scale'>Total
                            <span className='font-bold text-green-500 bg-slate-200 px-3 rounded-sm border-amber-400'> {total[id]}</span>
                        </p>
                        <p className=' flex justify-between w-full bg-slate-300 p-2 m-2 rounded-md font-poppins text-xl scale'>Average
                            <span className='font-bold text-green-500 bg-white px-3 rounded-sm'> {total[id] / 4}</span>
                        </p>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Details