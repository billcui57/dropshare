import {
  FormControl,
  MenuItem,
  InputLabel,
  makeStyles,
} from "@material-ui/core";
import Select from "@material-ui/core/Select";
import React, { ChangeEvent } from "react";

type Option = {
  value: string | number;
  label: string | number;
};

type SelectInputProps = {
  options: Option[];
  value: string | number;
  onChange: any;
  label: string;
  error?: boolean;
  disabled?: boolean;
  className?: string;
};

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 180,
  },
}));

const SelectInput = (props: SelectInputProps) => {
  const classes = useStyles();

  const createMenuItems = () => {
    return props.options.map((option) => {
      return <MenuItem value={option.value}>{option.label}</MenuItem>;
    });
  };

  return (
    <div className={props.className}>
      <FormControl
        error={props.error}
        disabled={props.disabled}
        className={`${classes.formControl} `}
        variant="filled"
      >
        <InputLabel>{props.label}</InputLabel>
        <Select value={props.value} onChange={props.onChange}>
          {createMenuItems()}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectInput;
