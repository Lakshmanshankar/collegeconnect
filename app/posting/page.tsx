import React from 'react'
import PostProfile from './PostProfile'
import MarksUploading from './Marks'
function page() {
  return (
    <div className=' w-full h-screen flex justify-center items-center '>
      <div className='w-1/2 h-1/2 flex justify-center items-center'>
        <PostProfile />
      </div>
      <div className='w-1/2 h-1/2 flex justify-center items-center'>
        <MarksUploading />
      </div>
    </div>
  )
}

export default page