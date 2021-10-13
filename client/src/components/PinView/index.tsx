import React, { useState } from "react";
import classNames from "classnames";
import _ from "lodash";
import { BLUE, YELLOW, RED, WHITE, GREEN } from "@/constants/colours";
import Typography from "@/components/TextStyling/Typography";

const COLORS = {
  RED: "red",
  BLUE: "blue",
  YELLOW: "yellow",
};

type PinViewProps = {
  hover?: Boolean;
  isCurr?: Boolean;
  title: String;
  remainingCount: Number;
  lat: Number;
  lng: Number;
  onClick?: Function;
};

const PinView = (props: PinViewProps) => {
  const pinClasses = classNames(
    `rounded-full
    transform
    -translate-x-1/2 
    -translate-y-1/2
    flex
    items-center
    justify-center
    h-12
    w-12
    p-1
    bg-gray-100
    ring-4 
    ring-opacity-75`,
    {
      [`ring-${BLUE}`]: props.isCurr,
      [`ring-${GREEN}`]: props.remainingCount >= 10,
      [`ring-${YELLOW}`]:
        props.remainingCount >= 5 && props.remainingCount < 10,
      [`ring-${RED}`]: props.remainingCount >= 1 && props.remainingCount < 5,
    }
  );

  if (!props.lat || !props.lng) {
    return null;
  }

  const handleClick = () => {
    props.onClick && props.onClick();
  };

  return (
    <div className={pinClasses} onClick={handleClick}>
      <Typography text={props.title} colour="black" noWrap size="sm" />
    </div>
  );
};
export default PinView;
