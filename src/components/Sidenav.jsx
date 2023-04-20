import React from "react";
import add from "../assets/sidenav-icons/add.png";
import dashboard from "../assets/sidenav-icons/dashboard.png";
import plus from "../assets/sidenav-icons/plus.png";
import setting from "../assets/sidenav-icons/setting.png";
import user from "../assets/sidenav-icons/user.png";
import affiliate from "../assets/sidenav-icons/affiliate.png";
import Lightning from "../assets/sidenav-icons/Lightning.png";
import activites from "../assets/sidenav-icons/activites.png";

export default function Sidenav() {
  return (
    <div className="l:fixed  md:w-[9rem] l:w-[14.5rem] l:p-[30px] flex flex-col  p-5 bg-[#1D1042] shadow max-h-full  h-full">
      <div className="space-y-3 ">
        <div className="flex items-center">
          <button className="l:p-4 bg-[#45269C] rounded-md flex items-center">
            <a href="/" className="flex items-center">
              <img src={Lightning} alt="lightning-icon" />
              <span className="text-xs font-bold text-white">
                Welcome Keerthi
              </span>
            </a>
          </button>
        </div>
        <div className="flex-1 items-center">
          <ul className="pt-2 pb-4 space-y-1 text-sm items-center">
            <li className="rounded-sm cursor-pointer">
              <a
                href="/dashboard"
                className="flex items-center p-1 space-x-3 rounded-md"
              >
                <img src={dashboard} alt="dashboard-icons" />
                <span className="text-gray-100 items-center">Dashboard</span>
              </a>
            </li>
            <li className="rounded-sm cursor-pointer ">
              <a
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <img src={setting} alt="setting-icon" />
                <span className="text-gray-100">Setting</span>
              </a>
            </li>
            <li className="rounded-sm cursor-pointer">
              <a
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <img src={activites} alt="activites-icon" />
                <span className="text-gray-100">Activities</span>
              </a>
            </li>
            <li className="rounded-sm">
              <a
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <img src={user} alt="user-icon" />
                <span className="text-gray-100">Users</span>
              </a>
            </li>
            <li className="rounded-sm">
              <a
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <img src={add} alt="added-icon" />
                <span className="text-gray-100">Added User</span>
              </a>
            </li>
            <li className="rounded-sm">
              <a
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <img src={affiliate} alt="affiliate-icon" />
                <span className="text-gray-100">Affiliate</span>
              </a>
            </li>
            <li className="border-t border-gray-500 pt-2"></li>

            <li className="rounded-sm">
              <a
                href="#"
                className="flex items-center p-3 space-x-3 rounded-md"
              >
                <img src={activites} alt="profile-activites-icon" />
                <span className="text-gray-100">Profile</span>
              </a>
            </li>
            <li className="rounded-sm">
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
      <div className="flex  cursor-pointer my-5 mb-15 gap-2 p-2 items-center bg-[#703EFE] mt-auto rounded-lg shadow-lg mx-2">
        <a href="#" className="flex items-center">
          <img src={plus} alt="new project-icon" className="mr-2" />
          <span className="text-gray-100 font-sm md:text-xs font-inter"> New Project</span>
        </a>
      </div>
    </div>
  );
}
