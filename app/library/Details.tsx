"use client"
import axios from 'axios'
import React, { useState, useEffect } from 'react'

type LibBooks = {
    id: string,
    bookname: string,
    issuedOn: string
}

function Details() {
    const [userData, setData] = useState<LibBooks>()

    useEffect(() => {
        let res = window.localStorage.getItem("user")
        if (res) {
            let user = JSON.parse(res)
            getDetails(user.email)
        };
    }, [])

    async function getDetails(email: string) {
        const url = `/api/student/profile/library`
        const res = await axios.get(url, {
            params: {
                email
            }
        })
        let books = (res.data.result.map((item: any) => {
            let dateCalculated = getDays(item.issuedOn)
            item.issuedOn = dateCalculated
            return item
        }));
        console.log(books)
        // let dateCalculated = getDays(res.data.result[0].issuedOn)
        // res.data.result[0].issuedOn = dateCalculated
        // setData(res.data.result[0])
    }
    return (
        <div>
            <div id=' Holder'>
                {
                    userData && <div>
                        <p className=' p-2 m-3 rounded bg-slate-100 font-poppins tex-2xl'>{userData.id}</p>
                        <p className=' p-2 m-3 rounded bg-slate-100 font-poppins tex-2xl'>{userData.bookname}</p>
                        <p className=' p-2 m-3 rounded bg-slate-100 font-poppins tex-2xl'>{14 - Number(userData.issuedOn)} Remaing</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default Details

function getDays(date: string): string {
    let now = new Date().getTime()
    let issued = Number(date)
    return (Math.floor((now - issued) / (1000 * 60 * 60 * 24))).toString()
}


// Path: app/library/Profile.tsx

