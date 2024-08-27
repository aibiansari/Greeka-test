import React, { useState } from "react";

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(2);
  const [hover, setHover] = useState(0);

  const getStarClass = (index: any) => {
    if (hover >= index) {
      return "text-yellow-400";
    } else if (!hover && rating >= index) {
      return "text-yellow-400";
    } else if (!hover && rating >= index - 0.5 && rating < index) {
      return "text-yellow-400 half";
    }
    return "text-gray-400";
  };

  return (
    <div className="flex space-x-1">
      {[...Array(totalStars)].map((_, index) => {
        const starIndex = index + 1;
        return (
          <div key={starIndex} className="relative">
            <button
              type="button"
              className={`${getStarClass(starIndex)} text-2xl`}
              onClick={() => setRating(starIndex)}
              onMouseEnter={() => setHover(starIndex)}
              onMouseLeave={() => setHover(0)}
            >
              <span>&#9733;</span>
            </button>
            <button
              type="button"
              className={`${getStarClass(
                starIndex - 0.5
              )} absolute top-0 left-0 text-2xl`}
              style={{ width: "50%" }}
              onClick={() => setRating(starIndex - 0.5)}
              onMouseEnter={() => setHover(starIndex - 0.5)}
              onMouseLeave={() => setHover(0)}
            >
              <span>&#9733;</span>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
