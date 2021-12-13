import { BrowseMap } from "@/components/Map";
import { connect } from "react-redux";
import { Pin } from "src/types/pin";
import { setCurr, setLoaded, getSelectorPinById } from "src/redux/store/pin";
import SplitPane from "@/components/Layouts/SplitPane";
import React, { useEffect, useState } from "react";
import { PinService } from "@/services";
import { useRouter } from "next/router";
import LocationPinBrowser from "@/components/LocationPinBrowser";
import { DEFAULT_LAT, DEFAULT_LNG } from "@/constants/map";

type BrowseContainerProps = {
  currPin: Pin;
  loadedPins: Pin[];
  setCurr: Function;
  setLoaded: Function;
};

const BrowseContainer = (props: BrowseContainerProps) => {
  const [searchParams, setSearchParams] = useState({
    lat: DEFAULT_LAT,
    lng: DEFAULT_LNG,
    searchRadius: 100,
  });

  useEffect(() => {
    PinService.list()
      .then((data) => {
        props.setLoaded(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const router = useRouter();

  const displayLeftSide = () => {
    return (
      <LocationPinBrowser
        lat={searchParams.lat}
        lng={searchParams.lng}
        searchRadius={searchParams.searchRadius}
      />
    );
  };

  return (
    <SplitPane
      Left={displayLeftSide()}
      Right={
        <BrowseMap
          loadedPins={props.loadedPins}
          setCurr={props.setCurr}
          currPin={props.currPin}
          onChange={(e) =>
            setSearchParams({
              lng: e.center.lng,
              lat: e.center.lat,
              searchRadius:
                (e.size.height *
                  (156543.03392 * Math.cos((e.center.lat * Math.PI) / 180))) /
                Math.pow(2, e.zoom),
            })
          }
        />
      }
      className="h-5/6"
    />
  );
};

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    currPin: state.pins.curr,
    loadedPins: state.pins.loaded,
  };
};

const mapDispatchToProps = {
  setCurr: setCurr,
  setLoaded: setLoaded,
};

export default connect(mapStateToProps, mapDispatchToProps)(BrowseContainer);
