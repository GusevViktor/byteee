import React from "react";
import style from "./style.module.scss";
import event_img from "../../../../../assets/images/event_img.jpeg";
import { Button, Text, Ticket } from "@viktor666/byteee-kit";
import EventInfoCard from "../../../../../features/EventInfoCard";
import SessionsSchedule from "../../../../../features/SessionsSchedule";
import api from "../../../../../api/api";
import { getArrayTime } from "../../../../../open-part/pages/EventLanding/service";
import { changeTimeFormat } from "../../../../../helpers/date";
import { useTabletType } from "../../../../../hooks";
import { StepperElementProps } from "../Stepper";
import { useNavigate } from "react-router";

const { wrap, media, content, ticket, img, submit, buttonBack } = style;
const events = api.getEventTicket();
const event = events[0];
const EventPreview = ({ changeStep }: StepperElementProps) => {
  const startDateEvent = new Date(event.startTime);
  const endDateEvent = new Date(event.endTime);
  const startTimeEvent = changeTimeFormat(startDateEvent);
  const endTimeEvent = changeTimeFormat(endDateEvent);
  const isTablet = useTabletType();
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Button
        className={buttonBack}
        type="flat"
        startIcon="ChevronLeft"
        onClick={() => changeStep(2)}>
        Lineup
      </Button>
      <div className={wrap}>
        <div className={media}>
          <img src={event_img} alt={""} className={img} />
          <Text as="h1" size={[5, 5, 4, 4, 3, 3, 2]} bold>{event.title}</Text>
        </div>
        <div className={ticket}>
          <Ticket
            organizer={event.organizer}
            date={event.date}
            time={`${startTimeEvent}–${endTimeEvent}`}
            src={event.avatar}
          />
        </div>
        <div className={content}>
          <EventInfoCard event={event} />
          {event.sessions.length !== 0 &&
          <SessionsSchedule
            eventEndTime={event.endTime}
            sessions={event.sessions}
            arrayTime={getArrayTime(event)}
            eventStartTime={event.startTime}
            avatar={event.avatar} />
          }
        </div>
      </div>
      <div className={submit}>
        <Button
          htmlType="submit"
          type={isTablet ? "flat" : "outline"}
          onClick={() => navigate("/event-creation/?type=draft")}
        >
          Save as draft
        </Button>
        <Button
          htmlType="submit"
          onClick={() => navigate("/event-creation/?type=published")}
        >
          Publish
        </Button>
      </div>
    </React.Fragment>
  );
};
export default EventPreview;