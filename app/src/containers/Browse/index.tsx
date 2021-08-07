import Button from "@/components/Button";
import Maps from "@/components/Maps";
import { connect } from "react-redux";
import { Pin } from "src/types/pin";
import { setCurr, setLoaded } from "src/redux/store/pin";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { PinService } from "@/services";

type BrowseContainerProps = {
  currPin?: Pin;
  loadedPins: Pin[];
  setCurr: Function;
  setLoaded: Function;
  justDroppedPin: Pin;
};

const BrowseContainer = (props: BrowseContainerProps) => {
  const router = useRouter();
  const getDropPinText = () => {
    let result = "Drop a Pin";
    if (props.currPin) {
      result += " here";
    }
    return result;
  };

  const handleDropPin = () => {
    router.push("/drop");
  };

  useEffect(() => {
    PinService.list()
      .then((data) => {
        props.setLoaded(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={"flex justify-between h-full"}>
      <div className={"w-1/2"}>
        <Button onClick={handleDropPin} type="primary">
          {getDropPinText()}
        </Button>
      </div>
      <div className={"w-1/2"}>
        <Maps
          loadedPins={props.loadedPins}
          setCurr={props.setCurr}
          currPin={props.currPin}
          justDroppedPin={props.justDroppedPin}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    currPin: state.pins.curr,
    loadedPins: state.pins.loaded,
    justDroppedPin: state.pins.justDropped,
  };
};

const mapDispatchToProps = {
  setCurr: setCurr,
  setLoaded: setLoaded,
};

export default connect(mapStateToProps, mapDispatchToProps)(BrowseContainer);
