import React, { useState } from "react";
import Layout from "src/features/Layout";
import style from "./style.module.scss";
import { Button, Ticket, Text } from "@viktor666/byteee-kit";
import { getArrayTime, TicketListItem } from "./service";
import { Event } from "src/api/api";
import event_img from "../../../assets/images/event_img.jpeg";
import EventInfo from "../../../features/EventInfoCard";
import Schedule from "../../../features/SessionsSchedule";
import { changeTimeFormat } from "src/helpers/date";
import ModalEventRegistration from "./features/Modals/ModalEventRegistration";
import { useModal } from "src/hooks";
import ModalEventSharing from "./features/Modals/ModalEventSharing";

const { media,
  headerInfo,
  img,
  buttons,
  active,
  ticket,
  title,
  content,
  wrap_overflow } = style;

export interface EventLandingContentProps {
  event: Event;
  ticketListItem: TicketListItem[];
}

const ContentDefault = ({ event,
  ticketListItem }: EventLandingContentProps): JSX.Element => {
  const { isOpenModal, closeModal, openModal } = useModal();
  const startDateEvent = new Date(event.startTime);
  const endDateEvent = new Date(event.endTime);
  const startTimeEvent = changeTimeFormat(startDateEvent);
  const endTimeEvent = changeTimeFormat(endDateEvent);
  const [bookmarked, setBookmarked] = useState<boolean>(false);
  return (
    <Layout gridTemplate={true} classNameWrap={wrap_overflow}>
      <div className={media}>
        <div className={headerInfo}>
          <img src={event_img} alt={""} className={img} />
          <Text
            as="h1"
            size={[5, 5, 4, 4, 3, 3, 2]}
            bold
            className={title}>
            {event.title}
          </Text>
          <div className={`${buttons} ${bookmarked && active}`}>
            <Button
              type="flat"
              startIcon="Bookmark"
              size="xs"
              onClick={() => setBookmarked(!bookmarked)}>
              {bookmarked ? "Remove from bookmarks" : "Save as bookmark"}
            </Button>
            <ModalEventSharing />
          </div>
        </div>
      </div>
      <div className={ticket}>
        <Ticket
          status={event.status}
          date={event.date}
          time={`${startTimeEvent}–${endTimeEvent}`}
          organizer={event.organizer}
          src={event.avatar}>
          {ticketListItem.length !== 0 && ticketListItem.map((item, index) => {
            if (item.code === "button") {
              return <Button
                size="s"
                type={item.type}
                disabled={item.disabled}
                onClick={item.action}
                key={index}
              >
                {item.name}
              </Button>;
            }
            if (item.code === "registerButton") {
              return <div key={index}>
                <Button
                  size="s"
                  type={item.type}
                  disabled={item.disabled}
                  onClick={openModal}
                >
                  {item.name}
                </Button>
                <ModalEventRegistration
                  onClose={closeModal}
                  isOpen={isOpenModal}
                />
              </div>;
            }
            throw new Error(`Unknown code ${item.code}`);
          })}
        </Ticket>
      </div>
      <div className={content}>
        <EventInfo event={event} />
        {event.sessions.length !== 0 &&
                            <Schedule
                              sessions={event.sessions}
                              arrayTime={getArrayTime(event)}
                              eventStartTime={event.startTime}
                              eventEndTime={event.endTime}
                              avatar={event.avatar}
                            />
        }
      </div>
    </Layout>
  );
};
export default ContentDefault;