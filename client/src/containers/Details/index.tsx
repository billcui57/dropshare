import Button from "@/components/Input/Button";
import React, { useEffect, useState } from "react";
import { PinService } from "@/services";
import PinDetails from "@/components/PinDetails";
import DeletePinModal from "@/components/Modals/DeletePinModal";
import ButtonContainer from "@/components/Input/ButtonContainer";
import { useRouter } from "next/router";

type DetailsContainerProps = {
  selectedPinId: string;
};

const DetailsContainer = (props: DetailsContainerProps) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedPin, setSelectedPin] = useState(false);

  useEffect(() => {
    PinService.get(props.selectedPinId)
      .then((data) => {
        setSelectedPin(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const router = useRouter();

  const displayDetails = () => {
    return (
      <React.Fragment>
        <PinDetails pin={selectedPin} />
        <ButtonContainer className="flex justify-center mt-4">
          <Button
            type="secondary"
            onClick={() => {
              router.push(`/browse`);
            }}
          >
            Go back
          </Button>
          <Button
            type="primary"
            onClick={() => {
              router.push(`/edit/${selectedPin._id}`);
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
          pin={selectedPin}
          isOpen={isDeleteModalOpen}
          handleClose={() => {
            setIsDeleteModalOpen(false);
            router.push(`/browse`);
          }}
        />
      </React.Fragment>
    );
  };

  return (
    <div className="px-64">
      {!selectedPin ? (
        <div className="flex justify-center">Loading...</div>
      ) : (
        displayDetails()
      )}
    </div>
  );
};

export default DetailsContainer;
