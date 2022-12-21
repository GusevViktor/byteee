import { Button, Text } from "@viktor666/byteee-kit";
import React, { ReactElement } from "react";
import classes from "./version.module.scss";
import orange_substract_bottomright
  from "src/assets/images/orange_substract_bottomright.svg";
import green_semicircle_right
  from "src/assets/images/green_semicircle_right.svg";
import white_triangle_bottom_right
  from "src/assets/images/white_triangle_bottom_right.svg";
import orange_substract_bottomleft
  from "src/assets/images/orange_substract_bottomleft.svg";

const FreeVersion = (): ReactElement => (
  <div className={[classes.free, classes.wrap].join(" ")}>
    <div className={classes.content}>
      <img
        className={[classes.left_element, classes.icon].join(" ")}
        src={orange_substract_bottomright}
        alt={orange_substract_bottomright}
      />
      <div className={classes.elements_grid}>
        <img
          className={[classes.element_green].join(" ")}
          alt={green_semicircle_right}
          src={green_semicircle_right}
        />
        <img className={classes.icon} alt={white_triangle_bottom_right} src={white_triangle_bottom_right} />
        <img className={classes.icon} alt={orange_substract_bottomleft} src={orange_substract_bottomleft} />
      </div>
      <div className={classes.title}>
        <Text color="white" size={[4, 4, 3, 4, 3]} bold>Free</Text>
      </div>
      <ul className={classes.list}>
        <Text size={["s", "s", "m", "s", "m"]} color="white" as="li">
          Pro tools for every user
        </Text>
        <Text size={["s", "s", "m", "s", "m"]} color="white" as="li">
          Event landing pages
        </Text>
        <Text size={["s", "s", "m", "s", "m"]} color="white" as="li">
          Pre-recorded videos or live broadcasts
        </Text>
        <Text size={["s", "s", "m", "s", "m"]} color="white" as="li">
          Event analytics
        </Text>
        <Text size={["s", "s", "m", "s", "m"]} color="white" as="li">
          Сhat and direct messages
        </Text>
        <Text size={["s", "s", "m", "s", "m"]} color="white" as="li">
          Public profiles
        </Text>
        <Text size={["s", "s", "m", "s", "m"]} color="white" as="li">
          Event catalog
        </Text>
      </ul>
      <div className={classes.empty_text}>
        <Text color="mint200" size="s">No credit card required</Text>
      </div>
      <div className={classes.button}>
        <Button type="solid" theme="white">
          Sign up
        </Button>
      </div>
    </div>
  </div>
);

export default FreeVersion;
