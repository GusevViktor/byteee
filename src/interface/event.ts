import { SpeakerI, SessionI } from "./";


export type NotificationsType = "speakers" | "attendees" | "all";
export type RegistrationType = "public" | "private";
export interface EventI {
  name: string;
  id: string;
  date: Date;
  startTime: Date;
  endTime: Date;
  registrationType: RegistrationType;
  description?: string;
  cover?: string;
  attendeeLimit?: number;
  speakers: SpeakerI[];
  sessions: SessionI[];
  notifications?: NotificationsType;
  welcomeMessage?: string;
  timezone: string;
}
