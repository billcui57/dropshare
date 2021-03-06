import classNames from "classnames";
import React from "react";
import { BLUE, RED, TEXT, WHITE } from "@/constants/colours";
import { SM, BASE, LG, SECTION_HEAD, TITLE, DISPLAY } from "@/constants/sizes";
import { Typography as MuiTypography } from "@material-ui/core";

type TypographyProps = {
  text: String | number;
  size: string;
  className?: string;
  colour: string;
  bold?: boolean;
  noWrap?: boolean;
};

const COLOURS = {
  RED: "red",
  BLUE: "blue",
  TEXT: "text",
  WHITE: "white",
};

const SIZES = {
  SM: "xs",
  BASE: "base",
  LG: "lg",
  SECTION_HEAD: "section-head",
  TITLE: "title",
  DISPLAY: "display",
};

const Typography = (props: TypographyProps) => {
  const classes = classNames(`inline-block ${props.className}`, {
    [`text-${WHITE}`]: props.colour == COLOURS.WHITE,
    [`text-${TEXT}`]: props.colour == COLOURS.TEXT,
    [`text-${BLUE}`]: props.colour == COLOURS.BLUE,
    [`text-${RED}`]: props.colour == COLOURS.RED,
    [`text-${SM}`]: props.size == SIZES.SM,
    [`text-${BASE}`]: props.size == SIZES.BASE,
    [`text-${LG}`]: props.size == SIZES.LG,
    [`text-${SECTION_HEAD}`]: props.size == SIZES.SECTION_HEAD,
    [`text-${TITLE}`]: props.size == SIZES.TITLE,
    [`text-${DISPLAY}`]: props.size == SIZES.DISPLAY,
    ["font-bold"]: props.bold,
    ["overflow-ellipsis overflow-hidden"]: props.noWrap,
  });

  if (!props.text) {
    return null;
  }

  return <span className={classes}> {props.text}</span>;
};

export default Typography;
