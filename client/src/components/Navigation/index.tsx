import Button from "@/components/Input/Button";
import React from "react";
import Link from "next/link";
import StyledText from "@/components/TextStyling/StyledText";
import router, { useRouter } from "next/router";
import { BLUE } from "@/constants/colours";
import ButtonContainer from "@/components/Input/ButtonContainer";

type NavigationProps = {
  title: string;
  className: string;
};

const Navigation = (props: NavigationProps) => {
  return (
    <div className={` ${props.className}`}>
      <Link href="/">
        <a className={`text-${BLUE} font-bold`}>drop-share.com</a>
      </Link>
      <StyledText
        text={props.title}
        size="title"
        className="flex justify-center"
      />
    </div>
  );
};

export default Navigation;
