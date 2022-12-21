import React from "react";
import style from "./style.module.scss";
import { Icons, Button } from "@viktor666/byteee-kit";
import event_img from "src/assets/images/event_img.jpeg";
import { Event } from "src/api/api";
import rectangle from "src/assets/icons/rectangle.svg";


export type EMPType = {
  open: boolean,
  setOpen: (arg:boolean) => void,
  setContent: (arg:string) => void,
  event:Event,
  content: string
}
const closePanel = (
  { open,
    setOpen,
    setContent,
    content }:EMPType
) => {

  const {
    Tv: TvIcon,
    TrendingUp: TrendingUpIcon,
    Tool: ToolIcon,
  } = Icons;


  return (
    <div className={style.wrap}>
      <div className={style.content}>
        <div className={style.img} onClick={() => setOpen(!open)} >
          <img src={event_img} alt="img" />
        </div>

        <div className={[
          style.icon, content==="lobby" && style.active
        ].join(" ")}
        onClick={() => setContent("lobby")} >
          {
            content==="lobby" && <img src={rectangle} className={style.rectangle} />
          }
          <TvIcon color="grayscale700" size="m"/>
        </div>
        <div className={[
          style.icon, content==="analytics" && style.active
        ].join(" ")}
        onClick={() => setContent("analytics")} >
          {
            content==="analytics" && <img src={rectangle} className={style.rectangle} />
          }
          <TrendingUpIcon color="grayscale700" size="m" />
        </div>
        <div className={[
          style.icon, content==="settings" && style.active
        ].join(" ")}
        onClick={() => setContent("settings")} >
          {
            content==="settings" && <img src={rectangle} className={style.rectangle} />
          }
          <ToolIcon color="grayscale700" size="m" />
        </div>
        <div className={style.flat_button}>
          <Button theme="violet" type="flat" startIcon="Users">
            {""}
          </Button>
        </div>
        <div className={style.solid_button}>
          <Button theme="mint" type="solid" startIcon="Power">
            {""}
          </Button>
        </div>

      </div>
    </div>

  );
};

export default closePanel;
