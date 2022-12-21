import { EVENT_ROLE_ATTENDEE, EVENT_ROLE_ORGANIZER, EVENT_ROLE_SPEAKER } from "../api/api";

export const getHighestRole = (roles: string[]): string | undefined => {
  if (roles.includes(EVENT_ROLE_ORGANIZER)) return EVENT_ROLE_ORGANIZER;
  if (roles.includes(EVENT_ROLE_SPEAKER)) return EVENT_ROLE_SPEAKER;
  if (roles.includes(EVENT_ROLE_ATTENDEE)) return EVENT_ROLE_ATTENDEE;
  return undefined;
};