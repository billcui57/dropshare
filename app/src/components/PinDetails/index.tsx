import React, { useState } from "react";
import { Pin } from "src/types/pin";
import DeletePinModal from "@/components/Modals/DeletePinModal";
import Button from "@/components/Input/Button";
import ButtonContainer from "@/components/Input/ButtonContainer";
import DetailsText from "@/components/TextStyling/DetailsText";

type PinDetailsProps = {
  pin: Pin;
};

const PinDetails = (props: PinDetailsProps) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  if (!props.pin) {
    return null;
  }

  const handleEditButtonClick = () => {};

  return (
    <div>
      <div className={`flex justify-center mb-4`}>
        <DetailsText
          topic="Details about:"
          text={props.pin.title}
          size="section-head"
          textColor="black"
          topicColor="blue"
          disclaimer={`${props.pin.remainingCount} left!`}
          disclaimerColor="red"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 justify-center items-center mb-4">
        <DetailsText
          topic="Category:"
          text={props.pin.category}
          size="base"
          textColor="black"
          topicColor="blue"
        />
        <DetailsText
          topic="Subcategory:"
          text={props.pin.subcategory}
          size="base"
          textColor="black"
          topicColor="blue"
        />
        <DetailsText
          topic="Description:"
          text={props.pin.description}
          size="base"
          textColor="black"
          topicColor="blue"
          className="col-span-2 "
        />
        <div className="col-span-2 flex justify-center items-center">
          <img src={props.pin.image} />
        </div>
      </div>

      <ButtonContainer className="flex justify-center mt-4">
        <Button
          type="primary"
          onClick={() => {
            setIsDeleteModalOpen(true);
          }}
        >
          Edit Pin
        </Button>
        <Button
          type="secondary"
          onClick={() => {
            setIsDeleteModalOpen(true);
          }}
        >
          Remove Pin
        </Button>
      </ButtonContainer>

      <DeletePinModal
        pin={props.pin}
        isOpen={isDeleteModalOpen}
        handleClose={() => {
          setIsDeleteModalOpen(false);
        }}
      />
    </div>
  );
};
export default PinDetails;
