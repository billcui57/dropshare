import React, { ReactNode } from "react";

type ButtonContainerProps = {
  children: ReactNode;
  className?: string;
};

const ButtonContainer = (props: ButtonContainerProps) => {
  return (
    <div className={`flex space-x-4 ${props.className}`}>{props.children}</div>
  );
};

export default ButtonContainer;
