import React, { ReactElement, useState } from "react";
import GoogleMapReact from "google-map-react";
import { Pin } from "src/types/pin";
import _ from "lodash";
import PinView from "@/components/PinView";

type MapProps = {
  currPin?: Pin;
  loadedPins?: Pin[];
  setCurr: Function;
  justDroppedPin?: Pin;
  selectedPin?: Pin;
  setSelectedPin?: Function;
};

const Maps = (props: MapProps) => {
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
      let remainingPins: Pin[] = props.loadedPins;

      if (props.justDroppedPin) {
        pins.push(
          <PinView
            title={props.justDroppedPin.title}
            lat={props.justDroppedPin.lat}
            lng={props.justDroppedPin.lng}
            key={props.justDroppedPin._id}
            colour={"yellow"}
            onClick={() => handlePinClick(props.justDroppedPin)}
          />
        );
        remainingPins = remainingPins.filter(
          (pin) => props.justDroppedPin._id !== pin._id
        );
      }

      remainingPins.forEach((pin, i) => {
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

    if (props.justDroppedPin) {
      return {
        lat: props.justDroppedPin.lat,
        lng: props.justDroppedPin.lng,
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

export default Maps;
