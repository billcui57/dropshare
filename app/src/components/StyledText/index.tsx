import classNames from "classnames";
import React from "react";

const SIZES = {
  SM: "sm",
  BASE: "base",
  LG: "lg",
  DISPLAY: "display",
};

type StyledTextProps = {
  text: string;
  size: string;
  className: string;
};

const StyledText = (props: StyledTextProps) => {
  const styledTextClasses = classNames(
    `text-2xl font-bold flex ${props.className}`,
    {
      "text-sm": props.size == SIZES.SM,
      "text-base": props.size == SIZES.BASE,
      "text-lg": props.size == SIZES.LG,
      "text-5xl": props.size == SIZES.DISPLAY,
    }
  );

  if (!props.text) {
    return null;
  }

  const words: String[] = props.text.split(" ");

  let display;

  if (words.length == 1) {
    display = <div className={"text-blue-500"}>{words[0]}</div>;
  } else {
    display = (
      <React.Fragment>
        <div className={"text-blue-500 mr-2"}>
          {words.slice(0, words.length - 1).join(" ")}
        </div>
        <div className={"text-red-400"}>{words[words.length - 1]}</div>
      </React.Fragment>
    );
  }

  return <div className={styledTextClasses}>{display}</div>;
};

export default StyledText;
