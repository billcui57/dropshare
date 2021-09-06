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
import FileUploadButton from "@/components/Input/FileUploadButton";
import ButtonContainer from "@/components/Input/ButtonContainer";

type DropPinFormProps = {
  pin: Pin;
  handleDropPin: Function;
  handleCancel: Function;
};

const DropPinForm = (props: DropPinFormProps) => {
  const [pinInfo, setPinInfo] = useState<Pin>(props.pin);
  const [error, setError] = useState<any>({});

  const handleChange = (e: any, type: string) => {
    setError({});

    if (type === "image") {
      handleImageChange(e);
    } else {
      setPinInfo({ ...pinInfo, [type]: e.target.value });
    }
  };

  const handleImageChange = (fileUploaded) => {
    setPinInfo({
      ...pinInfo,
      image: fileUploaded,
    });
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

  const renderImageUploader = () => {
    return (
      <div className="col-span-2 flex flex-wrap justify-center items-center  ">
        {pinInfo.image && <img src={pinInfo.image} className="mx-4 mb-4" />}
        <FileUploadButton
          type="secondary"
          onSubmit={(e) => {
            handleChange(e, "image");
          }}
        >
          {pinInfo.image ? "Change the image" : "Attach an image"}
        </FileUploadButton>
      </div>
    );
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 justify-center items-center mb-4">
        <TextInput
          label="Title"
          value={pinInfo?.title}
          onChange={(e) => {
            handleChange(e, "title");
          }}
          type="text"
          error={error.title}
        />
        <TextInput
          label="Remaining Count"
          value={pinInfo?.remainingCount}
          onChange={(e) => {
            handleChange(e, "remainingCount");
          }}
          type="number"
          error={error.remainingCount}
        />
        <TextInput
          label="Description"
          className="col-span-2"
          value={pinInfo?.description}
          onChange={(e) => {
            handleChange(e, "description");
          }}
          type="text"
          error={error.description}
          isTextArea
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
        />
        {renderImageUploader()}
      </div>

      <ButtonContainer className="flex justify-center">
        <Button type="primary" onClick={handlePinSubmit}>
          Submit
        </Button>
        <Button type="secondary" onClick={props.handleCancel}>
          Cancel
        </Button>
      </ButtonContainer>
    </div>
  );
};

export default DropPinForm;
