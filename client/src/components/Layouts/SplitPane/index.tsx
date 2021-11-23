import { ReactElement } from "react";

type SplitPaneProps = {
  Left: ReactElement;
  Right: ReactElement;
  className: string;
};

const SplitPane = ({ className, Left, Right }: SplitPaneProps) => {
  return (
    <div className={`flex justify-between  ${className}`}>
      <div className={"w-1/2 px-4 overflow-auto"}>{Left}</div>
      <div className={"w-1/2"}>{Right}</div>
    </div>
  );
};

export default SplitPane;
