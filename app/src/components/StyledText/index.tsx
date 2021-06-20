import classNames from "classnames";
import React from "react";

type StyledTextProps = {
    text?: String;
};

const StyledText = ({ text }: StyledTextProps) => {
    const styledTextClasses = classNames("text-2xl font-bold flex");

    if (!text) {
        return null;
    }

    const words: String[] = text.split(" ");

    let display;

    if (words.length == 1) {
        display = <div className={"text-blue-500"}>{words[0]}</div>;
    } else {
        display = (
            <React.Fragment>
                <div className={"text-blue-500 mr-2"}>
                    {words.slice(0, words.length - 1)}
                </div>
                <div className={"text-red-400"}>{words[words.length - 1]}</div>
            </React.Fragment>
        );
    }

    return <div className={styledTextClasses}>{display}</div>;
};

export default StyledText;
