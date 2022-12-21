import { Bookmark, Icons, Role, Status, Text } from "@viktor666/byteee-kit";
import React, { useEffect, useRef, useState } from "react";
import { UserEvent } from "src/api/api";
import classes from "./style.module.scss";
import EventMenu from "../EventMenu";
import { useOutsideClick } from "src/hooks";
const {
  date,
  role,
  info,
  statusSection,
  statusSection_wrap,
  media,
  content,
  title,
  card,
  media_wrap,
  bookmark,
} = classes;

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const { MoreHorizontal } = Icons;

const statusColor = (status: string) => {
  switch (status) {
    case "live":
      return "mint";
    case "upcoming":
      return "blue";
    case "past":
      return "grayscale";
    case "draft":
      return "tangerine";
    default:
      throw new Error("smth is wrong");
  }
};

interface Props {
  event: UserEvent
}

export const EventCard = ({ event }: Props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const renderRole = () => event.roles.map((role, index) => (
    <Role value={role} key={index}/>
  ));
  const node = useRef<HTMLDivElement | null>(null);
  const isOutside = useOutsideClick(openMenu, node);
  useEffect(() => {
    isOutside && setOpenMenu(false);
  }, [isOutside]);
  return(
    <div key={event.id} className={card}>
      <div className={media_wrap}>
        <img src={event.media} className={media}/>
        <div className={bookmark}>
          <Bookmark
            checked={event.bookmarked}
            key={event.id}
          />
        </div>
      </div>
      <div className={content}>
        <div className={title}>
          <Text size={["m", "m", "m", "m", "l"]}>{event.title}</Text>
        </div>
        <div className={info}>
          <div className={date}>
            <Text size={"xs"} color={"grayscale600"}>{event.date}</Text>
            <Text size={"xs"} color={"grayscale600"}>
              {event.startTime} p.m.–{event.endTime} p.m.
            </Text>
          </div>
          <div className={role}>
            {renderRole()}
          </div>
        </div>
      </div>
      <div className={statusSection_wrap}>
        <div className={statusSection}>
          <Status color={statusColor(event.status)}
            text={capitalizeFirstLetter(event.status)} size={"m"}/>
          <div
            onClick={() => setOpenMenu(true)}
            style={{ position: "relative", cursor: "pointer" }}>
            <MoreHorizontal color={"violet800"} size={"m"} />
            <div ref={node}>
              <EventMenu
                roles={event.roles}
                status={event.status}
                openMenu={openMenu}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};