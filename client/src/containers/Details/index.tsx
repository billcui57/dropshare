import Button from "@/components/Input/Button";
import React, { useEffect, useState } from "react";
import { PinService, RatingService } from "@/services";
import PinDetails from "@/components/PinDetails";
import RatePinModal from "@/components/Modals/RatePinModal";
import ButtonContainer from "@/components/Input/ButtonContainer";
import { useRouter } from "next/router";
import { Rating } from "src/types/rating";

type DetailsContainerProps = {
  selectedPinId: string;
};

const DetailsContainer = (props: DetailsContainerProps) => {
  const [isRateModalOpen, setIsRateModalOpen] = useState(false);
  const [selectedPin, setSelectedPin] = useState(false);

  useEffect(() => {
    PinService.get(props.selectedPinId)
      .then((data) => {
        setSelectedPin(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const router = useRouter();

  const handleRate = (ratingInfo: Rating) => {
    RatingService.post(ratingInfo)
      .then(() => {
        setIsRateModalOpen(false);
        router.reload(window.location.pathname);
      })
      .catch((e) => {
        console.log(e);
      });
  };

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
              setIsRateModalOpen(true);
            }}
          >
            Rate
          </Button>
          {/* ask how many did you take */}
        </ButtonContainer>

        <RatePinModal
          pin={selectedPin}
          isOpen={isRateModalOpen}
          handleClose={() => {
            setIsRateModalOpen(false);
          }}
          rate={handleRate}
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
