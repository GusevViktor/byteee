import moment from "moment/moment";

export const calcMinutes = (start: number, finish: number): number => (
  (new Date(finish)).getTime() - (new Date(start)).getTime()) / 60000;

export const changeTimeFormat = (date: string | Date) => moment(date).
  format("h:mm a").
  replace("pm", "p.m.").
  replace("am", "a.m.").
  replace(" ", "\u00A0");

export const isInRange = (
  time: Date|number,
  start: Date | number,
  end: Date | number
) => start <= time && time <= end;
export const isAfterRange = (
  time: Date|number,
  end: Date | number
) => time >= end;
