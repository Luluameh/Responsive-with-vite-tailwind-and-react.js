import React from "react";

const Button = ({ link, Plus }) => {
  return (
    <button className="border border-dashed  border- bg-[#F2F4F5] ml-2  p-2 w-72 rounded-lg ">
      <div className=" flex items-center m-auto justify-center gap-3">
        <img src={Plus} alt="" />
        <a href="/" className=" text-[#7D8088] text-xs">
          {link}
        </a>
      </div>
    </button>
  );
};

export default Button;
