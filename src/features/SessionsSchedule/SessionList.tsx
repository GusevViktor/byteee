import { Session } from "../../api/api";
import React, { useEffect, useRef, useState } from "react";
import { useOutsideClick, useTabletType } from "src/hooks";
import { calcMinutes, changeTimeFormat, isAfterRange } from "src/helpers/date";
import { SessionCardMobile } from "./SessionCardMobile";
import { SessionCard } from "./SessionCard";
import { DetailedInfoCard } from "./DetailedInfoCard";
import { hasSmallDurationSession } from "../../open-part/pages/EventLanding/service";
import moment from "moment";
import style from "./style.module.scss";
import { useSearchParams } from "react-router-dom";
import { scrollTo } from "../../helpers/navigation";

const {
  imgRotate0,
  imgRotate180,
  imgPastSessionRotate0,
  imgPastSessionRotate180
} = style;

interface Props {
  sessions: Session[],
  eventStartTime: string,
  img: string,
  currentTime: number,
}

export const SessionList = ({ sessions, eventStartTime, img, currentTime }: Props):
JSX.Element => {
  let count = 0;
  return <React.Fragment>
    {
      sessions.map((session, index) => {
        if (count === 2) {
          count = 1;
        } else {
          count++;
        }
        const renderClassRotate = (isSessionPast: boolean) => {
          let classRotate;
          switch (count) {
            case 1:
              classRotate = isSessionPast ? imgPastSessionRotate0 : imgRotate0;
              break;
            case 2:
              classRotate = isSessionPast ? imgPastSessionRotate180 : imgRotate180;
              break;
            default:
              throw new Error("Unknown case");
          }
          return classRotate;
        };
        const [
          isOpenSessionDetails,
          setIsOpenSessionDetails
        ] = useState<boolean>(false);
        const isTablet = useTabletType();
        const node = useRef<HTMLDivElement | null>(null);
        const sessionRef = useRef<HTMLDivElement | null >(null);
        const isOutside = useOutsideClick(isOpenSessionDetails, node);
        useEffect(() => {
          isOutside && setIsOpenSessionDetails(false);
        }, [isOutside]);
        const [urlQueryParams] = useSearchParams();
        const preSelectedSession = urlQueryParams.get("session");

        useEffect(() => {
          if (preSelectedSession === session.id && !isOpenSessionDetails) {
            setIsOpenSessionDetails(true);
            scrollTo(sessionRef);
          }

        }, [preSelectedSession]);

        const sessionDate = moment(new Date(session.startTime)).format("MM/DD/YYYY");
        const currentDate = moment().format("MM/DD/YYYY");
        const isSameDateOrAfter = moment(currentDate).isSameOrBefore(sessionDate);
        const startDateTime = new Date(session.startTime).getTime();
        const endDateTime = new Date(session.endTime).getTime();
        const startSessionTime = changeTimeFormat(new Date(startDateTime));
        const endSessionTime = changeTimeFormat(new Date(endDateTime));
        const sessionDurationInMinutes = calcMinutes(startDateTime, endDateTime);
        const calcCardPosition = calcMinutes(startDateTime,
          new Date(eventStartTime).getTime());
        const smallDurationSession = hasSmallDurationSession(sessions);
        const isPastSession = !isSameDateOrAfter
          || (isSameDateOrAfter && isAfterRange(
            currentTime,
            endDateTime
          ));
        const gapBetweenTimelines = smallDurationSession.includes(true)
          ? 66 : 32;
        const heightOfTimeline = 1;
        const spaceBetweenPeriods = gapBetweenTimelines + heightOfTimeline;
        //gap между таймлайнами + 1px высоты таймлайнов верхней границы карточки
        const sessionCardHeight = +((Math.abs(sessionDurationInMinutes) / 15
        ).toFixed(1)) * spaceBetweenPeriods + heightOfTimeline;
        // 1px высоты таймлайнов нижней границы карточки
        const position = +((Math.abs(calcCardPosition) / 15).toFixed(1))
          * spaceBetweenPeriods;
        const isSmallSessionCard = sessionCardHeight <= 85;
        return !isTablet ?
          (
            <div style={{ position: "relative" }}
              key={`card-${index}`}>
              <SessionCardMobile
                title={session.title}
                ref={sessionRef}
                className={renderClassRotate(isPastSession)}
                startTime={startSessionTime}
                endTime={endSessionTime}
                isPastSession={isPastSession}
                key={`session-card-${index}`}
                onClick={() => setIsOpenSessionDetails(true)} />
              <DetailedInfoCard
                title={session.title}
                isPastSession={isPastSession}
                startTime={startSessionTime}
                endTime={endSessionTime}
                description={session.description}
                index={index}
                key={`detailed-card-${index}`}
                ref={node}
                open={isOpenSessionDetails}
                close={() => setIsOpenSessionDetails(false)}
                speaker={session.speaker}
                img={img}
                top={0} />
            </div>
          ) :
          (
            <React.Fragment key={`card-${index}`}>
              <SessionCard
                ref={sessionRef}
                className={renderClassRotate(isPastSession)}
                title={session.title}
                key={`session-card-${index}`}
                isPastSession={isPastSession}
                index={index}
                height={sessionCardHeight}
                top={position}
                onClick={() => setIsOpenSessionDetails(true)}
              />
              <DetailedInfoCard
                isSmallSessionCard={isSmallSessionCard}
                title={session.title}
                startTime={startSessionTime}
                endTime={endSessionTime}
                isPastSession={isPastSession}
                description={session.description}
                index={index}
                key={`detailed-card-${index}`}
                ref={node}
                open={isOpenSessionDetails}
                close={() => setIsOpenSessionDetails(false)}
                speaker={session.speaker}
                img={img}
                top={position} />
            </React.Fragment>
          )
        ;
      })
    }
  </React.Fragment>;
};
