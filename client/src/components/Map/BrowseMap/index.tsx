import React, { ReactElement, useState } from "react";
import GoogleMapReact from "google-map-react";
import { Pin } from "src/types/pin";
import _ from "lodash";
import PinView from "@/components/PinView";
import { useRouter } from "next/router";
import Button from "@/components/Input/Button";

type BrowseMapProps = {
  currPin: Pin;
  loadedPins: Pin[];
  setCurr: Function;
};

const BrowseMap = (props: BrowseMapProps) => {
  const router = useRouter();
  const getDropPinText = () => {
    let result = "Drop a Pin";
    if (props.currPin) {
      result += " here";
    }
    return result;
  };

  const handleDropPin = () => {
    router.push("/drop");
  };

  const handleMapClick = ({ x, y, lat, lng, event }) => {
    props.setCurr({ lat: lat, lng: lng });
  };

  const handlePinClick = (pin: Pin) => {
    props.setCurr(undefined);
    router.push(`/browse/${pin._id}`);
  };

  const renderPins = () => {
    let pins: ReactElement[] = [];

    if (props.loadedPins) {
      props.loadedPins.forEach((pin, i) => {
        pins.push(
          <PinView
            remainingCount={pin.remainingCount}
            title={pin.title}
            lat={pin.lat}
            lng={pin.lng}
            key={pin._id}
            onClick={() => handlePinClick(pin)}
          />
        );
      });
    }

    if (props.currPin) {
      pins.push(
        <PinView
          remainingCount={props.currPin.remainingCount}
          title={props.currPin.title}
          lat={props.currPin.lat}
          lng={props.currPin.lng}
          key={props.currPin._id}
          isCurr
        />
      );
    }

    return pins;
  };

  const getDefaultCenter = () => {
    if (props.currPin) {
      return {
        lat: props.currPin.lat,
        lng: props.currPin.lng,
      };
    }

    return {
      lat: 43.662349271526836,
      lng: -79.37947646024934,
    };
  };

  return (
    <React.Fragment>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
          language: "en",
        }}
        defaultCenter={getDefaultCenter()}
        defaultZoom={15}
        onClick={handleMapClick}
      >
        {renderPins()}
      </GoogleMapReact>
      <div className="flex justify-center">
        <Button
          onClick={handleDropPin}
          type="primary"
          className="absolute bottom-16"
        >
          {getDropPinText()}
        </Button>
      </div>
    </React.Fragment>
  );
};

export default BrowseMap;
