import React from 'react'

function MarksUploading() {
    return (
        <div className=' w-full'>
            <form action="/api/student/profile/marks" method="post" className=' flex flex-col p-2 m-2 w-full items-center'>
                <h1 aria-label='stduent Profile'>Student Marks Uploading</h1>
                <input className=' m-2 p-2 rounded-lg font-poppins text-lg w-2/3' type="text" name="email" placeholder="Enter Student Email" />
                <input className=' m-2 p-2 rounded-lg font-poppins text-lg w-2/3' type="text" name="testname" placeholder="Enter Test Name (CIA-I,CIA-2,Model)" />
                <input className=' m-2 p-2 rounded-lg font-poppins text-lg w-2/3' type="text" name="graphics" placeholder="Enter Graphics Mul Marks" />
                <input className=' m-2 p-2 rounded-lg font-poppins text-lg w-2/3' type="text" name="iot" placeholder="Enter IOT Marks" />
                <input className=' m-2 p-2 rounded-lg font-poppins text-lg w-2/3' type="text" name="webtech" placeholder="Enter Web Tech Marks" />
                <input className=' m-2 p-2 rounded-lg font-poppins text-lg w-2/3' type="text" name="project" placeholder="Enter Project Marks[optional]" />
                <input className=' m-2 p-2 rounded-lg font-poppins text-lg w-2/3' type="text" name="st" placeholder="Enter ST Marks[ optional]" />
                <input className=' m-2 p-2 rounded-lg font-poppins text-lg w-2/3' type="submit" value="submit" />
            </form>
        </div>
    )
}

export default MarksUploading;

