import { PinDropMap } from "@/components/Map";
import { connect } from "react-redux";
import { Pin } from "src/types/pin";
import { setCurr, setSelected } from "src/redux/store/pin";
import DropPinForm from "@/components/Input/DropPinForm";
import { PinService } from "@/services";
import { useRouter } from "next/router";
import SplitPane from "@/components/Layouts/SplitPane";
import React from "react";

type DropContainerProps = {
  currPin: Pin;
  setCurr: Function;
  setSelected: Function;
};

const DropContainer = (props: DropContainerProps) => {
  const router = useRouter();

  const handleDropPin = (pinInfo: Pin) => {
    PinService.post(pinInfo)
      .then((data) => {
        props.setSelected(data);
        props.setCurr(undefined);
        router.push("/browse");
      })
      .catch((err) => console.log(err));
  };

  const renderDropPinForm = () => {
    if (props.currPin) {
      return (
        <DropPinForm
          pin={props.currPin}
          handleDropPin={handleDropPin}
          handleCancel={() => router.push("/browse")}
        />
      );
    }
    return <h1>Drop a pin down first</h1>;
  };

  return (
    <SplitPane
      Left={<div className="text-center">{renderDropPinForm()}</div>}
      Right={<PinDropMap setCurr={props.setCurr} currPin={props.currPin} />}
    />
  );
};

const mapStateToProps = (state: any) => {
  return {
    currPin: state.pins.curr,
    loadedPins: state.pins.loaded,
  };
};

const mapDispatchToProps = {
  setCurr: setCurr,
  setSelected: setSelected,
};

export default connect(mapStateToProps, mapDispatchToProps)(DropContainer);
