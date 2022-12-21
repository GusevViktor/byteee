import React, { ReactElement, useRef } from "react";
import style from "./style.module.scss";
import { Button, Text, TextOP } from "@viktor666/byteee-kit";
import people from "src/assets/images/make_public_section.png";
import { useScrollHook } from "src/hooks";

const MakePublicSection = (): ReactElement => {
  const refTextPublic = useRef<HTMLDivElement>(null);
  const startAnimationTextPublic = useScrollHook(
    "textPublic123123123123",
    refTextPublic
  );

  return (
    <div className={style.container}>
      <div className={style.section}>
        <div className={style.section__text} ref={refTextPublic}>
          <div
            className={
              startAnimationTextPublic
                ? `${style.section__title} ${style.titleAnimate}`
                : style.section__title
            }
          >
            <TextOP
              as="h4"
              size={[5, 5, 3, 3, 4, 3, 2]}
              font="sangbleu"
              color="grayscale1000"
              bold
            >
              Make it public
            </TextOP>
          </div>
          <div
            className={
              startAnimationTextPublic
                ? `${style.section__description} ${style.descriptionAnimate}`
                : style.section__description
            }
          >
            <Text size={["m", "m", "l"]} color="grayscale1000">
            An event is not a goal but a way to fulfil your business ambitions. We
            want our platform to become a supportive networking environment where
            people can connect and share expertise. That’s when public profiles come
            in handy.
            </Text>
          </div>
          <div
            className={
              startAnimationTextPublic
                ? `${style.section__button} ${style.buttonAnimate}`
                : style.section__button
            }
          >
            <Button size={"l"}> Discover more features</Button>
          </div>
        </div>
        <div>
          <img src={people} className={style.mockup} />
        </div>
      </div>
    </div>
  );
};
export default MakePublicSection;
