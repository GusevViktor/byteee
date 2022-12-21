import React from "react";
import { prepareList } from "./service";
import api, { EVENT_STATUS_DRAFT } from "src/api/api";
import { useParams } from "react-router-dom";
import NotFoundPage from "../404";
import ContentWithInvitation from "./ContentWithInvitation";
import ContentDefault from "./ContentDefault";

const EventLanding: React.FC = (): JSX.Element => {
  const { id } = useParams();
  const events = api.getEventTicket();
  const event = events.find((i) => i.id === id);

  if (event === undefined) {
    return <NotFoundPage />;
  }

  const list = prepareList(
    event.roles,
    event.status,
    event.isRegistered,
    event.isSoldOut
  );

  const isDraftEventWithInvitation = event.status === EVENT_STATUS_DRAFT;
  return (
    <div style={{ background: "#F5F5F5FF" }}>
      {isDraftEventWithInvitation &&
          <ContentWithInvitation event={event} ticketListItem={list}/>}
      {!isDraftEventWithInvitation &&
          <ContentDefault event={event} ticketListItem={list}/>}
    </div>
  );
};
export default EventLanding;