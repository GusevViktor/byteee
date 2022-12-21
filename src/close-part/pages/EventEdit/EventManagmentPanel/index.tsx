import React from "react";
import style from "./style.module.scss";
import ClosePanel from "./features/closePanel";
import OpenPanel from "./features/openPanel";
import { Event } from "src/api/api";

export type EMPType = {
  open: boolean,
  setOpen: (arg:boolean) => void,
  setContent: (arg:string) => void,
  event:Event,
  content: string
}
const EventManagmentPanel = ( {
  event,
  open,
  setOpen,
  setContent,
  content
}:EMPType) => (
  <div className={
    [style.wrap,
      open ? style.openWrap : style.closeWrap
    ].join(" ")
  } >
    <div>
      {open ?
        <OpenPanel event={event} open={open} content={content}
          setOpen={setOpen} setContent={setContent} />
        : <ClosePanel event={event} open={open} content={content}
          setOpen={setOpen} setContent={setContent}/>}
    </div>
  </div>

);

export default EventManagmentPanel;
