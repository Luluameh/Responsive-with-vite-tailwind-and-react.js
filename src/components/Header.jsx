import React from 'react'
import Profile from '../assets/small-icons/Profile.png';
import users from '../assets/small-icons/users.png';
import board from '../assets/small-icons/board.png';
import list from '../assets/small-icons/list.png';
import power from '../assets/small-icons/power.png';
import pls from '../assets/small-icons/pls.png';


const Header = () => {
  return (
    <>
     <div className=' bg-white rounded shadow-sm m-auto'>  
<div className='flex p-8 justify-between ml-16 mr-16'>
    <div>
      <h1 className='font-bold  l:font-2xl xl:font-4xl xxl:font-5xl'>New Campaign Run </h1>
      <p className='text-sm  text-[#B8B9BD] font-normal'>A new campaign launch work for brand new featur in May month</p>
    </div>
    <div className='
     l:mr-32  xl:mr-44 xxl:mr-72
     '>
      <button className='font-normal  font-inter   text-white bg-black  p-1 gap-2  rounded-md text-sm '>
      ADD MEMBER
      </button>
    </div>
</div>
<div className=' ml-16 mr-16'>
<div className='flex justify-between text-[#B8B9BD] text-xs   ml-10 pb-4 pt-3 '>
               <div className='flex items-center  '>
                        <img src={Profile} alt="the profile "  className=''/>
                        <span className=' text-sm'>8 member</span>
                        </div>
{/**side */}
<div className='flex text-xs gap-2  l:mr-20  xl:mr-44 xxl:mr-52'>
          <div className='flex items-center '>
        <img src={users} alt="users" />
        <span className='text-sm'>Participants View</span>

    </div>
    <div className='flex items-center '>
 <img src={board} alt="board-view" />
<span>
Board View
</span>
    </div>
    <div className='flex items-center'>
 <img src={list} alt="list-view" />
<span>
List View
</span>
    </div>
<div className='flex items-center'>
 <img src={power} alt="power-point" />
<span>
Power View
</span>
    </div>
    <div className='flex items-center'>
    <img src={pls} alt="plus-sign" />
    </div>
</div>
  </div>
</div>
</div>
</>
  )
}

export default Header