import React, { ReactElement } from "react";
import style from "./style.module.scss";
import man from "src/assets/images/man_in_red_circle.png";
import violet from "src/assets/images/violet_semicircle.svg";
import yellow from "src/assets/images/yellow_topright.svg";
import { ReactComponent as Arrow } from "../../img/arrow.svg";
import Link from "src/features/Link";
import white from "src/assets/images/white_substract_topright.svg";
import { TextOP, Text, Icons } from "@viktor666/byteee-kit";

const { Calendar } = Icons;

const EventInterface = (): ReactElement => (
  <>
    <div className={`${style.heading} ${style.h4}`}>
      <TextOP size={[6, 6, 5, 5, 4, 4, 3]} bold font={"sangbleu"}>
      Simple as 1-2-3 interface
      </TextOP>
    </div>
    <div className={`${style.paragraph} ${style.p}`}>
      <Text size={"m"} font={"inter"} color={"grayscale900"}>
      byteee{" "}
        <Link to={"/"} color={"violet"} size={"m"}>
        event creation
        </Link>{" "}
      interface is extremely easy to use.
      </Text>
    </div>
    <div className={style.cards}>
      <div className={style.card}>
        <div>
          <div className={`${style.firstStep} ${style.step}`}>1</div>
        </div>
        <Text size="m">
          Choose a name and a date for your event. You can add a description or a
          cover picture, but it’s optional.
        </Text>
      </div>
      <div className={style.card}>
        <div>
          <div className={`${style.secondStep} ${style.step}`}>2</div>
        </div>
        <Text size="m">
          Invite a speaker or a few ones. If you are the only speaker, you can skip
          this step.
        </Text>
      </div>
      <div className={style.card}>
        <div>
          <div className={`${style.thirdStep} ${style.step}`}>3</div>
        </div>
        <Text size="m">
          Add sessions to your event. It is not required but always there whenever
          you need this option.
        </Text>
      </div>
    </div>
    <div className={style.images}>
      <div className={style.section_one}>
        <div className={`${style.block} ${style.event}`}>
          <div className={style.label}>
            Event name
          </div>
          <div className={style.input}>
            Enter a name describing the event theme
          </div>
        </div>
        <img src={white} className={style.white} />
      </div>
      <div className={style.section_three}>
        <div className={style.section_two}>
          <img src={yellow} className={style.yellow} />
          <div className={`${style.block} ${style.date}`}>
            <div className={style.label}>Date</div>
            <div className={style.input}>
              Jan 22, 2023
              <Calendar size={"s"} color={"grayscale600"}/>
            </div>
          </div>
        </div>
        <div>
          <img src={violet} className={style.violet} />
          <img src={man} className={style.man} />
          <div className={`${style.block} ${style.newBlock}`}>
            <div className={style.session}>
              <div className={style.time}>
                12:00 p.m.– <br />
                1:00 p.m.
              </div>
              <div>
                <div className={style.name}>Session 1</div>
                <div className={style.description}>
                  Platform features and capabilities
                </div>
              </div>
              <Arrow />
            </div>
            <div className={`${style.newSession} ${style.session}`}>
              + Add new session
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
export default EventInterface;
