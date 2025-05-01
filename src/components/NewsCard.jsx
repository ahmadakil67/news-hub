import React, { useState } from "react";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const {
    title,
    rating,
    total_view,
    image_url,
    details,
    author,
  } = news;

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg max-h-screen overflow-y-auto">
      {/* Author Info */}
      <div className="flex items-center px-4 py-2 bg-base-300 justify-between">
        <div className="flex">
          <img
            className="w-10 h-10 object-cover rounded-full"
            src={author.img}
            alt={author.name}
          />
          <div className="ml-3">
            <p className="text-sm font-semibold">{author.name}</p>
            <p className="text-xs text-gray-500">
              {formatDate(author.published_date)}
            </p>
          </div>
        </div>
        <div className="flex space-x-2 text-gray-500">
          <FaRegBookmark className="cursor-pointer hover:text-black" />
          <FaShareAlt className="cursor-pointer hover:text-black" />
        </div>
      </div>

      {/* Title */}
      <div className="px-4">
        <h2 className="text-lg font-bold">{title}</h2>
      </div>

      {/* Image */}
      <img
        className="w-full h-48 object-cover my-2"
        src={image_url}
        alt={title}
      />

      {/* Details */}
      <div className="px-4 text-sm text-gray-700">
        <p>{isExpanded ? details : details.slice(0, 150) + "..."}</p>
        <button
          onClick={toggleReadMore}
          className="text-red-500 font-semibold text-sm cursor-pointer"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>

      {/* Footer: Tags, Rating, Views */}
      <div className="flex justify-between items-center px-4 py-3 border-t mt-2 text-sm">
        <div className="flex text-orange-500">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={
                i < rating.number ? "text-orange-500" : "text-gray-300"
              }
            />
          ))}
          <span className="ml-2 text-black">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
