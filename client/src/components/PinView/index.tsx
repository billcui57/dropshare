import React, { useState } from "react";
import classNames from "classnames";
import _ from "lodash";
import { BLUE, YELLOW, RED, WHITE } from "@/constants/colours";
import Typography from "@/components/TextStyling/Typography";

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
    `rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-12 w-12 p-1 border-2 border-${WHITE}`,
    {
      [`bg-${BLUE}`]: props.colour == COLORS.BLUE,
      [`bg-${RED}`]: props.colour == COLORS.RED,
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
      <Typography text={props.title} colour="white" noWrap size="sm" />
    </div>
  );
};
export default PinView;
