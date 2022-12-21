
import { NotificationsType, RegistrationType } from "src/interface";
import Len from "./img/Bob.png";
import Nicolas from "./img/Ivan.png";
import Maria from "./img/Maria.png";

export const timeToDate = (hour: number, minute: number) => (
  new Date(new Date().setHours(hour, minute))
);

export const speakers = [
  {
    id: "1",
    name: "Len Green",
    icon: Len,
  },
  {
    id: "2",
    name: "Nicolas Norm",
    icon: Nicolas,
  },
  {
    id: "3",
    name: "Maria",
    icon: Maria,
  }
];

export const sessions = [
  {
    id: "111-222",
    name: "Platform features",
    description: "About Platform features and capabilities",
    startTime: timeToDate(10, 0),
    endTime: timeToDate(11, 15),
    speakerId: "1",
  },
  {
    id: "111-2223",
    name: "Inspire inovation",
    description: "About Inspire inovation",
    startTime: timeToDate(11, 30),
    endTime: timeToDate(13, 0),
    speakerId: "1",
  },
  {
    id: "111-2224",
    name: "Empower Talent",
    description: "About Empower Talent",
    startTime: timeToDate(14, 0),
    endTime: timeToDate(19, 0),
    speakerId: "3",
  },
];

export const event = {
  name: "Test Event",
  id: "111-123123",
  date: new Date(),
  startTime: timeToDate(14, 0),
  endTime: timeToDate(19, 0),
  description: "Event Event Event Event Edit",
  cover: "",
  attendeeLimit: 40,
  speakers: speakers,
  sessions: sessions,
  notifications: "all" as NotificationsType,
  welcomeMessage: "",
  timezone: "",
  registrationType: "Public" as RegistrationType,
};