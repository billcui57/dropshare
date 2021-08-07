import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Pin } from "src/types/pin";
import Button from "@/components/Button";

type DropPinFormProps = {
  pin: Pin;
  handleDropPin: Function;
};

const DropPinForm = (props: DropPinFormProps) => {
  const [pinInfo, setPinInfo] = useState<Pin>(props.pin);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPinInfo({ ...pinInfo, title: e.target.value });
  };

  const handlePinSubmit = () => {
    //pass validation

    props.handleDropPin(pinInfo);
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

export default DropPinForm;
