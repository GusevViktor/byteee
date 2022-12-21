import { getHighestRole } from "src/helpers/getHighestRole";
import { useNavigate } from "react-router-dom";
import {
  EVENT_ROLE_ATTENDEE,
  EVENT_ROLE_ORGANIZER,
  EVENT_ROLE_SPEAKER, EVENT_STATUS_LIVE, EVENT_STATUS_PAST,
  EVENT_STATUS_UPCOMING, Event, Session
} from "src/api/api";
import { calcMinutes, changeTimeFormat } from "src/helpers/date";


export interface TicketListItem {
  code: "button" | "registerButton",
  type: "solid" | "outline",
  action?: () => void,
  name: string,
  disabled?: boolean | undefined,
}


export const prepareList = (
  roles: string[],
  status: string,
  isRegistered: boolean,
  isSoldOut: boolean
): TicketListItem[] | [] => {
  const navigate = useNavigate();
  const role = getHighestRole(roles);
  switch (true) {
    case status === EVENT_STATUS_UPCOMING
    && role === EVENT_ROLE_ATTENDEE
    && !isRegistered && !isSoldOut:
      return [
        {
          code: "registerButton",
          type: "solid",
          name: "Register"
        }
      ];
    case status === EVENT_STATUS_UPCOMING
    && role === EVENT_ROLE_ATTENDEE
    && !isRegistered && isSoldOut:
      return [
        {
          code: "button",
          type: "solid",
          disabled: true,
          action: () => {
            navigate("/");
          }, name: "Sold out"
        }
      ];
    case status === EVENT_STATUS_UPCOMING
    && role === EVENT_ROLE_ATTENDEE
    && isRegistered:
      return [
        {
          code: "button",
          type: "solid", action: () => {
            navigate("/");
          }, name: "Enter event"
        },
        {
          code: "button",
          type: "outline", action: () => {
            navigate("/");
          }, name: "Unregister"
        }
      ];
    case status === EVENT_STATUS_UPCOMING
    && role === EVENT_ROLE_SPEAKER
    && isRegistered:
      return [
        {
          code: "button",
          type: "solid", action: () => {
            navigate("/");
          }, name: "Enter event"
        },
        {
          code: "button",
          type: "outline", action: () => {
            navigate("/");
          }, name: "Cancel speaking"
        }
      ];
    case status === EVENT_STATUS_UPCOMING
    && role === EVENT_ROLE_ORGANIZER
    && isRegistered:
      return [
        { code: "button",
          type: "solid", action: () => {
            navigate("/");
          }, name: "Enter event" },
        {
          code: "button",
          type: "outline", action: () => {
            navigate("/");
          }, name: "Unpublish"
        }
      ];
    case status === EVENT_STATUS_LIVE
    && role === EVENT_ROLE_ATTENDEE
    && !isRegistered && !isSoldOut:
      return [
        {
          code: "button",
          type: "solid", action: () => {
            navigate("/");
          }, name: "Register"
        }
      ];
    case status === EVENT_STATUS_LIVE
    && role === EVENT_ROLE_ATTENDEE
    && !isRegistered && isSoldOut:
      return [
        {
          code: "button",
          type: "solid",
          disabled: true,
          action: () => {
            navigate("/");
          }, name: "Sold out"
        }
      ];
    case status === EVENT_STATUS_LIVE
    && role === EVENT_ROLE_ATTENDEE
    && isRegistered:
    case status === EVENT_STATUS_LIVE
    && role === EVENT_ROLE_SPEAKER
    && isRegistered:
    case status === EVENT_STATUS_LIVE
    && role === EVENT_ROLE_ORGANIZER
    && isRegistered:
      return [
        {
          code: "button",
          type: "solid", action: () => {
            navigate("/");
          }, name: "Enter event"
        }
      ];
    case status === EVENT_STATUS_PAST && isRegistered:
      return [
        {
          code: "button",
          type: "solid", action: () => {
            navigate("/");
          }, name: "Enter event"
        }
      ];
    default:
      return [];
  }
};


export const hasSmallDurationSession = (sessions: Session[]) => sessions.map(
  (session) => {
    const startTime = new Date(session.startTime).getTime();
    const endTime = new Date(session.endTime).getTime();
    const timeSession = calcMinutes(endTime, startTime);
    return Math.abs(timeSession) <= 15;
  }
);

export const getArrayTime = (event: Event) => {
  const startDateEvent = new Date(event.startTime);
  const endDateEvent = new Date(event.endTime);
  const arrayTime: string[] = [];

  for (let i = startDateEvent.getTime(); i <= endDateEvent.getTime();
    i += 15 * 60000) {
    const date = new Date(i);
    const time = changeTimeFormat(date);
    arrayTime.push(time);
  }
  return arrayTime;
};