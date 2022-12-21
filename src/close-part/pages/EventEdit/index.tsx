import Layout from "src/close-part/features/Layout";
import React, { useState } from "react";
import style from "./style.module.scss";
import Content from "./EventManagmentPanel/features/content";
import EventManagmentPanel from "src/close-part/pages/EventEdit/EventManagmentPanel";
import api from "src/api/api";
import { Button } from "@viktor666/byteee-kit";

export type EMPType = {
  open: boolean,
  setOpen: (arg:boolean) => void,
  setContent: (arg:string) => void,
  event:Event,
}

const EventCreation = () => {
  const [open, setOpen] = useState(true);
  const [content, setContent] = useState("settings");
  const events = api.getEventTicket();
  const event = events[0];

  return (
    <Layout>
      <>
        <div className={style.button_wrap}>
          <Button
            size="m"
            type="solid"
            theme="white"
            startIcon="Grid"
          >
            Manage your event
          </Button>
        </div>
        <div className={[
          style.panel,
          open? style.openPanel : style.closePanel
        ].join(" ")}>
          <EventManagmentPanel event={event} open={open} content={content}
            setOpen={setOpen} setContent={setContent} />
        </div>
        <div className={[
          open ? style.open_content : style.close_content,
          style.content,
        ].join(" ")}>
          <Content content={content} />
        </div>
      </>
    </Layout>
  );
};
export default EventCreation;
