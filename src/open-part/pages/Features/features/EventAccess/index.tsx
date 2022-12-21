import React, { ReactElement } from "react";
import style from "./style.module.scss";
import public_event from "src/assets/images/public_event.svg";
import private_event from "src/assets/images/private_event.svg";
import { TextOP, Text } from "@viktor666/byteee-kit";

const EventAccess = (): ReactElement => (
  // <div className={style.container}>
  <>
    <div className={style.text}>
      <div className={style.heading}>
        <TextOP size={[6, 6, 5, 5, 4, 4, 3]} bold font={"sangbleu"}>
          Two types of event access
        </TextOP>
      </div>
      <div className={style.paragraph}>
        <Text size={"m"} font={"inter"} color={"grayscale900"}>
          Remember the joke about two types of people? Yeah-yeah, the ones who put
          the peanut butter first and the others who start with a jam.
        </Text>
        <Text size={"m"} font={"inter"} color={"grayscale900"}>
          Well, online events are not that different. When creating an event,
          depending on your needs, you can choose from two types of event access:
          public or private.
        </Text>
      </div>
    </div>
    <div className={style.images}>
      <div className={style.imagePublic}>
        <div className={`${style.content} ${style.square}`}>
          <img src={public_event} width={80} style={{ marginBottom: 24 }} />
          <div>
            <Text
              as="span"
              size={["s", "s", "m", "m", "m", "m", "m"]}
              bold
            >
              Public{" "}
            </Text>
            <Text
              as="span"
              size={["s", "s", "m", "m", "m", "m", "m"]}
            >
              events are discoverable in our Catalog and anyone can
              register for them.
            </Text>
          </div>
        </div>
      </div>
      <div className={style.imagePrivate}>
        <div className={`${style.content} ${style.substract}`}>
          <img src={private_event} width={80} style={{ marginBottom: 24 }} />
          <div>
            <Text
              as="span"
              size={["s", "s", "m", "m", "m", "m", "m"]}
              bold
            >
              Private{" "}
            </Text>
            <Text
              as="span"
              size={["s", "s", "m", "m", "m", "m", "m"]}
            >
              events are by invitation only. It means a person needs to
            receive an event link to register.
            </Text>
          </div>
        </div>
      </div>
    </div>
    {/*// </div>*/}
  </>
);
export default EventAccess;
