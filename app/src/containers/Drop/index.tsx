import Maps from "@/components/Maps";
import { connect } from "react-redux";
import { Pin } from "src/types/pin";
import { setCurr, setJustDropped } from "src/redux/store/pin";
import DropPinForm from "@/components/DropPinForm";
import { PinService } from "@/services";
import { useRouter } from "next/router";

type DropContainerProps = {
  currPin?: Pin;
  setCurr: Function;
  setJustDropped: Function;
};

const DropContainer = (props: DropContainerProps) => {
  const router = useRouter();

  const handleDropPin = (pinInfo: Pin) => {
    PinService.post(pinInfo)
      .then((data) => {
        props.setJustDropped(data);
        props.setCurr(null);
        router.push("/browse");
      })
      .catch((err) => console.log(err));
  };

  const renderDropPinForm = () => {
    if (props.currPin) {
      return <DropPinForm pin={props.currPin} handleDropPin={handleDropPin} />;
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

const mapDispatchToProps = { setCurr: setCurr, setJustDropped: setJustDropped };

export default connect(mapStateToProps, mapDispatchToProps)(DropContainer);
