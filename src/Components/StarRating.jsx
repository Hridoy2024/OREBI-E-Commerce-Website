import React from "react";
import { FaStar, FaStarHalfStroke, FaRegStar } from "react-icons/fa6";
import Flex from "./Flex";

const StarRating = ({ starCount }) => {
  let showStar = Array.from({ length: 5 }, (ele, index) => {
    let number = index + 0.5;

    return (
      <div key={index}>
        {starCount >= index + 1 ? (
          <FaStar className="text-yellow-400" />
        ) : starCount >= number ? (
          <FaStarHalfStroke className="text-yellow-400" />
        ) : (
          <FaRegStar className="text-yellow-400" />
        )}
      </div>
    );
  });
  return (
    <>
      <Flex className={`gap-1`}>{showStar}</Flex>
    </>
  );
};

export default StarRating;
