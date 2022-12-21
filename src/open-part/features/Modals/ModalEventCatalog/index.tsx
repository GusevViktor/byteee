import React from "react";
import styles from "./ModalEventCatalog.module.scss";
import { Icons, Text } from "@viktor666/byteee-kit";
import { ModalBack } from "src/features/Modals";

const { X, Check } = Icons;

interface ListOption {
  value: string;
  label: string;
}

interface ModalEventCatalogProps {
  list: ListOption[];
  selected: string;
  onClick: (selected: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const ModalEventCatalog = (props: ModalEventCatalogProps) => {
  const { list, selected, onClick, isOpen, onClose } = props;

  const { header, modal, cross_icon } = styles;

  const onClickButtonClose = () => {
    onClose();
  };

  const onClickButton = (value: string) => {
    onClick(value);
  };

  return (
    <ModalBack isOpen={isOpen} onClose={onClose}>
      <>
        <div className={modal}>
          <header className={header}>
            <Text as="span" bold size={6} >
              Show first
            </Text>
            <div onClick={onClickButtonClose} className={cross_icon}>
              <X size="m" />
            </div>
          </header>
          {list.map((item) => (
            <button key={item.label} onClick={() => onClickButton(item.value)}>
              <Text as="span" size="m">
                {item.label}
              </Text>
              {selected === item.value && <Check size="m" color="mint600" />}
            </button>
          ))}
        </div>
      </>
    </ModalBack>
  );
};

export default ModalEventCatalog;
