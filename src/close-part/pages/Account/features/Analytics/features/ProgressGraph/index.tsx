import React, { ReactElement } from "react";
import style from "./style.module.scss";
import { Text } from "@viktor666/byteee-kit";

const ProgressGraph = (): ReactElement => (

  <div className={style.wrap}>
    <div className={style.title}>
      <Text as={"h4"} size={[6]} bold font="inter">
      Engagement
      </Text>
    </div>
  </div>

);

export default ProgressGraph;
