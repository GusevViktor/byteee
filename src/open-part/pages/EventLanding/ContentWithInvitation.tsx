import React, { useState } from "react";
import Layout from "src/features/Layout";
import style from "./style.module.scss";
import { Button, Ticket, Text } from "@viktor666/byteee-kit";
import { getArrayTime } from "./service";
import event_img from "../../../assets/images/event_img.jpeg";
import EventInfo from "../../../features/EventInfoCard";
import Schedule from "../../../features/SessionsSchedule";
import { useParams } from "react-router-dom";
import { changeTimeFormat } from "src/helpers/date";
import ModalEventRegistration from "./features/Modals/ModalEventRegistration";
import { useModal, useDesktopType } from "src/hooks";
import ModalEventSharing from "./features/Modals/ModalEventSharing";
import { InvitationToSpeaker } from "./features/InvitationToSpeaker";
import { EventLandingContentProps } from "./ContentDefault";

const { headerInfo,
  img,
  title,
  buttons,
  active,
  invitation,
  ticket_with_invitation,
  content_with_invitation,
  media_with_invitation,
  internalGrid,
  wrap_overflow } = style;

const ContentWithInvitation = ({ event,
  ticketListItem }: EventLandingContentProps ): JSX.Element => {
  const { isOpenModal, closeModal, openModal } = useModal();
  const isDesktop = useDesktopType();
  const startDateEvent = new Date(event.startTime);
  const endDateEvent = new Date(event.endTime);
  const startTimeEvent = changeTimeFormat(startDateEvent);
  const endTimeEvent = changeTimeFormat(endDateEvent);
  const [bookmarked, setBookmarked] = useState<boolean>(false);
  const { id } = useParams();
  return (
    <React.Fragment>
      <Layout gridTemplate={true} classNameWrap={wrap_overflow}>
        <div
          className={internalGrid}>
          <div className={media_with_invitation}>
            <div className={headerInfo}>
              <img src={event_img} alt={""} className={img} />
              <Text
                as="h1"
                size={[5, 5, 4, 4, 3, 3, 2]}
                bold
                className={title}>{
                  event.title}
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
          <div className={ticket_with_invitation}>
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
          <div className={content_with_invitation}>
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
        </div>
        {
          isDesktop && <div className={invitation}>
            <InvitationToSpeaker
              eventType={id === "7" ? "private" : "public"}
              sessions={event.sessions}
            />
          </div>
        }
      </Layout>
      {
        !isDesktop &&
          <InvitationToSpeaker
            eventType={id === "7" ? "private" : "public"}
            sessions={event.sessions}
          />
      }
    </React.Fragment>
  );
};
export default ContentWithInvitation;