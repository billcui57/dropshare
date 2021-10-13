import React, { ReactElement, useState } from "react";
import GoogleMapReact from "google-map-react";
import { Pin } from "src/types/pin";
import _ from "lodash";
import PinView from "@/components/PinView";

type PinDropMapProps = {
  currPin: Pin;
  setCurr: Function;
};

const PinDropMap = (props: PinDropMapProps) => {
  const handleMapClick = ({ x, y, lat, lng, event }) => {
    props.setCurr({ lat: lat, lng: lng });
  };

  const renderPins = () => {
    let pins: ReactElement[] = [];

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
    </React.Fragment>
  );
};

export default PinDropMap;
