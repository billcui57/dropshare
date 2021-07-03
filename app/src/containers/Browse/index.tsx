import Button from "@/components/Button";
import Maps from "@/components/Maps";
import { connect } from "react-redux";
import { Pin } from "src/types/pin";
import { setCurr as setCurrAction } from "src/redux/store/pin";
import router, { useRouter } from "next/router";

type BrowseContainerProps = {
  currPin?: Pin;
  loadedPins: Pin[];
  setCurr: Function;
};

const BrowseContainer = ({
  currPin,
  loadedPins,
  setCurr,
}: BrowseContainerProps) => {
  const getDropPinText = () => {
    let result = "Drop a Pin";
    if (currPin) {
      result += " here";
    }
    return result;
  };

  const handleDropPin = () => {
    router.push("/drop");
  };

  return (
    <div className={"flex justify-between h-full"}>
      <div className={"w-1/2"}>
        <Button onClick={handleDropPin} type="primary">
          {getDropPinText()}
        </Button>
      </div>
      <div className={"w-1/2"}>
        <Maps loadedPins={loadedPins} setCurr={setCurr} currPin={currPin} />
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    currPin: state.pins.curr,
    loadedPins: state.pins.loaded,
  };
};

const mapDispatchToProps = { setCurr: setCurrAction };

export default connect(mapStateToProps, mapDispatchToProps)(BrowseContainer);
