import React from "react";
import style from "./style.module.scss";
import { Icons, Text, Status, Button } from "@viktor666/byteee-kit";
import event_img from "src/assets/images/event_img.jpeg";
import { Event } from "src/api/api";
import rectangle from "src/assets/icons/rectangle.svg";
import { changeTimeFormat } from "src/helpers/date";

export type EMPType = {
  open: boolean,
  setOpen: (arg:boolean) => void,
  event:Event,
  setContent: (arg:string) => void,
  content: string
}
const OpenPanel = (
  { event,
    open,
    setOpen,
    setContent,
    content }:EMPType
) => {

  const {
    Tv: TvIcon,
    TrendingUp: TrendingUpIcon,
    Tool: ToolIcon,
    Calendar: CalendarIcon,
  } = Icons;

  return (
    <div className={style.wrap}>
      <div className={style.content}>
        <div className={style.img} onClick={() => setOpen(!open)} >
          <img src={event_img} alt="img" />
        </div>
        <div className={style.title}>
          <Text size="m">
            {event.title}
          </Text>
        </div>
        <div className={style.date}>
          <div className={style.calendar_icon}>
            <CalendarIcon color="grayscale700" />
          </div>
          <Text size="xs" color="grayscale700">
            {event.date}
          </Text>
          <div className={style.ellipse}></div>
          <div className={style.start_end_time}>
            <Text size="xs" color="grayscale700">
              {changeTimeFormat(event.startTime)}{"-"}{changeTimeFormat(event.endTime)}
            </Text>
          </div>
        </div>
        <div className={style.status}>
          <Status color="blue" text={event.status} size="m" />
        </div>
        <div className={style.icons}>
          <div className={[
            style.icon, content==="lobby" && style.active
          ].join(" ")}
          onClick={() => setContent("lobby")}>
            {
              content==="lobby" && <img src={rectangle} className={style.rectangle} />
            }
            <TvIcon color="grayscale700" size="m"/>
            <Text size="m" className="text" color="grayscale700">
              Lobby and Stage
            </Text>
          </div>
          <div className={[
            style.icon, content==="analytics" && style.active
          ].join(" ")}
          onClick={() => setContent("analytics")}>
            {
              content==="analytics" && <img src={rectangle} className={style.rectangle} />
            }
            <TrendingUpIcon color="grayscale700" size="m"/>
            <Text size="m" className="text" color="grayscale700">
              Analytics
            </Text>
          </div>
          <div className={[
            style.icon, content==="settings" && style.active
          ].join(" ")}
          onClick={() => setContent("settings")}>
            {
              content==="settings" && <img src={rectangle} className={style.rectangle} />
            }
            <ToolIcon color="grayscale700" size="m"/>
            <Text size="m" className="text" color="grayscale700">
              Event settings
            </Text>
          </div>
        </div>
        <div className={style.flat_button}>
          <Button theme="violet" type="flat" startIcon="Users">
            Manage my team
          </Button>
        </div>
        <div className={style.solid_button}>
          <Button theme="mint" type="solid" startIcon="Power">
          Start event
          </Button>
        </div>
      </div>
    </div>

  );
};

export default OpenPanel;
