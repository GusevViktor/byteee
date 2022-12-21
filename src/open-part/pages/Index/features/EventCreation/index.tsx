import React, { ReactElement, useRef } from "react";
import { Button, Text, TextOP } from "@viktor666/byteee-kit";
import style from "./style.module.scss";
import pad from "src/assets/images/pad.png";
import orange from "src/assets/images/orange_substract_bottomleft.svg";
import orange_top_right from "src/assets/images/orange_substract_topright.svg";
import green from "src/assets/images/green_triangle_topleft.svg";
import yellow from "src/assets/images/yellow_figure.svg";
import dark_blue from "src/assets/images/dark_blue_substract_bottomright.svg";
import green2 from "src/assets/images/green_substract_bottomleft.svg";
import { useScrollHook } from "src/hooks";

const EventCreation = (): ReactElement => {
  const refYellow = useRef<HTMLImageElement>(null);
  const refBlue = useRef<HTMLImageElement>(null);
  const refText = useRef<HTMLImageElement>(null);

  const startAnimationYellow = useScrollHook("imgYellow", refYellow);
  const startAnimationBlue = useScrollHook("imgBlue", refBlue);
  const startAnimationText = useScrollHook("text", refText);

  return (
    <>
      <div className={style.container}>
        <div className={style.section}>
          <div className={style.section__text} ref={refText}>
            <div
              className={
                startAnimationText
                  ? `${style.section__title} ${style.titleAnimate}`
                  : style.section__title
              }
            >
              <TextOP size={[5, 5, 4, 4, 4, 3, 2]} bold>
                Event creation made easy
              </TextOP>
            </div>
            <div
              className={
                startAnimationText
                  ? `${style.section__description} ${style.descriptionAnimate}`
                  : style.section__description
              }
            >
              <Text size={["m", "m", "m", "l"]}>
                We are proud to present a simple and fun event creation tool. Fully
                customizable for your needs.
              </Text>
            </div>
            <div
              className={
                startAnimationText
                  ? `${style.section__button} ${style.buttonAnimate}`
                  : style.section__button
              }
            >
              <Button size={"l"}> Create event</Button>
            </div>
          </div>
          <div className={style.section__images}>
            <img src={pad} className={style.mockup} alt={""} />
            <img
              src={orange}
              alt={""}
              className={
                startAnimationYellow
                  ? `${style.orange} ${style.orangeAnimate}`
                  : style.orange
              }
            />
            <img
              src={yellow}
              alt={""}
              className={
                startAnimationYellow
                  ? `${style.yellow} ${style.yellowAnimate}`
                  : style.yellow
              }
              ref={refYellow}
            />
            <img
              src={green}
              alt={""}
              className={
                startAnimationYellow
                  ? `${style.green} ${style.greenAnimate}`
                  : style.green
              }
            />
          </div>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.newSection}>
          <div className={style.newSection__title}>
            <TextOP size={[5, 5, 4, 4, 3, 2]} bold>
            It’s your journey – <br />
            and we’re here to guide you.
            </TextOP>
          </div>
          <img
            src={orange_top_right}
            alt={""}
            className={
              startAnimationBlue
                ? `${style.orangeNew} ${style.orangeNewAnimate}`
                : style.orangeNew
            }
          />
          <img
            src={green2}
            alt={""}
            className={
              startAnimationBlue
                ? `${style.greenNew} ${style.greenNewAnimate}`
                : style.greenNew
            }
          />
          <img
            src={dark_blue}
            alt={""}
            className={
              startAnimationBlue
                ? `${style.darkBlue} ${style.darkBlueAnimate}`
                : style.darkBlue
            }
            ref={refBlue}
          />
        </div>
      </div>
    </>
  );
};
export default EventCreation;
