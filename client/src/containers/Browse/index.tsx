import Button from "@/components/Input/Button";
import { BrowseMap } from "@/components/Map";
import { connect, useSelector } from "react-redux";
import { Pin } from "src/types/pin";
import { setCurr, setLoaded, getSelectorPinById } from "src/redux/store/pin";
import SplitPane from "@/components/Layouts/SplitPane";
import React, { useEffect, useState } from "react";
import { PinService } from "@/services";
import PinDetails from "@/components/PinDetails";
import DeletePinModal from "@/components/Modals/DeletePinModal";
import ButtonContainer from "@/components/Input/ButtonContainer";
import { useRouter } from "next/router";
import LocationPinBrowser from "@/components/LocationPinBrowser";
import { DEFAULT_LAT, DEFAULT_LNG } from "@/constants/map";

type BrowseContainerProps = {
  currPin: Pin;
  loadedPins: Pin[];
  setCurr: Function;
  setLoaded: Function;
  selectedPinId: string;
};

const BrowseContainer = (props: BrowseContainerProps) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
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

  const selectedPin: Pin | undefined = useSelector(
    getSelectorPinById(props.selectedPinId)
  );

  const displayLeftSide = () => {
    if (selectedPin) {
      return (
        <div>
          <PinDetails pin={selectedPin} />
          <ButtonContainer className="flex justify-center mt-4">
            <Button
              type="primary"
              onClick={() => {
                router.push(`/edit/${selectedPin._id}`);
              }}
            >
              Edit Pin
            </Button>
            <Button
              type="secondary"
              onClick={() => {
                setIsDeleteModalOpen(true);
              }}
            >
              Remove Pin
            </Button>
          </ButtonContainer>

          <DeletePinModal
            pin={selectedPin}
            isOpen={isDeleteModalOpen}
            handleClose={() => {
              setIsDeleteModalOpen(false);
            }}
          />
        </div>
      );
    }

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
