import ModalTemplate from "../ModalTemplate";
import React, { useState } from "react";
import { Button, PhotoUploader, Text } from "@viktor666/byteee-kit";
import style from "./style.module.scss";
import { useModal } from "src/hooks";
import UploaderButton from "src/close-part/features/UploaderButton";
import { fileReader } from "src/helpers/fileReader";

const { title, submit, buttons, avatar } = style;

export interface ModalProps {
  onSave?: (file?: string) => void;
  OpenElement:(open : () => void) => React.ReactNode;
  file?:string;
  setFile?: (file: string | undefined) => void;
}

export interface UploaderProps {
  onClickEdit?: () => void;
  onChange?: (file?: File) => void;
  imageFile?: string;
}

const UploaderImage = ({ onClickEdit, onChange, imageFile }: UploaderProps) => (
  <PhotoUploader
    onChange={(e) => {
      onChange && onChange(e?.currentTarget?.files?.[0]);
    }}
    readonly={true}
    srcImage={imageFile}
    onClickEdit={onClickEdit}
  />);

const UploadAvatarModal = ({ onSave, OpenElement, file }: ModalProps) => {
  const [localFile, setLocalFile] = useState<string| undefined>(file);
  const { isOpenModal, closeModal, openModal } = useModal();
  return (
    <ModalTemplate isOpen={isOpenModal} onClose={() => {
      closeModal();
      setLocalFile(file);
    }}
    OpenElement={OpenElement(openModal)}>
      <div className={title}>
        <Text size={[6, 6, 4]} bold>Change photo</Text>
      </div>
      <div className={avatar}>
        <UploaderImage imageFile={localFile}/>
      </div>
      <div className={buttons}>
        <UploaderButton onChange={(e) => {
          fileReader(e, setLocalFile);
        }}/>
        <Button type="flat" theme="violet" startIcon={"Trash_2"}
          onClick={() => setLocalFile(undefined)}>Delete</Button>
      </div>
      <div className={submit}>
        <Button type="solid" theme="violet" size={"m"} onClick={() => {
          onSave && onSave(localFile);
        }}>
          Save
        </Button>
      </div>
    </ModalTemplate>
  );
};
export default UploadAvatarModal;