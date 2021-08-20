import React, { useState } from "react";
import { Pin } from "src/types/pin";
import Button from "@/components/Input/Button";
import { FOOD_SUBCATEGORIES, CATEGORIES } from "@/constants/pin";
import SelectInput from "@/components/Input/Form/SelectInput";
import TextInput from "@/components/Input/Form/TextInput";

type DropPinFormProps = {
  pin: Pin;
  handleDropPin: Function;
};

const DropPinForm = (props: DropPinFormProps) => {
  const [pinInfo, setPinInfo] = useState<Pin>(props.pin);

  const handleChange = (e: any, type: string) => {
    setPinInfo({ ...pinInfo, [type]: e.target.value });
  };

  const handlePinSubmit = () => {
    //pass validation
    props.handleDropPin(pinInfo);
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
      />
      <TextInput
        label="Description"
        value={pinInfo?.description}
        onChange={(e) => {
          handleChange(e, "description");
        }}
        type="text"
        className="my-4"
      />
      <TextInput
        label="Remaining Count"
        value={pinInfo?.remainingCount}
        onChange={(e) => {
          handleChange(e, "remainingCount");
        }}
        type="number"
        className="my-4"
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
        options={FOOD_SUBCATEGORIES.map((subcat) => {
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
