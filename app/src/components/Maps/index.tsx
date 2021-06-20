import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

type PinProps = {
    lat: Number;
    lng: Number;
    text?: String;
    hover?: Boolean;
};

const Pin = ({ lat, lng, text, hover }: PinProps) => {
    if (!lat || !lng) {
        return null;
    }

    return (
        <div
            className={`rounded-full bg-red-400 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-8 w-8`}
        >
            {text}
        </div>
    );
};

const Maps = () => {
    const [pinLoc, setPinLoc] = useState<any>();

    const handleMapClick = ({ x, y, lat, lng, event }) => {
        setPinLoc({ lat: lat, lng: lng });
    };

    return (
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
            <Pin lat={pinLoc?.lat} lng={pinLoc?.lng} />
        </GoogleMapReact>
    );
};

export default Maps;
