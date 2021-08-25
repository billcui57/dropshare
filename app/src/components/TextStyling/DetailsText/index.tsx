import React from "react";
import Typography from "@/components/TextStyling/Typography";

type DetailsTextProps = {
  text: string | number;
  size: string;
  className?: string;
  topicColor: string;
  textColor: string;
  disclaimerColor?: string;
  topic: string | number;
  disclaimer?: string | number;
};

const DetailsText = (props: DetailsTextProps) => {
  return (
    <span className={props.className}>
      <Typography
        text={props.topic}
        size={props.size}
        colour={props.topicColor}
        bold
        className="mr-1"
      />
      <Typography
        text={props.text}
        size={props.size}
        colour={props.textColor}
        className="mr-1"
      />
      {props.disclaimer && props.disclaimerColor && (
        <Typography
          text={`(${props.disclaimer})`}
          size={props.size}
          colour={props.disclaimerColor}
        />
      )}
    </span>
  );
};

export default DetailsText;
