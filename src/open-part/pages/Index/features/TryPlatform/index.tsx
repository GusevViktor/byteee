import style from "./style.module.scss";
import { Button, Text, TextOP } from "@viktor666/byteee-kit";
import macbook from "src/assets/images/macbook.png";
import orange from "src/assets/images/orange_substract_bottomright.svg";
import yellow_triangle from "src/assets/images/yellow_triangle.svg";
import blue_square from "src/assets/images/blue_square.svg";
import React, { ReactElement, useRef } from "react";
import { useScrollHook } from "src/hooks";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const TryPlatform = (): ReactElement => {
  const refBlueSquare = useRef<HTMLImageElement>(null);
  const refYellowTriangle = useRef<HTMLImageElement>(null);
  const startAnimationSquare = useScrollHook("BlueTriangle", refBlueSquare);
  const startAnimationTriangle = useScrollHook("YellowTriangle", refYellowTriangle);

  return (
    <div className={style.container}>
      <div className={style.section}>
        <div className={style.section__text}>
          <div className={style.section__title}>
            <TextOP
              as="h4"
              bold
              font="sangbleu"
              size={[5, 5, 3, 3, 4, 3, 2]}
              color="grayscale1000"
            >
                Try byteee today
            </TextOP>
          </div>
          <div className={style.section__description}>
            <Text size={["m", "m", "l"]}>

                All platform features available right after signup,
                no demos, no trial
                periods, no tricks.
            </Text>
          </div>
          <div className={style.section__button}>
            <Button size={"l"}>Sign up for free</Button>
          </div>
        </div>
        <div className={style.section__images}>
          <LazyLoadImage
            src={macbook}
            effect={"opacity"}
            delayTime={500}
            className={style.mockup}
          />
        </div>
        <img
          src={orange}
          className={
            startAnimationTriangle
              ? `${style.orange} ${style.orangeAnimate}`
              : style.orange
          }
          ref={refYellowTriangle}
        />
        <img
          src={yellow_triangle}
          className={
            startAnimationTriangle
              ? `${style.yellow} ${style.yellowAnimate}`
              : style.yellow
          }
          ref={refYellowTriangle}
        />
        <img
          src={blue_square}
          className={
            startAnimationSquare
              ? `${style.blue} ${style.blueAnimate}`
              : style.blue
          }
          ref={refBlueSquare}
        />
      </div>
    </div>
  );
};
export default TryPlatform;
