/* eslint-disable @next/next/no-img-element */
import React from "react";
import StarRating from "./stars";
import { FaArrowCircleRight } from "react-icons/fa";

interface CardProps {
  imageSrc: string;
  title: string;
  rating: number;
  customerCount: string;
  operatesIn: { country: string; flagSrc: string }[];
  vesselsNumber: number;
  ferryTypes: string;
  popularVessels: string[];
  description: string;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  rating,
  customerCount,
  operatesIn,
  vesselsNumber,
  ferryTypes,
  popularVessels,
  description,
}) => {
  return (
    <div className="flex flex-col ring-1 md:ring-2 ring-neutral-300 rounded-lg p-2 mb-6 mx-4">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2 justify-between border-b-2 pb-2 border-neutral-200">
        <img
          src={imageSrc}
          alt={title}
          className="w-full md:w-1/3 object-cover rounded"
        />
        <div className="flex flex-col items-start md:items-end">
          <h1 className="font-bold text-xl">{title}</h1>
          <div className="flex items-center text-sm gap-2">
            <StarRating totalStars={rating} /> by
            <b>{customerCount} Customers</b>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 pt-2">
        <div className="grid gap-2 text-sm">
          <div className="h-1/3 flex flex-col">
            <b>Operates in</b>
            <div className="flex gap-2">
              {operatesIn.map(({ country, flagSrc }) => (
                <div key={country} className="flex items-center gap-1">
                  <img
                    src={flagSrc}
                    alt={`${country} flag`}
                    className="w-5 h-5"
                  />
                  <span>{country}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="h-1/3 flex flex-col">
            <span>
              <b>Vessels number:</b> {vesselsNumber}
            </span>
            <span>
              <b>Ferry types:</b> {ferryTypes}
            </span>
          </div>
          <div className="h-1/3 flex flex-col mb-2 md:mb-0">
            <b>Popular vessels:</b>{" "}
            <span className="text-cyan-400">{popularVessels.join(", ")}</span>
          </div>
        </div>
        <div className="flex items-start justify-center">
          <p className="max-h-36 md:max-h-32 overflow-hidden text-sm">
            {description}
          </p>
        </div>
      </div>
      <div className="flex cursor-pointer gap-1.5 pt-3 items-center text-cyan-400 justify-end">
        More about {title} <FaArrowCircleRight />
      </div>
    </div>
  );
};

export default Card;
