import React, { ReactElement, useState } from "react";
import GoogleMapReact from "google-map-react";
import { Pin } from "src/types/pin";
import _ from "lodash";
import { PinView, PinDetailed } from "@/components/Pin";

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
    props.setCurr({ lat: lat, lng: lng });
  };

  const handlePinClick = (pin) => {
    if (props.setSelectedPin) {
      props.setSelectedPin(pin);
    }
  };

  const handleSelectPinClickAway = (pin) => {
    if (props.setSelectedPin) {
      props.setSelectedPin(null);
    }
  };

  const renderPins = () => {
    let pins: ReactElement[] = [];

    if (props.loadedPins) {
      let remainingPins: Pin[] = props.loadedPins;
      if (props.selectedPin) {
        pins.push(
          <PinDetailed
            title={props.selectedPin.title}
            lat={props.selectedPin.lat}
            lng={props.selectedPin.lng}
            key={props.selectedPin._id}
            onClickAway={handleSelectPinClickAway}
          />
        );

        remainingPins = remainingPins.filter(
          (pin) => props.selectedPin._id !== pin._id
        );
      }

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

    pins = pins.reverse();

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
