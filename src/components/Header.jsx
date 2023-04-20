import React from "react";
import Profile from "../assets/small-icons/Profile.png";
import users from "../assets/small-icons/users.png";
import board from "../assets/small-icons/board.png";
import list from "../assets/small-icons/list.png";
import power from "../assets/small-icons/power.png";
import pls from "../assets/small-icons/pls.png";

const Header = () => {
  return (
    <>
    <div className="bg-white rounded shadow-sm mx-auto px-4 py-6 sm:px-6 md:px-8 lg:px-12 xl:px-16 xxl:px-24">
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:items-center">
        <div className="lg:ml-52">
          <h1 className="font-bold text-2xl md:text-4xl xxl:text-5xl">
            New Campaign Run
          </h1>
          <p className="text-sm text-gray-500 font-normal">
            A new campaign launch work for brand new feature in May month
          </p>
        </div>
        <button className="font-normal font-inter text-white bg-black py-1 px-2 md:px-4 lg:px-6 rounded-md text-sm">
          ADD MEMBER
        </button>
      </div>
      <div className="flex justify-between text-gray-500 text-xs mt-4 md:mt-6">
        <div className="flex items-center">
          <img src={Profile} alt="the profile" className="h-4 md:h-6" />
          <span className="text-sm ml-1 md:ml-2">8 members</span>
        </div>
        <div className="flex gap-2 md:mr-4">
          <div className="flex items-center">
            <img src={users} alt="users" className="h-4 md:h-6" />
            <span className="text-sm ml-1 md:ml-2">Participants View</span>
          </div>
          <div className="flex items-center">
            <img src={board} alt="board-view" className="h-4 md:h-6" />
            <span className="text-sm ml-1 md:ml-2">Board View</span>
          </div>
          <div className="flex items-center">
            <img src={list} alt="list-view" className="h-4 md:h-6" />
            <span className="text-sm ml-1 md:ml-2">List View</span>
          </div>
          <div className="flex items-center">
            <img src={power} alt="power-point" className="h-4 md:h-6" />
            <span className="text-sm ml-1 md:ml-2">Power View</span>
          </div>
          <div className="flex items-center">
            <img src={pls} alt="plus-sign" className="h-4 md:h-6" />
          </div>
        </div>
      </div>
    </div>










    </>
  );
};

export default Header;
