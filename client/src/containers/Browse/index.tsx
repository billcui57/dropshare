import Button from "@/components/Input/Button";
import { BrowseMap } from "@/components/Map";
import { connect } from "react-redux";
import { Pin } from "src/types/pin";
import { setCurr, setLoaded, setSelected } from "src/redux/store/pin";
import SplitPane from "@/components/Layouts/SplitPane";
import { useEffect, useState } from "react";
import { PinService } from "@/services";
import PinDetails from "@/components/PinDetails";
import DeletePinModal from "@/components/Modals/DeletePinModal";
import ButtonContainer from "@/components/Input/ButtonContainer";
import { useRouter } from "next/router";

type BrowseContainerProps = {
  currPin: Pin;
  loadedPins: Pin[];
  setCurr: Function;
  setLoaded: Function;
  selectedPin: Pin;
  setSelected: Function;
};

const BrowseContainer = (props: BrowseContainerProps) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    PinService.list()
      .then((data) => {
        props.setLoaded(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <SplitPane
      Left={
        props.selectedPin && (
          <div>
            <PinDetails pin={props.selectedPin} />
            <ButtonContainer className="flex justify-center mt-4">
              <Button
                type="primary"
                onClick={() => {
                  router.push("/edit");
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
              pin={props.selectedPin}
              isOpen={isDeleteModalOpen}
              handleClose={() => {
                setIsDeleteModalOpen(false);
              }}
            />
          </div>
        )
      }
      Right={
        <BrowseMap
          loadedPins={props.loadedPins}
          setCurr={props.setCurr}
          currPin={props.currPin}
          selectedPin={props.selectedPin}
          setSelectedPin={props.setSelected}
        />
      }
    />
  );
};

const mapStateToProps = (state: any) => {
  return {
    currPin: state.pins.curr,
    loadedPins: state.pins.loaded,
    selectedPin: state.pins.selected,
  };
};

const mapDispatchToProps = {
  setCurr: setCurr,
  setLoaded: setLoaded,
  setSelected: setSelected,
};

export default connect(mapStateToProps, mapDispatchToProps)(BrowseContainer);
