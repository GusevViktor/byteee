import React from "react";
import style from "./style.module.scss";
import { Button, Text } from "@viktor666/byteee-kit";

const { wrap, title, buttons } = style;

interface Props {
  type: string;
}

export const FinilizerForm = ({ type }: Props) => <div className={wrap}>
  <div className={title}>
    <Text size={[6, 6, 4]} bold>
      {type === "draft" ? "Event saved as draft" : "Event published"}
    </Text>
  </div>
  <Text size="m">
    {type === "draft" ? "Until you publish the event," +
      " this draft is only visible to you and the speakers you invited."
      :
      "You did great! Now promote your event by sharing it or explore the" +
      " interface of the event space to be prepared for the event broadcast."}
  </Text>
  <div className={buttons}>
    {type === "draft" ?
      <Button theme="violet" size="l" type="solid">Go to My events</Button>
      :
      <>
        <Button theme="violet" size="l" type="outline">Share event</Button>
        <Button theme="violet" size="l" type="solid">Enter event space</Button>
      </>
    }
  </div>
</div>;