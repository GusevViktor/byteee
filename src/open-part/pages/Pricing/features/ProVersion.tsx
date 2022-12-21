import { Button, Text } from "@viktor666/byteee-kit";
import React, { ReactElement } from "react";
import classes from "./version.module.scss";
import orange_substract_topright
  from "src/assets/images/orange_substract_topright.svg";
import red_substract_bottom_right
  from "src/assets/images/red_substract_bottom_right.svg";
import yellow_triangle
  from "src/assets/images/yellow_triangle.svg";
import green_square from "src/assets/images/green_square.svg";
import orange_substract_topleft
  from "src/assets/images/orange_substract_topleft.svg";
import blue_substract_bottomleft
  from "src/assets/images/blue_substract_bottomleft.svg";
const PROVersion = (): ReactElement => (
  <div className={[classes.pro, classes.wrap].join(" ")}>

    <div className={classes.content}>
      <img
        className={[classes.left_element, classes.icon].join(" ")}
        src={orange_substract_topright} alt={orange_substract_topright}
      />
      <div className={classes.elements_grid}>
        <img className={classes.icon} src={red_substract_bottom_right} alt={red_substract_bottom_right} />
        <img className={classes.icon} src={green_square} alt={green_square} />
        <img className={classes.icon} src={yellow_triangle} alt={yellow_triangle} />
        <img className={classes.icon} src={blue_substract_bottomleft} alt={blue_substract_bottomleft} />
        <div />
        <img className={classes.icon} src={orange_substract_topleft} alt={orange_substract_topleft} />
      </div>
      <div className={classes.title}>
        <Text size={[4, 4, 3, 4, 3]} bold>Pro</Text>
      </div>
      <ul className={classes.list}>
        <Text size={["s", "s", "m", "s", "m"]} as="li">
          Everything in Free, plus:
        </Text>
        <Text size={["s", "s", "m", "s", "m"]} as="li">Ticket sales</Text>
        <Text size={["s", "s", "m", "s", "m"]} as="li">Event trial runs</Text>
        <Text size={["s", "s", "m", "s", "m"]} as="li">
          Event duration up to 72h
        </Text>
        <Text size={["s", "s", "m", "s", "m"]} as="li">
          Up to 4 simultaneous sessions
        </Text>
        <Text size={["s", "s", "m", "s", "m"]} as="li">Roundtables</Text>
        <Text size={["s", "s", "m", "s", "m"]} as="li">
          Certificates of completion
        </Text>
      </ul>
      <div className={classes.button}>
        <Button type="solid" theme="white" disabled>
          Cooming soon
        </Button>
      </div>
    </div>
  </div>
);

export default PROVersion;
