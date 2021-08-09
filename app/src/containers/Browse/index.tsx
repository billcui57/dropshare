import Button from "@/components/Button";
import Maps from "@/components/Maps";
import { connect } from "react-redux";
import { Pin } from "src/types/pin";
import { setCurr, setLoaded, setSelected } from "src/redux/store/pin";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { PinService } from "@/services";
import PinDetails from "@/components/PinDetails";

type BrowseContainerProps = {
  currPin?: Pin;
  loadedPins: Pin[];
  setCurr: Function;
  setLoaded: Function;
  justDroppedPin?: Pin;
  selectedPin?: Pin;
  setSelected: Function;
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
        <PinDetails pin={props.selectedPin} />
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
          selectedPin={props.selectedPin}
          setSelectedPin={props.setSelected}
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
    selectedPin: state.pins.selected,
  };
};

const mapDispatchToProps = {
  setCurr: setCurr,
  setLoaded: setLoaded,
  setSelected: setSelected,
};

export default connect(mapStateToProps, mapDispatchToProps)(BrowseContainer);
