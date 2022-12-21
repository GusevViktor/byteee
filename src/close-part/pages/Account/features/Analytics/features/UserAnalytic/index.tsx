import { Text, Checkbox } from "@viktor666/byteee-kit";
import React, { ReactElement, useState } from "react";
import style from "./style.module.scss";
import { Chart } from "./Chart";

const UserAnalytic = (): ReactElement => {
  const [attendee, setAttendee] = useState<boolean>(true);
  const [speaker, setSpeaker] = useState<boolean>(false);
  const [organizer, setOrganizer] = useState<boolean>(false);
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

  const data = {
    labels,
    datasets: [
      {
        label: "events as attendee",
        data: [6, 5, 0, 2, 6, 8, 2],
        borderColor: "#FF8300",
        backgroundColor: "#FF8300",
        lineTension: 0.4,
        hidden: !attendee,
      },
      {
        label: "events as speaker",
        data: [0, 0, 1, 4, 3, 4, 5],
        borderColor: "#3E7AFC",
        backgroundColor: "#3E7AFC",
        lineTension: 0.4,
        hidden: !speaker,
      },
      {
        label: "events as organizer",
        data: [0, 0, 0, 1, 2, 2, 1],
        borderColor: "#D44A55",
        backgroundColor: "#D44A55",
        lineTension: 0.4,
        hidden: !organizer,
      },
    ],

  };

  return (
    <div className={style.wrap}>
      <div className={style.title}>
        <Text as={"h4"} size={[6]} bold font="inter">
            How often I{"'"}ve been
        </Text>
      </div>
      <div className={style.yAxes}>
      </div>
      <div className={style.graph}>
        <Chart data={data} />
      </div>
      <div className={style.roles}>
        <div className={style.role}>
          <Checkbox size="m" label="Attendee" name="attendee"
            onChange={() => setAttendee(!attendee)} checked={attendee} />
          <div className={style.tangerine_circle}></div>
        </div>
        <div className={style.role}>
          <Checkbox size="m" label="Speaker" name="speaker"
            onClick={() => setSpeaker(!speaker)} />
          <div className={style.blue_circle}></div>
        </div>
        <div className={style.role}>
          <Checkbox size="m" label="Organizer" name="organizer"
            onClick={() => setOrganizer(!organizer)} />
          <div className={style.red_circle}></div>
        </div>
      </div>
    </div>

  );
};

export default UserAnalytic;
