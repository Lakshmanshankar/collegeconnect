import Details from "./Details"
import React from 'react'

import MarksUploading from './Marks'
import Library from './Library'
// import Attendance from './Attendance'
function page() {
    return (
        <div className=' w-full h-screen flex items-center '>
            <div className='w-1/2 h-1/2 flex justify-center items-center'>
                <Details />
            </div>



            <div className='w-1/2 h-1/2 flex justify-center items-center'>
                <Library />
            </div>

            <div className='w-1/2 h-1/2 flex justify-center items-center'>
                <MarksUploading />
            </div>


            {/* <div className='w-1/2 h-1/2 flex justify-center items-center'>
                <Attendance />
            </div> */}
        </div>
    )
}

export default page