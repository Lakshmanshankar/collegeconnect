import React from 'react'
import PostProfile from './PostProfile'
import MarksUploading from './Marks'
import Library from './Library'
function page() {
  return (
    <div className=' w-full h-screen flex items-center '>
      <div className='w-1/2 h-1/2 flex justify-center items-center'>
        <PostProfile />
      </div>
      <div className='w-1/2 h-1/2 flex justify-center items-center'>
        <MarksUploading />
      </div>

      <div className='w-1/2 h-1/2 flex justify-center items-center'>
        <Library />
      </div>
    </div>
  )
}

export default page