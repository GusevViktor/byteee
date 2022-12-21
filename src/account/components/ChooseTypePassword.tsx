import React, { ReactElement } from "react";
import classes from "../userAccess.module.scss";
import { Button, Text } from "@viktor666/byteee-kit";


export const ChooseTypePassword = (): ReactElement => (
  <div className={classes.container}>
    <div className={classes.afterRegistration_title}>
      <Text size={[5, 5, 4, 3, 3, 2]} bold={true}>
        You’re in!
      </Text>
    </div>

    <div className={classes.check_inbox}>
      <Text as={"p"} size={"xs"} color={"grayscale900"}>
        Before you go explore our platform, <br />
        choose how you want to login next time.
      </Text>
    </div>
    <div className={classes.password_types}>
      <div className={classes.password_type}>
        <input type={"radio"} />
        <label>Create a new password</label>
      </div>
      <div className={classes.password_type}>
        <input type={"radio"} />
        <label>No more passwords, I’ll log in via code</label>
      </div>
      <div className={classes.password_type}>
        <input type={"radio"} />
        <label>I’ll decide later</label>
      </div>
    </div>
    <Button size={"m"} type={"solid"} className={`${classes.mb} ${classes.mt}`}>
      Continue
    </Button>
  </div>
);
