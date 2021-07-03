import React, { ReactElement } from "react";
import GoogleMapReact from "google-map-react";
import { Pin } from "src/types/pin";
import classNames from "classnames";
import _ from "lodash";

const COLORS = {
  RED: "red",
  BLUE: "blue",
};

type PinProps = {
  hover?: Boolean;
  colour: string;
} & Pin;

const PinView = ({ lat, lng, title, hover, colour }: PinProps) => {
  const pinClasses = classNames(
    "rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-8 w-8",
    {
      "bg-blue-400": colour == COLORS.BLUE,
      "bg-red-400": colour == COLORS.RED,
    }
  );

  if (!lat || !lng) {
    return null;
  }
  return <div className={pinClasses}>{title}</div>;
};

type MapProps = {
  currPin?: Pin;
  loadedPins?: Pin[];
  setCurr: Function;
};

const Maps = ({ currPin, loadedPins, setCurr }: MapProps) => {
  const handleMapClick = ({ x, y, lat, lng, event }) => {
    setCurr({ lat: lat, lng: lng });
  };

  const renderPins = () => {
    let pins: ReactElement[] = [];

    if (loadedPins) {
      loadedPins.forEach((loadedPin, i) => {
        pins.push(
          <PinView
            title={loadedPin.title}
            lat={loadedPin.lat}
            lng={loadedPin.lng}
            key={i}
            colour="blue"
          />
        );
      });
    }

    if (currPin) {
      pins.push(
        <PinView
          title={currPin.title}
          lat={currPin.lat}
          lng={currPin.lng}
          key="curr"
          colour="red"
        />
      );
    }

    return pins;
  };

  return (
    <React.Fragment>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
          language: "en",
        }}
        defaultCenter={{
          lat: 43.662349271526836,
          lng: -79.37947646024934,
        }}
        defaultZoom={15}
        onClick={handleMapClick}
      >
        {renderPins()}
      </GoogleMapReact>
    </React.Fragment>
  );
};

export default Maps;
