import React, { useState } from "react";
import { Pin } from "src/types/pin";
import StyledText from "@/components/StyledText";
import DeletePinModal from "../Modals/DeletePinModal";
import Button from "../Button";

type PinDetailsProps = {
  pin: Pin;
};

const PinDetails = (props: PinDetailsProps) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  if (!props.pin) {
    return null;
  }

  return (
    <div>
      <div className="flex justify-center text-2xl font-bold">
        <span className="text-blue-500 mr-2">Details about:</span>
        <span className="text-red-400">{props.pin.title}</span>
      </div>
      <div>
        <Button
          type="secondary"
          onClick={() => {
            setIsDeleteModalOpen(true);
          }}
        >
          Remove Pin
        </Button>
      </div>
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
