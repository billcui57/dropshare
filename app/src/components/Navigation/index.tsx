import Button from "@/components/Input/Button";
import React from "react";
import Link from "next/link";
import StyledText from "@/components/TextStyling/StyledText";
import router, { useRouter } from "next/router";
import { BLUE } from "@/constants/colours";

type NavigationProps = {
  title: string;
  className: string;
};

const Navigation = (props: NavigationProps) => {
  const handleLoginClick = () => {
    router.push("/browse");
  };

  return (
    <div className={`flex justify-between items-center ${props.className}`}>
      <Link href="/">
        <a className={`text-${BLUE} font-bold`}>dropshare.io</a>
      </Link>
      <StyledText text={props.title} size="title" />
      <div className="flex space-x-4">
        <Button type="secondary">Sign Up</Button>
        <Button type="primary" onClick={handleLoginClick}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Navigation;
