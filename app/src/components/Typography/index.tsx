import classNames from "classnames";
import React from "react";

type TypographyProps = {
  text: string;
  className: string;
};

const Typography = (props: TypographyProps) => {
  if (!props.text) {
    return null;
  }

  return <div className={props.className}>{props.text}</div>;
};

export default Typography;
