import { TextField } from "@material-ui/core";

type TextInputProps = {
  label: string;
  onChange: any;
  type: string;
  className?: string;
  value: string | number;
  error?: string;
  disabled?: boolean;
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
        error={!!props.error}
        helperText={props.error}
        disabled={props.disabled}
      />
    </div>
  );
};

export default TextInput;
