import React from 'react'

function PostProfile() {
    return (
        <div className=' w-full'>
            <form action="/api/teacher/post" method="post" className=' flex flex-col p-2 m-2 w-full items-center'>
                <h1 aria-label='stduent Profile'>Student Profile Uploading</h1>
                <input className=' m-2 p-2 rounded-lg font-poppins text-lg w-2/3' type="text" name="name" placeholder="name" />
                <input className=' m-2 p-2 rounded-lg font-poppins text-lg w-2/3' type="email" name="email" id="Email" placeholder='enter student email for validation' />
                <input className=' m-2 p-2 rounded-lg font-poppins text-lg w-2/3' type="text" name="phone" id="phone" placeholder='Enter Student Phone Number' />
                <input className=' m-2 p-2 rounded-lg font-poppins text-lg w-2/3' type="number" name="regno" id="regno" />
                <input className=' m-2 p-2 rounded-lg font-poppins text-lg w-2/3' type="text" name="address" id="addresss" placeholder='Enter Student Address' />
                <input className=' m-2 p-2 rounded-lg font-poppins text-lg w-2/3' type="text" name="classname" id="classname" placeholder='enter Student Class Name' />
                <input className=' m-2 p-2 rounded-lg font-poppins text-lg w-2/3' type="text" name="department" id="enter Student Department" />
                <input className=' m-2 p-2 rounded-lg font-poppins text-lg w-2/3' type="submit" value="submit" />
            </form>
        </div>
    )
}

export default PostProfile