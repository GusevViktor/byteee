import React from "react";
import style from "./style.module.scss";
import { CreateEventButton } from "@viktor666/byteee-kit";
import { EventsNavigation } from "./EventsNavigation";
import { EventCard } from "./EventCard";
import api from "src/api/api";

const MyEvents:React.FC = () => {
  const { wrap, create_event } = style;
  const events = api.getEventsList();
  return (
    <div className={wrap}>
      <EventsNavigation/>
      <div className={create_event}>
        <CreateEventButton/>
      </div>
      { events.map((event, index) => <EventCard key={index} event={event}/>) }
    </div>);
};
export default MyEvents;