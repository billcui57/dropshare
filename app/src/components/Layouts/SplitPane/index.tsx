import { ReactElement } from "react";

type SplitPaneProps = {
  Left: ReactElement;
  Right: ReactElement;
};

const SplitPane = ({ Left, Right }: SplitPaneProps) => {
  return (
    <div className={"flex justify-between h-full"}>
      <div className={"w-1/2 px-4"}>{Left}</div>
      <div className={"w-1/2"}>{Right}</div>
    </div>
  );
};

export default SplitPane;
