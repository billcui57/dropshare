import { TextField } from "@material-ui/core";

type TextInputProps = {
  label: string;
  onChange: any;
  type: string;
  className?: string;
  value: string;
};

const TextInput = (props: TextInputProps) => {
  return (
    <div className={props.className}>
      <TextField
        label={props.label}
        value={props.value}
        onChange={props.onChange}
        type={props.type}
        variant="filled"
      />
    </div>
  );
};

export default TextInput;
