import Button from "@/components/Input/Button";
import { BrowseMap } from "@/components/Map";
import { connect } from "react-redux";
import { Pin } from "src/types/pin";
import { setCurr, setLoaded, setSelected } from "src/redux/store/pin";

import { useEffect } from "react";
import { PinService } from "@/services";
import PinDetails from "@/components/PinDetails";

type BrowseContainerProps = {
  currPin: Pin;
  loadedPins: Pin[];
  setCurr: Function;
  setLoaded: Function;
  justDroppedPin: Pin;
  selectedPin: Pin;
  setSelected: Function;
};

const BrowseContainer = (props: BrowseContainerProps) => {
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
        {props.selectedPin && <PinDetails pin={props.selectedPin} />}
      </div>
      <div className={"w-1/2"}>
        <BrowseMap
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
