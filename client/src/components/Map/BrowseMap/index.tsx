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
  selectedPin: Pin;
  setSelectedPin: Function;
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
    if (props.setSelectedPin) {
      props.setSelectedPin(undefined);
    }

    props.setCurr({ lat: lat, lng: lng });
  };

  const handlePinClick = (pin) => {
    if (props.setSelectedPin) {
      props.setCurr(undefined);
      props.setSelectedPin(pin);
    }
  };

  const renderPins = () => {
    let pins: ReactElement[] = [];

    if (props.loadedPins) {
      props.loadedPins.forEach((pin, i) => {
        pins.push(
          <PinView
            title={pin.title}
            lat={pin.lat}
            lng={pin.lng}
            key={pin._id}
            colour="blue"
            onClick={() => handlePinClick(pin)}
          />
        );
      });
    }

    if (props.currPin) {
      pins.push(
        <PinView
          title={props.currPin.title}
          lat={props.currPin.lat}
          lng={props.currPin.lng}
          key={props.currPin._id}
          colour="red"
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
