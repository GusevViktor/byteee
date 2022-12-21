import React, { useState } from "react";
import { BookmarkedButton, Button, Select, Tag } from "@viktor666/byteee-kit";
import style from "./style.module.scss";
import { ModalTemplate } from "src/close-part/features/Modals";
import { useModal, useTabletType } from "src/hooks";

const {
  wrap,
  select,
  tags,
  bookmarked_button,
  filterEvents,
  modal_filter
} = style;

const list = [

  {
    label: "All roles",
    value: "All roles",
  },
  {
    label: "Organizer",
    value: "Organizer",
  },
  {
    label: "Speaker",
    value: "Speaker",
  },
  {
    label: "Attendee",
    value: "Attendee",
  },
];

const tagsData = [
  {
    value: "Upcoming",
    label: "Upcoming",
  },
  {
    value: "Live",
    label: "Live",
  },
  {
    value: "Draft",
    label: "Draft",
  },
  {
    value: "Past",
    label: "Past",
  },
];

const Form = () => {
  const [activeTag, setActiveTag] = useState<string>("");
  const [bookmarked, setBookmarked] = useState<boolean>(false);
  const [option, setOption] = useState({
    label: "Filter by role",
    value: "All roles",
  });

  const onClickTag = (nameTag: string, active: boolean) => {
    setActiveTag(active ? "" : nameTag);
  };

  return (<>
    <div className={bookmarked_button}>
      <BookmarkedButton
        checked={bookmarked}
        onClick={() => setBookmarked(!bookmarked)}/>
    </div>
    <div className={tags}>
      {tagsData.map(tag => (
        <Tag
          key={tag.value}
          active={tag.value === activeTag}
          onClick={(active) => onClickTag(tag.value, active)}
        >
          {tag.label}
        </Tag>
      ))}
    </div>
    <div className={select}>
      <Select
        onClick={(e) => setOption(e)}
        option={option}
        options={list}
        placeholder="Filter by role"
        size="m"
      />
    </div>
  </>);
};
export const EventsNavigation = () => {
  const { openModal, isOpenModal, closeModal } = useModal();
  const isTablet = useTabletType();

  return (
    <div className={wrap}>
      {
        isTablet
          ?
          <Form/>
          :
          <ModalTemplate
            isOpen={isOpenModal}
            onClose={closeModal}
            className={modal_filter}
            OpenElement={
              <div className={filterEvents}>
                <Button theme={"violet"} type={"flat"} onClick={() => openModal()}
                  startIcon={"Filter"}> Filter events </Button>
              </div>
            }>
            <Form/>
            <Button theme={"violet"} type={"solid"} size={"m"}>Save</Button>
          </ModalTemplate>
      }
    </div>
  );
};