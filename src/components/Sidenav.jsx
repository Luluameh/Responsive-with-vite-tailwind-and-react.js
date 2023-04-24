import React, { useState } from "react";
import add from "../assets/sidenav-icons/add.png";
import dashboard from "../assets/sidenav-icons/dashboard.png";
import plus from "../assets/sidenav-icons/plus.png";
import setting from "../assets/sidenav-icons/setting.png";
import user from "../assets/sidenav-icons/user.png";
import affiliate from "../assets/sidenav-icons/affiliate.png";
import Lightning from "../assets/sidenav-icons/Lightning.png";
import activites from "../assets/sidenav-icons/activites.png";

export default function Sidenav() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <>
      {/* Hamburger menu */}
      <div
        className="block lg:hidden fixed top-0 left-0 p-3 cursor-pointer  bg-[#1D1042]
        "
        onClick={handleMenuClick}
      >
        <svg
          className="w-6 h-6 fill-current text-white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {showMenu ? (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm16 5H4v2h16v-2z"
            />
          ) : (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
            />
          )}
        </svg>
      </div>
      {/**closed menue */}
      {showMenu && (
        <div
          className="absolute top-0 right-0 p-3 cursor-pointer bg-[#1D1042]
          "
          onClick={handleMenuClick}
        >
          <svg
            className="w-6 h-6 fill-current text-white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.56 5.56l12.88 12.88-1.42 1.42L4.13 7.98l1.43-1.42zm12.88 1.42L5.56 18.44l1.42 1.42 12.88-12.88-1.42-1.42z"
            />
          </svg>
        </div>
      )}
      {/**side bar */}
      <div
        className={`${showMenu ? "fixed" : "hidden"} lg:block 
        bg-[#1D1042]
        min-h-screen w-48 flex flex-col items-center py-4 shadow`}
      >
        <div className="">
          <button className=" p-2   l:p-4 bg-[#45269C] rounded-md flex items-center">
            <a href="/" className="flex items-center">
              <img src={Lightning} alt="lightning-icon" />
              <span className="text-xs font-bold text-white">
                Welcome Keerthi
              </span>
            </a>
          </button>

          <div className="flex-1 items-center">
            <ul className="pt-2 pb-4 space-y-1 text-sm sm:text-xs md:text-sm lg:text-sm items-center">
              <li className="rounded-sm cursor-pointer my-px">
                <a
                  href="/dashboard"
                  className="flex items-center p-1 space-x-3 rounded-md"
                >
                  <img src={dashboard} alt="dashboard-icons" />
                  <span className="text-gray-100 items-center text-sm">Dashboard</span>
                </a>
              </li>
              <li className="rounded-sm cursor-pointer my-px ">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <img src={setting} alt="setting-icon" />
                  <span className="text-gray-100">Setting</span>
                </a>
              </li>
              <li className="rounded-sm cursor-pointer my-px">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <img src={activites} alt="activites-icon" />
                  <span className="text-gray-100">Activities</span>
                </a>
              </li>
              <li className="rounded-sm  my-px">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <img src={user} alt="user-icon" />
                  <span className="text-gray-100">Users</span>
                </a>
              </li>
              <li className="rounded-sm my-px">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <img src={add} alt="added-icon" />
                  <span className="text-gray-100">Added User</span>
                </a>
              </li>
              <li className="rounded-sm my-px">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <img src={affiliate} alt="affiliate-icon" />
                  <span className="text-gray-100">Affiliate</span>
                </a>
              </li>
              <li className="border-t border-gray-500 pt-2"></li>

              <li className="rounded-sm my-px">
                <a
                  href="#"
                  className="flex items-center p-3 space-x-3 rounded-md"
                >
                  <img src={activites} alt="profile-activites-icon" />
                  <span className="text-gray-100">Profile</span>
                </a>
              </li>
              <li className="rounded-sm  my-px">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <img src={user} alt="Logout-side" />
                  <span className="text-gray-100">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex  cursor-pointer  gap-2 p-2 items-center   md:mt-96  mt-10 l:mt-96
         bg-[#703EFE]  rounded-lg shadow-lg mx-2">
          <a href="#" className="flex items-center">
            <img src={plus} alt="new project-icon" className="mr-2" />
            <span className="text-gray-100 font-sm md:text-xs font-inter">
              
              New Project
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
