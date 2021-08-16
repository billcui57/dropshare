import classNames from "classnames";
import React from "react";
import { SM, BASE, LG, SECTION_HEAD, TITLE, DISPLAY } from "@/constants/sizes";
import { BLUE, RED } from "@/constants/colours";

const SIZES = {
  SM: "sm",
  BASE: "base",
  LG: "lg",
  SECTION_HEAD: "section-head",
  TITLE: "title",
  DISPLAY: "display",
};

type StyledTextProps = {
  text: string;
  size: string;
  className?: string;
  delimiter: string;
};

const StyledText = (props: StyledTextProps) => {
  const styledTextClasses = classNames(`font-bold flex ${props.className}`, {
    [`text-${SM}`]: props.size == SIZES.SM,
    [`text-${BASE}`]: props.size == SIZES.BASE,
    [`text-${LG}`]: props.size == SIZES.LG,
    [`text-${SECTION_HEAD}`]: props.size == SIZES.SECTION_HEAD,
    [`text-${TITLE}`]: props.size == SIZES.TITLE,
    [`text-${DISPLAY}`]: props.size == SIZES.DISPLAY,
  });

  if (!props.text) {
    return null;
  }

  const words: String[] = props.text.split(props.delimiter);

  let display;

  if (words.length == 1) {
    display = <div className={`text-${BLUE}`}>{words[0]}</div>;
  } else {
    display = (
      <React.Fragment>
        <div className={`text-${BLUE} mr-2`}>
          {words.slice(0, words.length - 1).join(" ")}
        </div>
        <div className={`text-${RED}`}>{words[words.length - 1]}</div>
      </React.Fragment>
    );
  }

  return <div className={styledTextClasses}>{display}</div>;
};

export default StyledText;
