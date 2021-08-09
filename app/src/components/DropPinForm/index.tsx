import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Pin } from "src/types/pin";
import Button from "@/components/Button";
import { PinService } from "@/services";
import { useRouter } from "next/router";
import { setCurr, setJustDropped } from "@/store/pin";
import { connect } from "react-redux";

type DropPinFormProps = {
  pin: Pin;
  setCurr: Function;
  setJustDropped: Function;
};

const DropPinForm = (props: DropPinFormProps) => {
  const router = useRouter();
  const [pinInfo, setPinInfo] = useState<Pin>(props.pin);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPinInfo({ ...pinInfo, title: e.target.value });
  };

  const handlePinSubmit = () => {
    PinService.post(pinInfo)
      .then((data) => {
        props.setJustDropped(data);
        props.setCurr(null);
        router.push("/browse");
      })
      .catch((err) => console.log(err));
  };

  return (
    <React.Fragment>
      <TextField
        defaultValue={pinInfo?.title}
        onChange={handleTitleChange}
      ></TextField>
      <Button type="primary" onClick={handlePinSubmit}>
        Submit
      </Button>
    </React.Fragment>
  );
};

const mapDispatchToProps = { setCurr: setCurr, setJustDropped: setJustDropped };

export default connect(null, mapDispatchToProps)(DropPinForm);
