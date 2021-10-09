import { PinDropMap } from "@/components/Map";
import { connect, useSelector } from "react-redux";
import { Pin } from "src/types/pin";
import { getSelectorPinById, setCurr } from "@/store/pin";
import DropPinForm from "@/components/Input/DropPinForm";
import { PinService } from "@/services";
import { useRouter } from "next/router";
import SplitPane from "@/components/Layouts/SplitPane";
import React from "react";

type EditContainerProps = {
  selectedPinId: string;
  setCurr: Function;
};

const EditContainer = (props: EditContainerProps) => {
  const router = useRouter();

  const selectedPin: Pin | undefined = useSelector(
    getSelectorPinById(props.selectedPinId)
  );

  const handleEditPin = (pinInfo: Pin) => {
    PinService.edit(selectedPin, pinInfo)
      .then((data) => {
        props.setCurr(undefined);
        router.push("/browse");
      })
      .catch((err) => console.log(err));
  };

  const renderEditPinForm = () => {
    if (selectedPin) {
      return (
        <DropPinForm
          pin={selectedPin}
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
      Right={<PinDropMap setCurr={props.setCurr} currPin={selectedPin} />}
    />
  );
};

const mapStateToProps = (state: any) => {
  return {
    loadedPins: state.pins.loaded,
  };
};

const mapDispatchToProps = {
  setCurr: setCurr,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditContainer);
