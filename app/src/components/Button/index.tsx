import classNames from "classnames";

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
};

const Button = ({ type, children, onClick, className }: ButtonProps) => {
  const btnClasses = classNames(
    `w-36 h-12 rounded-lg focus:outline-none ${className}`,
    {
      "bg-blue-500 text-white hover:bg-blue-600": type == TYPES.PRIMARY,
      "bg-white bg-opacity-0 hover:bg-opacity-40 text-blue-500 border-blue-500 border-2 ":
        type == TYPES.SECONDARY,
      "bg-red-500 text-white hover:bg-red-600": type == TYPES.WARNING,
    }
  );

  return (
    <button className={btnClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
