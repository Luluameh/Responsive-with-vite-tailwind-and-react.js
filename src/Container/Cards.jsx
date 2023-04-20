import React from "react";
import Features from "./Features";


const Cards = ({
  //the props
  imagePath,
  title,
  imgAlt,
  description,
  img,
  listpic,
  infor,
  figure,
  linepic,
  message,
  pic,
  digit,
  profile,
  number,
}) => {
  return (
    <div className="  ">
 <div className="w-72 rounded-lg shadow-md sm:max-w-xs md:max-w-sm md:m-auto flex flex-col m-2 bg-white l:w-72 xl:w-80 xxl:w-[26rem] ">
        {imagePath && imgAlt && (
          <img
            src={imagePath}
            alt={imgAlt}
            className="w-auto h-62 p-2 l:h-32 w-60 xxl:w-full"
          />
        )}
        <div className="p-4">
          <div className="flex justify-between">
            <h3 className="m-1 text-lg font-bold text-gray-800 card-title">
              {title}
            </h3>
            <img
              src={img}
              alt="the three horizontal dots"
              className="h-4 mt-2"
            />
          </div>
          <p className=" text-base text-gray-600 card-description">
            {description}
          </p>

          <div className="flex justify-between">
            <div className="flex">
              <img
                src={listpic}
                alt="HORIZONTAL LINK LINE"
                className="h-4 mt-2"
              />
              <span>{infor} </span>
            </div>
            <div className="">
              <span>{figure}</span>
            </div>
          </div>
          <img src={linepic} alt="" className="" />
          <div className="flex justify-between">
            <div className="flex items-center ">
              <img src={message} alt="chat message icon" />
              <span>{number}</span>
              <div className="flex items-center">
                <img src={pic} alt="HORIZONTAL LINK LINE" />
                <span>{digit}</span>
              </div>
            </div>
            <div>
              <img src={profile} alt="min profile" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
