import React, { useState } from "react";
import { Pin } from "src/types/pin";
import classNames from "classnames";
import _ from "lodash";

const COLORS = {
  RED: "red",
  BLUE: "blue",
  YELLOW: "yellow",
};

type PinViewProps = {
  hover?: Boolean;
  colour: String;
  title: String;
  lat: Number;
  lng: Number;
  onClick?: Function;
};

const PinView = (props: PinViewProps) => {
  const pinClasses = classNames(
    "rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-8 w-8",
    {
      "bg-blue-400": props.colour == COLORS.BLUE,
      "bg-red-400": props.colour == COLORS.RED,
      "bg-yellow-400": props.colour == COLORS.YELLOW,
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
      {props.title}
    </div>
  );
};
export default PinView;
