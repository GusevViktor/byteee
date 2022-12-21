import React from "react";
import style from "./style.module.scss";
import ScheduleItem, { ScheduleItemI } from "./ScheduleItem";

export interface ScheduleSessionsI {
  sessions: ScheduleItemI[]
}

const ScheduleSessions = (props: ScheduleSessionsI) => {
  const {
    wrap,
  } = style;
  const {
    sessions,
  } = props;

  return (
    <div className={wrap}>
      {sessions.map(session => (
        <ScheduleItem
          key={session.id}
          {...session}
        />
      ))}
    </div>
  );
};

export default ScheduleSessions;
