import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Pin } from "src/types/pin";
import Button from "@/components/Button";
import { PinService } from "@/services";

type DropPinFormProps = {
  pin: Pin;
};

const DropPinForm = ({ pin }: DropPinFormProps) => {
  const [pinInfo, setPinInfo] = useState<Pin>(pin);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPinInfo({ ...pinInfo, title: e.target.value });
  };

  const handlePinSubmit = () => {
    PinService.post(pinInfo);
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
