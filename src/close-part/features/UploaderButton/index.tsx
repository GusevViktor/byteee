import React from "react";
import style from "./style.module.scss";
import { Button } from "@viktor666/byteee-kit";


export interface PhotoLoaderProps{
  onChange?: (e: any) => void;
}

const { wrap } = style;


const UploaderButton = ({
  onChange,
} : PhotoLoaderProps) => {
  const hiddenFileInput = React.useRef<HTMLInputElement>(null);
  const handleClick = () => {
    if (hiddenFileInput) {
      hiddenFileInput.current?.click();
    }
  };
  return (
    <div className={wrap}>
      <label className={style.input}>
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={onChange}
          ref={hiddenFileInput}
        />
        <Button
          type="flat"
          theme="violet"
          startIcon={"Image"}
          onClick={handleClick}>Upload
        </Button>
      </label>
    </div>
  );
};

export default UploaderButton;