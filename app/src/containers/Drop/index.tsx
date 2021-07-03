import Button from "@/components/Button";
import Maps from "@/components/Maps";
import { connect } from "react-redux";
import { Pin } from "src/types/pin";
import { setCurr as setCurrAction } from "src/redux/store/pin";
import router, { useRouter } from "next/router";
import DropPinForm from "@/components/DropPinForm";

type DropContainerProps = {
  currPin?: Pin;
  setCurr: Function;
};

const DropContainer = ({ currPin, setCurr }: DropContainerProps) => {
  const renderDropPinForm = () => {
    if (currPin) {
      return <DropPinForm pin={currPin} />;
    }
    return <h1>Drop a pin down first</h1>;
  };

  return (
    <div className={"flex justify-between h-full"}>
      <div className={"w-1/2"}>{renderDropPinForm()}</div>
      <div className={"w-1/2"}>
        <Maps setCurr={setCurr} currPin={currPin} />
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    currPin: state.pins.curr,
    loadedPins: state.pins.loaded,
  };
};

const mapDispatchToProps = { setCurr: setCurrAction };

export default connect(mapStateToProps, mapDispatchToProps)(DropContainer);
