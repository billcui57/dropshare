import React, { ReactElement, useState } from "react";
import GoogleMapReact from "google-map-react";
import { Pin } from "src/types/pin";
import _ from "lodash";
import PinView from "@/components/PinView";
import { useRouter } from "next/router";
import Button from "@/components/Input/Button";
import { DEFAULT_LAT, DEFAULT_LNG } from "@/constants/map";

type BrowseMapProps = {
  currPin: Pin;
  loadedPins: Pin[];
  setCurr: Function;
  onChange?: any;
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
    router.push(`/browse`);
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
      lat: DEFAULT_LAT,
      lng: DEFAULT_LNG,
    };
  };

  const handleChange = (e) => {
    if (props.onChange) {
      console.log(e);
      props.onChange(e);
    }
  };

  return (
    <div className="h-full">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
          language: "en",
        }}
        defaultCenter={getDefaultCenter()}
        defaultZoom={15}
        onClick={handleMapClick}
        onChange={handleChange}
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
    </div>
  );
};

export default BrowseMap;
