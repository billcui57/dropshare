import React, { useState } from "react";
import { Pin } from "src/types/pin";
import Button from "@/components/Input/Button";
import {
  SUBCATEGORIES,
  CATEGORIES,
  TITLE_MIN_LENGTH,
  DESCRIPTION_MAX_LENGTH,
  DESCRIPTION_MIN_LENGTH,
  TITLE_MAX_LENGTH,
} from "@/constants/pin";
import SelectInput from "@/components/Input/Form/SelectInput";
import TextInput from "@/components/Input/Form/TextInput";
import _ from "lodash";

type DropPinFormProps = {
  pin: Pin;
  handleDropPin: Function;
};

const DropPinForm = (props: DropPinFormProps) => {
  const [pinInfo, setPinInfo] = useState<Pin>(props.pin);
  const [error, setError] = useState({});

  const handleChange = (e: any, type: string) => {
    setError({});
    setPinInfo({ ...pinInfo, [type]: e.target.value });
  };

  const getFormErrors = (pinInfo: Pin) => {
    let newError = {};
    if (!pinInfo.title || pinInfo.title.length < TITLE_MIN_LENGTH) {
      newError = { ...newError, title: "Too short" };
    }
    if (!pinInfo.title || pinInfo.title.length > TITLE_MAX_LENGTH) {
      newError = { ...newError, title: "Too long" };
    }
    if (
      !pinInfo.description ||
      pinInfo.description.length < DESCRIPTION_MIN_LENGTH
    ) {
      newError = { ...newError, description: "Too short" };
    }
    if (
      !pinInfo.description ||
      pinInfo.description.length > DESCRIPTION_MAX_LENGTH
    ) {
      newError = { ...newError, description: "Too long" };
    }
    if (!pinInfo.remainingCount || pinInfo.remainingCount < 0) {
      newError = {
        ...newError,
        remainingCount: "Must be at least 0",
      };
    }
    return newError;
  };

  const handlePinSubmit = () => {
    //pass validation

    const newErrors = getFormErrors(pinInfo);

    if (_.isEmpty(newErrors)) {
      props.handleDropPin(pinInfo);
    } else {
      setError(newErrors);
    }
  };

  return (
    <React.Fragment>
      <TextInput
        label="Title"
        value={pinInfo?.title}
        onChange={(e) => {
          handleChange(e, "title");
        }}
        type="text"
        className="my-4"
        error={error.title}
      />
      <TextInput
        label="Description"
        value={pinInfo?.description}
        onChange={(e) => {
          handleChange(e, "description");
        }}
        type="text"
        className="my-4"
        error={error.description}
      />
      <TextInput
        label="Remaining Count"
        value={pinInfo?.remainingCount}
        onChange={(e) => {
          handleChange(e, "remainingCount");
        }}
        type="number"
        className="my-4"
        error={error.remainingCount}
      />
      <SelectInput
        value={pinInfo?.category}
        options={CATEGORIES.map((subcat) => {
          return {
            value: subcat,
            label: subcat,
          };
        })}
        onChange={(e) => {
          handleChange(e, "category");
        }}
        label="Category"
        className="my-4"
      />
      <SelectInput
        value={pinInfo?.subcategory}
        options={SUBCATEGORIES.map((subcat) => {
          return {
            value: subcat,
            label: subcat,
          };
        })}
        onChange={(e) => {
          handleChange(e, "subcategory");
        }}
        label="Subcategory"
        className="my-4"
      />
      <div className="my-4">
        <Button type="primary" onClick={handlePinSubmit}>
          Submit
        </Button>
      </div>
    </React.Fragment>
  );
};

export default DropPinForm;
