import React, { ReactElement } from "react";
import { Button, Text, TextOP } from "@viktor666/byteee-kit";
import style from "./style.module.scss";
import girl from "src/assets/images/girl.png";
import event from "src/assets/images/event.png";
import orange_figure from "src/assets/images/orange_substract_bottomright.svg";
import blue_figure from "src/assets/images/blue_triangle_bottomleft.svg";
import white_figure from "src/assets/images/white_figure.svg";

const Banner = (): ReactElement => (
  <div className={style.container}>
    <div className={style.section}>
      <div className={style.banner__title}>
        <TextOP
          size={[4, 4, 4, 3, 3, 2, 1]}
          bold
          color={"white"}
          font={"sangbleu"}>
          Virtual event management platform
        </TextOP>
      </div>
      <div className={style.banner__description}>
        <Text size={["m", "m", "m", "m", "l"]} font={"inter"} color={"white"}>
        From enterprise-scale meetings to international conferences to online cooking
        style – you can host any type of events on byteee.
        </Text>
        <Text size={["m", "m", "m", "m", "l"]} font={"inter"} color={"white"}>
        Sign up and fiddle with all the platform features right now, with no payment
        or strings attached.
        </Text>
      </div>
      <div className={style.banner__button}>
        <Button size={"l"}>Sign up for free!</Button>
      </div>
      <div id="wrap-js">
        <img
          src={girl}
          className={`${style.girl} ${style.girlAnimate}`}
        />
        <img
          src={event}
          className={`${style.event} ${style.eventAnim}`}
        />
        <img
          src={orange_figure}
          className={`${style.orange} ${style.orangeAnimate}`}
        />
        <img
          src={blue_figure}
          className={`${style.blue} ${style.blueAnimate}`}
        />
        <img
          src={white_figure}
          className={`${style.white} ${style.whiteAnimate}`}
        />
      </div>
    </div>
  </div>
);
export default Banner;
