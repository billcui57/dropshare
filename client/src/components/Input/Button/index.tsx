import classNames from "classnames";
import {
  BLUE,
  WHITE,
  BLUE_DARK,
  RED_DARK,
  RED_DARKER,
} from "@/constants/colours";

const TYPES = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  WARNING: "warning",
};

type ButtonProps = {
  type: string;
  children: any;
  onClick: any;
  className?: string;
  hidden?: boolean;
};

const Button = ({
  type,
  children,
  onClick,
  className,
  hidden,
}: ButtonProps) => {
  const btnClasses = classNames(
    `w-36 h-12 rounded-lg focus:outline-none ${className}`,
    {
      [`bg-${BLUE} text-${WHITE} hover:bg-${BLUE_DARK}`]: type == TYPES.PRIMARY,
      [`bg-${WHITE} bg-opacity-0 hover:bg-opacity-40 text-${BLUE} border-${BLUE} border-2`]:
        type == TYPES.SECONDARY,
      [`bg-${RED_DARKER} text-${WHITE} hover:bg-${RED_DARK}`]:
        type == TYPES.WARNING,
    }
  );

  return (
    <button className={btnClasses} onClick={onClick} hidden={hidden}>
      {children}
    </button>
  );
};

export default Button;
