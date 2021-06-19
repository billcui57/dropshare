import GoogleMapReact from "google-map-react";
import React, { useState } from "react";
import PageHOC from "@/pages/template";

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

const BrowsePage = () => {
    const [pinLoc, setPinLoc] = useState<any>();

    const handleMapClick = ({ x, y, lat, lng, event }) => {
        setPinLoc({ lat: lat, lng: lng });
    };

    return (
        <div className={"flex justify-between h-full"}>
            <h1>hi</h1>
            <div className={"w-1/2"}>
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
            </div>
        </div>
    );
};
export default PageHOC({ Component: BrowsePage, title: "What's Nearby" });
