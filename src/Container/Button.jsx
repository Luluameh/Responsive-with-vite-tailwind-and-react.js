import React from "react";
//image from assests/sidenav-icons
import plus from "../assets/sidenav-icons/plus.png";

const Button = ({ link, image }) => {
  return (
    <div className="w-80 mx-auto my-2 rounded-lg p-3 gap-2 bg-blue-500 text-white text-center no-underline">
      <div className=" flex items-center m-auto">
        <img src={plus} alt="" />
        <a href="/"> ADD TASK</a>
      </div>
    </div>
  );
};

export default Button;
