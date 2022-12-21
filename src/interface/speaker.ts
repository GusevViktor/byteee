import { SessionI } from "./";

export interface SpeakerI {
  id: string;
  name: string;
  icon: string;
  sessions?: SessionI[];
}