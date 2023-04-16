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
<div className="2xl:container 2xl:mx-auto mb-12">
            <div className="bg-white rounded shadow-sm py-8 px-7">
                <nav className="flex justify-between">
                    <div className="flex items-center space-x-3 lg:pr-16 pr-6">
                        <div className='ml-8'>  
                        <h2 className="text-2xl leading-2 text-black font-bold font-inter m-0">
                        New Campaign Run   
                        </h2>
                    <p className='text-sm text-gray-300 font-400 p-2'>
                    A new campaign launch work for brand new featur in May month  
                    </p>
                    
                     </div>
                    </div>
    
                    <div className='mr-8'>
                         <ul className="hidden md:flex flex-auto space-x-2">
                        <li  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white bg-black cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">
                            ADD MEMBERS</li>
                    </ul>
                        
                   </div>
                    </nav>
                    {/**the second line in the header nav */}
               <div className='flex justify-between text-[#B8B9BD] text-xs p-5'>
               <div className='flex  '>
                        <img src={Profile} alt="the profile "  className=''/>
                        <span className=' text-sm'>8 member</span>
                        </div>
{/**the left side */}
                <div className='flex text-xs gap-2'>
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





    {/**small size */}
                <div className="block md:hidden w-full mt-5 ">
                    <div  className="cursor-pointer px-4 py-3 text-white bg-black rounded flex justify-between items-center w-full">
                        <div className="flex space-x-2">
                            <span id="s1" className="font-semibold text-sm leading-3 hidden">Selected: </span><p id="textClicked" className="font-normal text-sm leading-3 focus:outline-none hover:bg-gray-800 duration-100 cursor-pointer ">ADD MEMBERS</p>
                        </div>
                                       
                    </div>
                    {/**medium */}
                    <div className=" relative">
                        <ul id="list" className=" hidden font-normal text-base leading-4 absolute top-2  w-full rounded shadow-md">
                            <li className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">Arts</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        


</>
  )
}

export default Header