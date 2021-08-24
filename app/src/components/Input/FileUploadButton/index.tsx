import classNames from "classnames";
import Button from "@/components/Input/Button";
import { useRef } from "react";
import React from "react";

type FileUploadButtonProps = {
  type: string;
  children: any;
  className?: string;
  onSubmit: Function;
};

const FileUploadButton = (props: FileUploadButtonProps) => {
  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = async (event) => {
    const fileUploaded = event.target.files[0];
    const uploadedImageBase64 = await convertFileToBase64(fileUploaded);
    props.onSubmit(uploadedImageBase64);
  };

  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
    });
  };

  return (
    <div className={props.className}>
      <Button onClick={handleClick} type={props.type}>
        {props.children}
      </Button>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default FileUploadButton;
