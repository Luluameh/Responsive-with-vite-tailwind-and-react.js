import React from 'react'

const Features = () => {
  return (
    <div className='mb-6'>
      <div className='flex gap-32 w-full px-4 pt-3 pb-4'>
        <div className='flex gap-5 bg-[#F4F6F8] rounded-md p-3 w-full lg:w-1/5 gap-8 xl:w-1/5 2xl:w-1/3'>
          <p>To Do</p>
          <span className='bg-black text-white p-2 pb-0 pt-0 rounded-md ml-auto'>3</span>
        </div>
        <div className='flex gap-5 bg-[#F4F6F8]  rounded-md p-3 w-full lg:w-1/4 xl:w-1/5 2xl:w-1/3'>
          <p>In Progress</p>
          <span className='bg-black text-white  p-2 pb-0  pt-0 rounded-md ml-auto'>1</span>
        </div>
        <div className='flex gap-5 bg-[#F4F6F8] rounded-md p-3 w-full lg:w-1/4 xl:w-1/4 2xl:w-1/3'>
          <p>Completed</p>
          <span className='bg-black text-white p-2 pb-0 pt-0 rounded-md ml-auto'>2</span>
        </div>
      </div>
    </div>
  )
}

export default Features;
