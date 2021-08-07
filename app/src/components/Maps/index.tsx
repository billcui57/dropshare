import React, { ReactElement } from "react";
import GoogleMapReact from "google-map-react";
import { Pin } from "src/types/pin";
import classNames from "classnames";
import _ from "lodash";

const COLORS = {
  RED: "red",
  BLUE: "blue",
  YELLOW: "yellow",
};

type PinProps = {
  hover?: Boolean;
  colour: string;
  title: String;
  lat: Number;
  lng: Number;
};

const PinView = (props: PinProps) => {
  const pinClasses = classNames(
    "rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-8 w-8",
    {
      "bg-blue-400": props.colour == COLORS.BLUE,
      "bg-red-400": props.colour == COLORS.RED,
      "bg-yellow-400": props.colour == COLORS.YELLOW,
    }
  );

  if (!props.lat || !props.lng) {
    return null;
  }
  return <div className={pinClasses}>{props.title}</div>;
};

type MapProps = {
  currPin?: Pin;
  loadedPins?: Pin[];
  setCurr: Function;
  justDroppedPin?: Pin;
};

const Maps = (props: MapProps) => {
  const handleMapClick = ({ x, y, lat, lng, event }) => {
    props.setCurr({ lat: lat, lng: lng });
  };

  const renderPins = () => {
    let pins: ReactElement[] = [];

    if (props.loadedPins) {
      props.loadedPins.forEach((loadedPin, i) => {
        if (props.justDroppedPin && props.justDroppedPin._id == loadedPin._id) {
          pins.push(
            <PinView
              title={loadedPin.title}
              lat={loadedPin.lat}
              lng={loadedPin.lng}
              key={i}
              colour="yellow"
            />
          );
        } else {
          pins.push(
            <PinView
              title={loadedPin.title}
              lat={loadedPin.lat}
              lng={loadedPin.lng}
              key={i}
              colour="blue"
            />
          );
        }
      });
    }

    if (props.currPin) {
      pins.push(
        <PinView
          title={props.currPin.title}
          lat={props.currPin.lat}
          lng={props.currPin.lng}
          key="curr"
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
