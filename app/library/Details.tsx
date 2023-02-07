"use client"
import axios from 'axios'
import React, { useState, useEffect } from 'react'

type LibBooks = {
    id: string,
    bookname: string,
    issuedOn: string
}

function Details() {
    const [userData, setData] = useState<LibBooks[]>()

    useEffect(() => {
        let res = window.localStorage.getItem("user")
        if (res) {
            let user = JSON.parse(res)
            getDetails(user.email)
        };
    }, [])

    async function getDetails(email: string) {
        const url = `/api/student/library`
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
        setData(books)
        // let dateCalculated = getDays(res.data.result[0].issuedOn)
        // res.data.result[0].issuedOn = dateCalculated
        // setData(res.data.result[0])
    }
    return (
        <div>
            <div className='Holder flex bg-gray-400'>
                {
                    userData && userData.map((item: LibBooks) => (
                        <div key={"Jade" + item.bookname + "Hello"} className=' flex flex-col p-3 m-4 rounded-lg bg-gray-600'>
                            <div className=' p-5 m-4 rounded-lg bg-gray-400' key={item.bookname}>Book Name:
                                <span className='font-bold' key={item.issuedOn}> {item.bookname}</span>
                            </div>
                            <div className=' p-5 m-4 rounded-lg bg-gray-400' key={item.bookname + "issue"}>Issued On:
                                <span className='font-bold' key={item.issuedOn + "issue"}> {item.issuedOn} Days Ago</span>
                            </div>
                        </div>
                    )
                    )
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