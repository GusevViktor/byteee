import React, { ReactElement } from "react";
import style from "./style.module.scss";
import { Button, Text } from "@viktor666/byteee-kit";
import zero_value_table from "../../../../../../../../assets/images/zero_value_table.png";

const ZeroValueTable = (): ReactElement => (

  <div className={style.wrap}>
    <section className={style.content}>
      <div>
        <div className={style.title}>
          <Text as={"h4"} size={[5]} bold font="inter">
            Organized events
          </Text>
        </div>
        <div className={style.subtitle}>
          <Text size="s">
            Create your first event and see what happens.
          </Text>
        </div>
      </div>
      <div className={style.button}>
        <Button startIcon={"Plus"}>
          Create event
        </Button>
      </div>
    </section>
    <section className={style.img}>
      <img src={zero_value_table} />
    </section>
  </div>

);

export default ZeroValueTable;
