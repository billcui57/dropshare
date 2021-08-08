import React, { useState } from "react";
import Button from "@/components/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Pin } from "src/types/pin";
import { PinService } from "@/services";

type DeletePinModalProps = {
  pin: Pin;
  isOpen: Boolean;
  handleClose: Function;
};

const DeletePinModal = (props: DeletePinModalProps) => {
  const handleDelete = () => {
    PinService.remove(props.pin._id)
      .then((data) => {
        props.handleClose();
      })
      .catch(() => {});
  };

  return (
    <div>
      <Dialog
        open={props.isOpen}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{`Delete ${props.pin.title}?`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This will remove the pin off the maps. Other users will no longer be
            able to see it.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} type="secondary">
            Cancel
          </Button>
          <Button onClick={handleDelete} type="warning">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeletePinModal;