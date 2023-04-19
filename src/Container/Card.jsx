import React from "react";

export const Card = ({
  imgSrc,
  imgAlt,
  title,
  description,
  buttonText,
  link,
}) => {
  return (
    <div className="w-72 rounded-lg shadow-md flex flex-col m-2 bg-white ">
      {imgSrc && imgAlt && (
        <img
          src={imgSrc}
          alt={imgAlt}
          className="w-full rounded-t-lg card-img"
        />
      )}
      {title && (
        <h1
          className="
      m-2 text-lg font-bold text-gray-800 card-title"
        >
          {title}
        </h1>
      )}
      {description && (
        <p className="m-2 text-md text-gray-600 card-description">
          {description}
        </p>
      )}
      {buttonText && link && (
        <a
          href={link}
          className="w-80 mx-auto my-2 rounded-lg p-2 bg-blue-500 text-white text-center no-underline
          card-btn"
        >
          {buttonText}
        </a>
      )}
    </div>
  );
};
export default Card;
