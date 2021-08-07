import Button from "@/components/Button";
import Maps from "@/components/Maps";
import { connect } from "react-redux";
import { Pin } from "src/types/pin";
import { setCurr } from "src/redux/store/pin";
import DropPinForm from "@/components/DropPinForm";

type DropContainerProps = {
  currPin?: Pin;
  setCurr: Function;
};

const DropContainer = (props: DropContainerProps) => {
  const renderDropPinForm = () => {
    if (props.currPin) {
      return <DropPinForm pin={props.currPin} />;
    }
    return <h1>Drop a pin down first</h1>;
  };

  return (
    <div className={"flex justify-between h-full"}>
      <div className={"w-1/2"}>{renderDropPinForm()}</div>
      <div className={"w-1/2"}>
        <Maps setCurr={props.setCurr} currPin={props.currPin} />
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

const mapDispatchToProps = { setCurr: setCurr };

export default connect(mapStateToProps, mapDispatchToProps)(DropContainer);
