import React, { useState } from "react";
import Button from "@/components/Input/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Pin } from "src/types/pin";
import { PinService } from "@/services";
import { remove } from "@/store/pin";
import { connect } from "react-redux";
import ButtonContainer from "@/components/Input/ButtonContainer";
import TextInput from "@/components/Input/Form/TextInput";
import { Rating } from "src/types/rating";
import _ from "lodash";
type RatePinModalProps = {
  pin: Pin;
  isOpen: boolean;
  handleClose: Function;
  rate: Function;
};

const RatePinModal = (props: RatePinModalProps) => {
  const handleRate = (ratingInfo) => {
    props.rate(ratingInfo);
    props.handleClose();
  };

  const [currRating, setCurrRating] = useState<Rating>({ pin: props.pin._id });
  const [error, setError] = useState({});

  const handleRatingChange = (e, type) => {
    setError({});

    setCurrRating({ ...currRating, [type]: e.target.value });
  };

  const getFormErrors = (ratingInfo: Rating) => {
    let newError = {};
    if (!ratingInfo.score || ratingInfo.score < 1 || ratingInfo.score > 5) {
      newError = { ...newError, score: "Please give a valid score (1-5)" };
    }
    if (!ratingInfo.numTaken || ratingInfo.numTaken < 0) {
      newError = { ...newError, numTaken: "Must take more than 0 items" };
    }
    if (ratingInfo.numTaken > props.pin.remainingCount) {
      newError = {
        ...newError,
        numTaken: "Cannot take more than what is left",
      };
    }

    return newError;
  };

  const handleRatingSubmit = () => {
    const newErrors = getFormErrors(currRating);

    if (_.isEmpty(newErrors)) {
      handleRate(currRating);
    } else {
      setError(newErrors);
    }
  };

  return (
    <div>
      <Dialog
        open={props.isOpen}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{`Tell others about ${props.pin.title}`}</DialogTitle>
        <DialogContent className="flex flex-col gap-y-4">
          <TextInput
            label="Give a score (1-5)"
            value={currRating?.score}
            onChange={(e) => {
              handleRatingChange(e, "score");
            }}
            type="number"
            error={error.score}
          />

          <TextInput
            label="How many did you take?"
            value={currRating?.numTaken}
            onChange={(e) => {
              handleRatingChange(e, "numTaken");
            }}
            type="number"
            error={error.numTaken}
          />
        </DialogContent>
        <DialogActions>
          <ButtonContainer>
            <Button onClick={props.handleClose} type="secondary">
              Cancel
            </Button>
            <Button onClick={handleRatingSubmit} type="primary">
              Post
            </Button>
          </ButtonContainer>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default connect(null, { remove: remove })(RatePinModal);
