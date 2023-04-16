import React from 'react'

const Features = () => {
  return (
    <div className='mb-6 ml-16 mr-16'>
      <div className='flex gap-20 l:gap-10 xl:gap-24 xxl:gap-24 w-full px-4 pt-3 pb-4'>
        <div className='flex gap-5 bg-[#F4F6F8] rounded-md p-3 w-full l:w-72  xl:w-80 xxl:w-[30.00rem]'>
          <p>To Do</p>
          <span className='bg-black text-white p-2 pb-0 pt-0 rounded-md ml-auto'>3</span>
        </div>
        <div className='flex gap-5 bg-[#F4F6F8]  rounded-md p-3 w-full l:w-72 xl:w-80 xxl:w-[30.00rem]'>
          <p>In Progress</p>
          <span className='bg-black text-white  p-2 pb-0  pt-0 rounded-md ml-auto'>1</span>
        </div>
        <div className='flex gap-5 bg-[#F4F6F8] rounded-md p-3 w-full l:w-72 xl:w-80 xxl:w-[30.00rem]'>
          <p>Completed</p>
          <span className='bg-black text-white p-2 pb-0 pt-0 rounded-md ml-auto'>2</span>
        </div>
      </div>
    </div>
  )
}

export default Features;
