import React, { ReactElement, useEffect, useState } from "react";
import { Pin } from "src/types/pin";
import Typography from "@/components/TextStyling/Typography";
import { PinUtil } from "@/utils";
import PinStar from "@/components/PinStar";
import _ from "lodash";

type PinCardProps = {
  pin: Pin;
  onClick: any;
};

const PinCard = (props: PinCardProps) => {
  console.log(props.pin.ratings);

  return (
    <div className="flex flex-col justify-center ">
      <div
        className={`w-11/12 relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white ${
          props.onClick ? "cursor-pointer" : ""
        }`}
        onClick={props.onClick}
      >
        <div className="w-full md:w-1/3 bg-white grid place-items-center">
          <img src={props.pin.image} className="rounded-xl w-96" />
        </div>

        <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
          <div className="flex justify-between item-center ">
            <p className="text-gray-500 font-medium hidden md:block">
              {props.pin.category} - {props.pin.subcategory}
            </p>
            {!_.isEmpty(props.pin.ratings) && (
              <PinStar score={PinUtil.getAverageRating(props.pin.ratings)} />
            )}

            {/* <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-pink-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
              Superhost
            </div> */}
          </div>
          {/* <h3 className="font-black text-gray-800 md:text-3xl text-xl">
            The Majestic and Wonderful Bahamas
          </h3> */}

          <Typography colour="blue" size="lg" bold text={props.pin.title} />

          <Typography colour="black" size="md" text={props.pin.description} />

          {/* <p className="md:text-lg text-gray-500 text-base">
            The best kept secret of The Bahamas is the country’s sheer size and
            diversity. With 16 major islands, The Bahamas is an unmatched
            destination
          </p> */}
          {/* <p className="text-xl font-black text-gray-800">
            $110
            <span className="font-normal text-gray-600 text-base">/night</span>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default PinCard;
