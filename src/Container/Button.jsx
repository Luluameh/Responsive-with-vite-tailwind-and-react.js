import React from "react";

const Button = ({ link, Plus }) => {
  return (
    <div className="">
    <button className="border border-dashed  border- bg-[#F2F4F5] ml-2  p-2 w-72 rounded-lg l:w-72 xl:w-80 xxl:w-[26rem] ">
      <div className=" flex items-center mx-auto justify-center gap-3">
        <img src={Plus} alt="" />
        <a href="/" className=" text-[#7D8088] text-xs">
          {link}
        </a>
      </div>
    </button>
    </div>
  );
};

export default Button;
