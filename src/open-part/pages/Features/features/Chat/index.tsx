import React, { ReactElement } from "react";
import style from "./style.module.scss";
import Popover from "./Popover";
import avatar_female
  from "src/assets/images/avatar_female.svg";
import avatar_male from "src/assets/images/avatar_male.svg";
import imageGirl from "src/assets/images/girl_in_metro.png";
import imageWoman
  from "src/assets/images/girl_against_laptop.png";
import { Avatar, Icons, TextOP, Text } from "@viktor666/byteee-kit";


const {
  AlertCircle,
} = Icons;

const Chat = (): ReactElement => {
  const CardInfo = (): ReactElement => <div className={style.invitation}>
    <div className={style.attention}>
      <div className={style.icon}>
        <AlertCircle color="tangerine1000" />
      </div>
      <Text
        color="tangerine1000"
        size={["s", "s", "m", "xs", "m", "m", "m"]}
      >
        You’ve been invited to be a speaker at
      </Text>

    </div>
    <div className={style.eventName}>
      <Text
        size={["m", "m", "m", "xs", "m"]}
        color="violet600"
      >
        How to NFT like a crypto pro
      </Text>
    </div>
    <div className={style.eventDate}>

      <Text
        size="xs"
        color="grayscale700"
      >
          Date
      </Text>

      <Text
        size="xs"
        color="grayscale900"
      >
          Jan 23, 2021
      </Text>
    </div>
    <div className={style.organizator}>
      <Text color="grayscale800" size="xs">
          Organizer
      </Text>
      <div className={style.profile}>
        <Avatar
          status={"online"}
          size={"s"}
          src={avatar_male}
          alt={""}
          className={style.avatar}
          badgeClassName={style.badge}
        />
        <Text
          as="span"
          size={["m", "m", "m", "xs", "m", "m", "m"]}
          color="violet1000"
        >
            Ralph Edwards
        </Text>
      </div>
    </div>
  </div>;

  return (
    <div className={style.container}>
      <div className={style.heading}>
        <TextOP
          size={[6, 6, 5, 5, 4, 4, 3]}
          as={"h2"}
          bold
          font={"sangbleu"}
          color={"white"}
        >
          All-in-one chat
        </TextOP>
      </div>
      <div className={style.paragraph}>
        <Text size={"m"} color={"white"}>
          Our chat is the ultimate networking tool. Right from the event creation and
          for the endless time after the broadcast, you can communicate, invite,
          share, and get updates – all in one place.
        </Text>
      </div>
      <div className={style.wrap_popovers}>
        <img src={imageGirl} className={style.imageGirl} />
        <div className={`${style.container_popoverCenter} ${style.mb}`}>
          <Popover
            name={"Ralph Edwards"}
            message={"Hey, are you coming to the event" +
                " my company is organizing?"}
            avatar={
              <Avatar
                status={"online"}
                size={"s"}
                src={avatar_male}
                alt={""}
                badgeClassName={style.badge}
                imageClassname={style.avatar}
                className={style.avatar}
              />
            }
            anchorOrigin={"left"}
            className={`${style.one} ${style.popover} ${style.message_1}`}
          />
        </div>
        <div className={`${style.container_popoverEnd} ${style.mb}`}>
          <Popover
            name={"Kathryn Murphy"}
            message={"Hi! What event are you talking about?"}
            avatar={
              <Avatar
                status={"online"}
                size={"s"}
                src={avatar_female}
                alt={""}
                badgeClassName={style.badge}
                imageClassname={style.avatar}
                className={style.avatar}
              />
            }
            anchorOrigin={"right"}
            className={`${style.two} ${style.popover} ${style.message_2}`}
          />
        </div>
        <div className={`${style.container_popoverStart} ${style.mb}`}>
          <Popover
            name={"Ralph Edwards"}
            message={
              "Oh, we are hosting an online conference for " +
              "crypto enthusiasts and NFT connoisseurs." +
              "Here, have a look.How to NFT like a crypto pro"
            }
            avatar={
              <Avatar
                status={"online"}
                size={"s"}
                src={avatar_male}
                alt={""}
                badgeClassName={style.badge}
                imageClassname={style.avatar}
                className={style.avatar}
              />
            }
            anchorOrigin={"left"}
            className={` ${style.popover} ${style.message_3}`}
          />
        </div>
        <div className={`${style.container_popoverEnd} ${style.mb}`}>
          <Popover
            name={"Kathryn Murphy"}
            message={
              "So cool! Actually, I have got some worthy insights about "
              + "the NFT market myself."
            }
            avatar={
              <Avatar
                status={"online"}
                size={"s"}
                src={avatar_female}
                alt={""}
                badgeClassName={style.badge}
                imageClassname={style.avatar}
                className={style.avatar}
              />
            }
            anchorOrigin={"right"}
            className={` ${style.popover} ${style.message_4}`}
          />
        </div>
        <div className={`${style.container_popoverStart} ${style.mb}`}>
          <Popover
            name={"Ralph Edwards"}
            message={
              "OMG, are you serious? In fact, we need one " +
              "more speaker for the conference. Interested?"
            }
            avatar={
              <Avatar
                status={"online"}
                size={"s"}
                src={avatar_male}
                alt={""}
                badgeClassName={style.badge}
                imageClassname={style.avatar}
                className={style.avatar}
              />
            }
            anchorOrigin={"left"}
            className={` ${style.popover} ${style.message_5}`}
          />
        </div>
        <img src={imageWoman} className={style.imageWoman} />
        <div className={style.container_popoverCenter}>
          <Popover
            name={"Kathryn Murphy"}
            message={"Sure thing! Count me in. Let’s sort the details later."}
            avatar={
              <Avatar
                status={"online"}
                size={"s"}
                src={avatar_female}
                alt={""}
                badgeClassName={style.badge}
                imageClassname={style.avatar}
                className={style.avatar}
              />
            }
            anchorOrigin={"right"}
            className={`${style.last} ${style.popover}`}
          >
            <CardInfo />
          </Popover>
        </div>
      </div>
    </div>
  );
};
export default Chat;
