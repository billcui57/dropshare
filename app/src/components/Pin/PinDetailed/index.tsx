import React, { useState } from "react";
import { Pin } from "src/types/pin";
import classNames from "classnames";
import _ from "lodash";
import { ClickAwayListener } from "@material-ui/core";
import Button from "@/components/Button";
import DeletePinModal from "@/components/Modals/DeletePinModal";

type PinEditProps = {
  title: String;
  lat: Number;
  lng: Number;
  onClickAway: Function;
};

const PinEdit = (props: PinEditProps) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const pinClasses = classNames(
    "rounded-sm transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-32 w-32 bg-white"
  );

  if (!props.lat || !props.lng) {
    return null;
  }

  return (
    <ClickAwayListener onClickAway={props.onClickAway}>
      <React.Fragment>
        <div className={pinClasses}>
          <div>{props.title}</div>
          <div>
            <Button type="primary">Edit</Button>
            <Button type="secondary">Delete</Button>
          </div>
        </div>
        <DeletePinModal />
      </React.Fragment>
    </ClickAwayListener>
  );
};
export default PinEdit;
