import React from 'react'

function MarksUploading() {
    return (
        <div className=' w-full'>
            <form action="/api/student/profile/library" method="post" className=' flex flex-col p-2 m-2 w-full items-center'>
                <h1 aria-label='stduent Profile'>Student Library Details</h1>
                <input type="email" className=' p-2 m-2 font-poppins text-xl'  name="email" id="email" placeholder=' enter student email' />
                <input type="text"  className=' p-2 m-2 font-poppins text-xl' name="name" id="email" placeholder=' Enter Book name' />
                <input className=' m-2 p-2 rounded-lg font-poppins text-lg w-2/3' type="submit" value="submit" />
            </form>
        </div>
    )
}

export default MarksUploading;

