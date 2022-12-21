import React, { useState } from "react";
import style from "./style.module.scss";
import { Text } from "@viktor666/byteee-kit";
import { Session } from "src/api/api";
import { useTabletType } from "src/hooks";
import { TimeLine } from "./TimeLine";
import { SessionList } from "./SessionList";
import { hasSmallDurationSession } from "../../open-part/pages/EventLanding/service";
import moment from "moment/moment";
import { AnimatedLiveTimeline } from "./AnimatedLiveTimeline";

const { title, wrap } = style;

interface ScheduleProps {
  sessions: Session[];
  arrayTime: string[];
  eventStartTime: string;
  eventEndTime: string;
  avatar: string;
}

const getCurrentTime = () => moment().valueOf();

const Schedule = ({
  sessions,
  arrayTime,
  eventStartTime,
  eventEndTime,
  avatar
}: ScheduleProps): JSX.Element => {
  let count = 0;
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const startTime = new Date(eventStartTime).getTime();
  const endTime = new Date(eventEndTime).getTime();
  const isTablet = useTabletType();
  const smallDurationSession = hasSmallDurationSession(sessions);
  const spaceBetweenTimelines = smallDurationSession.includes(true) ?
    66 : 32;

  const renderTimeLines = () => arrayTime.map((time, index) => {
    let component;
    switch (count) {
      case 0:
        component = <TimeLine key={index} size="time" time={time} />;
        break;
      case 1:
        component = <TimeLine key={index} size="s" />;
        break;
      case 2:
        component = <TimeLine key={index} size="m" />;
        break;
      case 3:
        component = <TimeLine key={index} size="s" />;
        break;
      default:
        throw new Error("Unknown case");
    }
    if (count === 3) {
      count = 0;
    } else {
      count++;
    }
    return component;
  });


  return (
    <div className={wrap}>
      <div className={title}>
        <Text size={6} bold key={"title-0"}>Schedule</Text>
      </div>
      {isTablet ?
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: spaceBetweenTimelines,
          position: "relative"
        }}>
          {renderTimeLines()}
          <AnimatedLiveTimeline
            startTime={startTime}
            currentTime={currentTime}
            setCurrentTime={setCurrentTime}
            endTime={endTime}
            spaceBetweenTimelines={spaceBetweenTimelines}
          />
          <SessionList
            currentTime={currentTime}
            sessions={sessions}
            eventStartTime={eventStartTime}
            img={avatar}/>
        </div>
        :
        <div>
          <SessionList
            sessions={sessions}
            currentTime={currentTime}
            eventStartTime={eventStartTime}
            img={avatar}/>
        </div>
      }
    </div>
  );
};
export default Schedule;