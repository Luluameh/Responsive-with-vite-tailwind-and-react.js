import React from "react";

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
    <div className=" h-fit ">
      <div className="w-72 rounded-lg shadow-md flex flex-col m-2 bg-white ">
        {imagePath && imgAlt && (
          <img
            src={imagePath}
            alt={imgAlt}
            className="w-auto h-62 p-2 l:h-32 w-60 xxl:w-96"
          />
        )}
        <div className="p-4">
          <h3 className="m-2 text-lg font-bold text-gray-800 card-title">
            {title}
          </h3>
          <div className="flex justify-between">
            <p className=" text-base text-gray-600 card-description">
              {description}
            </p>
            <img src={img} alt="the three horizontal dots" className="h-4" />
          </div>
          <div className="flex justify-between">
            <div className="flex">
              <img src={listpic} alt="HORIZONTAL LINK LINE" />
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
