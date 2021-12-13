import React, { ReactElement, useEffect, useState } from "react";
import StyledText from "@/components/TextStyling/StyledText";
import { PinService } from "@/services";
import { Pin } from "src/types/pin";
import Typography from "@/components/TextStyling/Typography";
import PinCard from "@/components/PinCard";
import { useRouter } from "next/router";

type LocationPinBrowserProps = {
  lat: number;
  lng: number;
  searchRadius: number;
};

const LocationPinBrowser = (props: LocationPinBrowserProps) => {
  const [nearbyPins, setNearbyPins] = useState<Pin[]>();

  const router = useRouter();

  useEffect(() => {
    PinService.listNearby(props.lng, props.lat, props.searchRadius)
      .then((data) => {
        setNearbyPins(data);
      })
      .catch((err) => console.log(err));
  }, [props.lng, props.lat, props.searchRadius]);

  const handleCardClick = (pin: Pin) => {
    router.push(`/browse/${pin._id}`);
  };

  const displayNearbyPins = () => {
    return (
      <div className="grid grid-cols-1 gap-4  ">
        {!nearbyPins ? (
          <div className="flex justify-center">Loading...</div>
        ) : (
          nearbyPins.map((pin: Pin) => {
            return (
              <PinCard
                pin={pin}
                onClick={() => {
                  handleCardClick(pin);
                }}
              />
            );
          })
        )}
      </div>
    );
  };

  return (
    <div>
      <div className="flex justify-center mb-2">
        <StyledText size="section-head" text="What's Nearby" />
      </div>
      {displayNearbyPins()}
    </div>
  );

  //needs distance
};

export default LocationPinBrowser;
