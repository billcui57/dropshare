import classNames from "classnames";

const TYPES = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
};

type ButtonProps = {
    type: string;
    children: any;
    onClick: any;
};

const Button = ({ type, children, onClick }: ButtonProps) => {
    const btnClasses = classNames("w-36 h-12 rounded-lg focus:outline-none", {
        "bg-blue-500 text-white hover:bg-blue-600": type == TYPES.PRIMARY,
        "bg-white bg-opacity-0 hover:bg-opacity-40 text-blue-500 border-blue-500 border-2 ":
            type == TYPES.SECONDARY,
    });

    return (
        <button className={btnClasses} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
