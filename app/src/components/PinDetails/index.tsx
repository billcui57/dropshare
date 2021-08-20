import React, { useState } from "react";
import { Pin } from "src/types/pin";
import Typography from "@/components/Typography";
import DeletePinModal from "@/components/Modals/DeletePinModal";
import Button from "@/components/Button";
import StyledText from "@/components/StyledText";
import { SECTION_HEAD } from "@/constants/sizes";
import ButtonContainer from "@/components/ButtonContainer";

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
      <div className={`flex justify-center text-${SECTION_HEAD} font-bold`}>
        <StyledText
          text={`Details about: ${props.pin.title}`}
          delimiter=":"
          size="section-head"
        />
      </div>
      <div>
        <div className="flex justify-center">
          <ButtonContainer>
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
        </div>
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
