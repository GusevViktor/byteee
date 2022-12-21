import {
  EVENT_ROLE_ATTENDEE,
  EVENT_ROLE_ORGANIZER,
  EVENT_ROLE_SPEAKER, EVENT_STATUS_DRAFT, EVENT_STATUS_LIVE, EVENT_STATUS_PAST,
  EVENT_STATUS_UPCOMING
} from "../../../../../../api/api";
import { useNavigate } from "react-router-dom";
import { getHighestRole } from "src/helpers/getHighestRole";

export interface ListItem {
  type: "link" | "button",
  url?: string
  action?: () => void,
  name: string
}

export const prepareList = (roles: string[], status: string): ListItem[] => {
  const navigate = useNavigate();
  const role = getHighestRole(roles);
  switch (true) {
    case status === EVENT_STATUS_UPCOMING && role === EVENT_ROLE_ATTENDEE:
      return [
        { type: "link", url: "/", name: "Enter event" },
        { type: "link", url: "/", name: "View landing page" },
        {
          type: "button", action: () => {
            navigate("/");
          }, name: "Unregister"
        }
      ];
    case status === EVENT_STATUS_UPCOMING && role === EVENT_ROLE_SPEAKER:
      return [
        { type: "link", url: "/", name: "Enter event" },
        { type: "link", url: "/", name: "View landing page" },
        {
          type: "button", action: () => {
            navigate("/");
          }, name: "Cancel speaking"
        }
      ];
    case status === EVENT_STATUS_UPCOMING && role === EVENT_ROLE_ORGANIZER:
      return [
        { type: "link", url: "/", name: "Enter event" },
        { type: "link", url: "/", name: "View landing page" },
        { type: "link", url: "/", name: "Edit event" },
        { type: "link", url: "/", name: "Duplicate" },
        { type: "link", url: "/", name: "View analytics" },
        {
          type: "button", action: () => {
            navigate("/");
          }, name: "Unpublish"
        }
      ];
    case status === EVENT_STATUS_LIVE && role === EVENT_ROLE_ATTENDEE:
    case status === EVENT_STATUS_LIVE && role === EVENT_ROLE_SPEAKER:
      return [
        { type: "link", url: "/", name: "Enter event" },
        { type: "link", url: "/", name: "View landing page" }
      ];
    case status === EVENT_STATUS_LIVE && role === EVENT_ROLE_ORGANIZER:
      return [
        { type: "link", url: "/", name: "Enter event" },
        { type: "link", url: "/", name: "View landing page" },
        { type: "link", url: "/", name: "Duplicate" },
        { type: "link", url: "/", name: "View analytics" }
      ];
    case status === EVENT_STATUS_PAST && role === EVENT_ROLE_ATTENDEE:
    case status === EVENT_STATUS_PAST && role === EVENT_ROLE_SPEAKER:
      return [
        { type: "link", url: "/", name: "Enter event" },
        { type: "link", url: "/", name: "View landing page" }
      ];
    case status === EVENT_STATUS_PAST && role === EVENT_ROLE_ORGANIZER:
      return [
        { type: "link", url: "/", name: "Enter event" },
        { type: "link", url: "/", name: "View landing page" },
        { type: "link", url: "/", name: "Duplicate" },
        { type: "link", url: "/", name: "View analytics" }
      ];
    case status === EVENT_STATUS_DRAFT && role === EVENT_ROLE_SPEAKER:
      return [
        { type: "link", url: "/", name: "Enter event" },
        {
          type: "button", action: () => {
            navigate("/");
          }, name: "Cancel speaking"
        }
      ];
    case status === EVENT_STATUS_DRAFT && role === EVENT_ROLE_ORGANIZER:
      return [
        { type: "link", url: "/", name: "Enter event" },
        { type: "link", url: "/", name: "Edit event" },
        { type: "link", url: "/", name: "Duplicate" },
        {
          type: "button", action: () => {
            navigate("/");
          }, name: "Delete"
        }
      ];
    case role === undefined:
      return [
        { type: "link", url: "/", name: "View landing page" }
      ];
    default:
      return [];
  }
};
