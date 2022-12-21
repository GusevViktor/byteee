export interface SessionI {
  id: string;
  name: string;
  startTime: Date;
  endTime: Date;
  speakerId: string;
  description?: string;
}
