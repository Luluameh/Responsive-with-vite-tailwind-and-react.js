import React from "react";

const Features = ({ pTag, number }) => {
  return (
    <>
      <div className="h-fit">
      <div className="flex  gap-4 mb-2 mt-2  bg-[#F4F6F8] rounded-md p-3 w-full l:w-72  xl:w-80 xxl:w-[26rem] ">
            <p>{pTag}</p>
            <span className="bg-black text-white p-2 pb-0 pt-0 rounded-md ml-auto">
              {number}
            </span>
          </div>
        
      </div>
    </>
  );
};

export default Features;
