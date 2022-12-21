import React, { useState } from "react";
import styles from "./style.module.scss";
import { Text, Button, Icons } from "@viktor666/byteee-kit";
import { useModal } from "src/hooks";

import { ModalEventCatalog } from "src/open-part/features/Modals";

const { ChevronDown } = Icons;

const Sorting = () => {
  const [isOpenSelect, setOpenSelect] = useState(false);

  const [selected, setSelected] = useState("Most popular");

  const { openModal, isOpenModal, closeModal } = useModal();

  const {
    description,
    sort_mobile,
    select_modal,
    select__open,
    sort_tablet,
    select,
    button__check,
    button,
    arrow_icon,
    arrow_icon__open,
  } = styles;

  const list = [
    {
      label: "Earliest",
      value: "Earliest",
    },
    {
      label: "Last created",
      value: "Last created",
    },
    {
      label: "Most popular",
      value: "Most popular",
    },
  ];

  const onClickButton = (value: string) => setSelected(value);

  const onClickSelect = () => setOpenSelect(!isOpenSelect);

  return (
    <div>
      <ModalEventCatalog
        onClick={onClickButton}
        list={list}
        selected={selected}
        onClose={closeModal}
        isOpen={isOpenModal}
      />
      <div className={sort_mobile}>
        <Text size = "m">
          <span className={description}>Show&nbsp;first</span>
        </Text>
        <Button
          type="flat"
          theme="violet"
          size="m"
          onClick={() => openModal()}
        >
          {selected}
        </Button>
      </div>
      <div className={sort_tablet}>
        <Text size = "m">
          <span className={description}>Show first</span>
        </Text>
        <div
          className={[select, isOpenSelect ? select__open : ""].join(" ")}
          onClick={onClickSelect}
        >
          {selected}
          <div
            className={[arrow_icon, isOpenSelect ? arrow_icon__open : ""].join(" ")}
          >
            <ChevronDown size="m" color="grayscale600" />
          </div>
          {isOpenSelect && (
            <div className={select_modal}>
              {list.map((item) => (
                <button
                  key={item.label}
                  onClick={() => onClickButton(item.value)}
                  className={[
                    button,
                    item.value === selected ? button__check : "",
                  ].join(" ")}
                >
                  <Text size = "m" as="span">{item.label}</Text>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sorting;
