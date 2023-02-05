"use client"
import axios from 'axios'
import React, { useState, useEffect } from 'react'


function Details() {
    const [email, setEmail] = useState<string>()
    const [localDetails, setLocalDetails] = useState<any>(null)


    useEffect(() => {
        let res = window.localStorage.getItem("user")
        if (res) {
            const result = getDetails(JSON.parse(res).email)
        }
    }, [])

    async function getDetails(email: string) {
        const url = `/api/student/profile/marks`
        const res = await axios.get(url, {
            params: {
                email
            }
        })
        setLocalDetails(res.data)
    }

    return (
        <div>
            {
                localDetails && localDetails.map((item: any, id: number) => <div key={id}>
                    <p className='p-2 font-poppins bg-white rounded-md m-5'>TestName: {item.testname}</p>
                    <p className='p-2 font-poppins bg-white rounded-md m-5'>Graphics: {item.Graphics}</p>
                    <p className='p-2 font-poppins bg-white rounded-md m-5'>WebTech: {item.WebTech}</p>
                    <p className='p-2 font-poppins bg-white rounded-md m-5'>IOT: {item.IOT}</p>
                    <p className='p-2 font-poppins bg-white rounded-md m-5'>STLab: {item.STLab}</p>
                    <p className='p-2 font-poppins bg-white rounded-md m-5'>Project: {item.Project}</p>
                </div>)
            }
        </div>
    )
}

export default Details