import React, { ReactElement, useEffect, useRef, useState, useCallback } from "react";
import style from "./style.module.scss";
import { Text } from "@viktor666/byteee-kit";
import arrowUp from "src/assets/images/arrow_up.svg";
import blue_triangle from "src/assets/images/blue_triangle_bottomleft.svg";
import yellow_figure from "src/assets/images/yellow_bottom_right.svg";
import { useScrollHook } from "src/hooks";
import Lottie from "react-lottie-player";

export const AnimationStep = ({ index }:{index:number|string}) => {
  const [animationState, setAnimationStates] = useState<any>();
  const stepRef = useRef<any>();

  const AnimationSteps = useCallback( async () => {
    if (stepRef.current !== index) {
      setAnimationStates(null);
      const animation = await import(`../../lottie/${index}.json`);
      stepRef.current = index;
      setAnimationStates(animation);
    }
  }, [index]);

  useEffect(() => {
    AnimationSteps();
  }, [index]);

  const lottieAnimation = () => {
    if (index === 4) {
      return (
        <div className={style.broadcastAnim}>
          <video width="387" height="300"
            autoPlay
            loop
            className={style.video}>
            <source src={process.env.PUBLIC_URL + "/movie.mp4"}
              type="video/mp4"/>
          </video>
          <Lottie
            loop
            animationData={animationState}
            className={style.chat}
            play
          />
        </div>);
    } else return (<Lottie
      loop
      animationData={animationState}
      className={style.lottie}
      play
    />);
  };

  return animationState ?
    lottieAnimation()
    :
    <picture>
      <source
        srcSet={process.env.PUBLIC_URL + `/img/step${index}.webp`}
        type={"image/webp"}/>
      <img src={process.env.PUBLIC_URL + `/img/step${index}.png`}
        className={style.imageTemplate}/>
    </picture>;
};

const FiveSteps = (): ReactElement => {
  const refBlueTriangle = useRef<HTMLImageElement>(null);
  const refYellowCircle = useRef<HTMLImageElement>(null);
  const startAnimationTriangle = useScrollHook(
    "BlueTriangleInSteps",
    refBlueTriangle
  );
  const startAnimationCircle = useScrollHook("YellowCircle", refYellowCircle);
  const [expanded, setExpanded] = useState<string | false>("1");
  //В качестве состояния используется JSON

  const handleChange = (id: string) => {
    setExpanded(expanded === id ? "1" : id);
  };

  const accordion = (
    id: string,
    title: ReactElement | string,
    content: ReactElement | string
  ) => (
    <div
      className={[expanded === id ? style.stepLine : "", style.accordion].join(
        " "
      )}
      onClick={() => handleChange(id)}
    >
      <div>
        <div
          className={
            expanded === id ? style.step__title : style.step__titleViolet
          }
        >
          {title}
        </div>
        {expanded === id && (
          <div className={style.step__description}>{content}</div>
        )}
      </div>
      <img
        src={arrowUp}
        className={expanded === id ? style.arrowUp : style.arrowDown}
      />
    </div>
  );


  return (
    <div className={style.container}>
      <div className={style.section}>
        <img
          src={blue_triangle}
          className={
            startAnimationTriangle
              ? `${style.blueTriangle} ${style.blueTriangleAnimate}`
              : style.blueTriangle
          }
          ref={refBlueTriangle}
        />
        <img
          src={yellow_figure}
          className={
            startAnimationCircle
              ? `${style.yellowFigure} ${style.yellowFigureAnimate}`
              : style.yellowFigure
          }
          ref={refYellowCircle}
        />
        <div className={style.section__title}>
          Five steps to get <br /> where you need to be
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className={style.section__steps}>
            <div className={style.step}>
              {accordion(
                "1",
                <div>One-step signup</div>,
                <Text size={"m"}>
                  No lengthy forms, no unnecessary personal details. You only need to
                  provide your email address to participate in any event. Add your
                  full name to unlock full platform functionality, including creating
                  events.
                </Text>
              )}

              {accordion(
                "2",
                <div>Creating an event</div>,
                <Text size={"m"}>
                  One screen to rule them all! Fill in the event name, date,
                  speakers, or any relevant details – done. After publishing, your
                  event becomes discoverable in our Сatalog and gets a unique URL
                  that you can share through any media.
                </Text>
              )}
              {accordion(
                "3",
                <div>Event setup</div>,
                <Text size={"m"}>
                  After the event is published, you’ll have time and tools to upload
                  additional materials, do a trial run with speakers, and prepare for
                  the broadcast to make sure everything goes smoothly on the day of
                  the event.
                </Text>
              )}
              {accordion(
                "4",
                <div>Broadcasting</div>,
                <Text size={"m"}>
                  Your event is stable with round-the-clock tech support. Our event
                  team helps with any issues speakers and organizers might run into.
                  Participants engage in a versatile event chat. You get all the
                  credit.
                </Text>
              )}
              {accordion(
                "5",
                <div>Analytics</div>,
                <Text size={"m"}>
                  After the event, you get access to its detailed statistics to see
                  the efficiency, learn what you did well, and where there’s room for
                  improvement. And start planning your next event with new insights
                  in mind.
                </Text>
              )}
            </div>
          </div>
          <AnimationStep index={+expanded} />
        </div>
      </div>
    </div>
  );
};
export default FiveSteps;
