import { PinDropMap } from "@/components/Map";
import { connect } from "react-redux";
import { Pin } from "src/types/pin";
import { setCurr, setJustDropped, setSelected } from "src/redux/store/pin";
import DropPinForm from "@/components/Input/DropPinForm";
import { PinService } from "@/services";
import { useRouter } from "next/router";
import SplitPane from "@/components/Layouts/SplitPane";
import React from "react";

type EditContainerProps = {
  selectedPin: Pin;
  setCurr: Function;
  setJustDropped: Function;
  setSelected: Function;
};

const EditContainer = (props: EditContainerProps) => {
  const router = useRouter();

  const handleEditPin = (pinInfo: Pin) => {
    PinService.edit(props.selectedPin._id, pinInfo)
      .then((data) => {
        props.setJustDropped(data);
        props.setSelected(data);
        props.setCurr(undefined);
        router.push("/browse");
      })
      .catch((err) => console.log(err));
  };

  const renderEditPinForm = () => {
    if (props.selectedPin) {
      return (
        <DropPinForm
          pin={props.selectedPin}
          handleDropPin={handleEditPin}
          handleCancel={() => router.push("/browse")}
        />
      );
    }
    return <h1>Select a pin to edit first</h1>;
  };

  return (
    <SplitPane
      Left={<div className="text-center">{renderEditPinForm()}</div>}
      Right={<PinDropMap setCurr={props.setCurr} currPin={props.selectedPin} />}
    />
  );
};

const mapStateToProps = (state: any) => {
  return {
    selectedPin: state.pins.selected,
    loadedPins: state.pins.loaded,
  };
};

const mapDispatchToProps = {
  setCurr: setCurr,
  setJustDropped: setJustDropped,
  setSelected: setSelected,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditContainer);
