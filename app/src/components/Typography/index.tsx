import classNames from "classnames";
import React from "react";
import { BLUE, RED, TEXT } from "@/constants/colours";

type TypographyProps = {
  text: string;
  className?: string;
  colour: string;
};

const COLOURS = {
  RED: "red",
  BLUE: "blue",
  TEXT: "text",
};

const Typography = (props: TypographyProps) => {
  const classes = classNames(`inline-block ${props.className}`, {
    [`text-${TEXT}`]: props.colour == COLOURS.TEXT,
    [`text-${BLUE}`]: props.colour == COLOURS.BLUE,
    [`text-${RED}`]: props.colour == COLOURS.RED,
  });

  if (!props.text) {
    return null;
  }

  return <span className={classes}>{props.text}</span>;
};

export default Typography;
