import React, { ReactElement, useState } from "react";
import { Text, Icons, SelectText } from "@viktor666/byteee-kit";
import style from "./style.module.scss";

const { Calendar, Clock, UserPlus } = Icons;

const list = [

  {
    label: "Last month",
    value: "Last month",
  },
  {
    label: "Last year",
    value: "Last year",
  },
];
const EventAnalytics = (): ReactElement => {
  const [option, setOption] = useState({
    label: "Last month",
    value: "Last month",
  });
  return (
    <div className={style.wrap}>
      <div className={style.title}>
        <Text as={"h4"} size={[6]} bold font="inter">
        My activity
        </Text>
      </div>
      <div className={style.select}>
        <SelectText
          color="violet"
          onClick={(e) => setOption(e)}
          option={option}
          options={list}
          size="s"
        />

      </div>
      <div className={style.activities}>
        <div className={style.activity}>
          <div className={style.icon}>
            <Calendar size="m" color="tangerine700"/>
          </div>
          <div className={style.text}>
            <div>
              <Text size={[5]} bold>5</Text>
            </div>
            <div>
              <Text size={"s"} color="grayscale600" >Total events </Text>
            </div>
          </div>
        </div>
        <div className={style.activity}>
          <div className={style.icon}>
            <Clock size="m" color="tangerine700"/>
          </div>
          <div className={style.text}>
            <div>
              <Text size={[5]} bold>10 h</Text>
            </div>
            <div>
              <Text size={"s"} color="grayscale600" >Total duration</Text>
            </div>
          </div>
        </div>
        <div className={style.activity}>
          <div className={style.icon}>
            <UserPlus size="m" color="tangerine700"/>
          </div>
          <div className={style.text}>
            <div>
              <Text size={[5]} bold>3</Text>
            </div>
            <div>
              <Text size={"s"} color="grayscale600" >New followers</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventAnalytics;
