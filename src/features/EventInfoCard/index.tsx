import React from "react";
import { Avatar, Text } from "@viktor666/byteee-kit";
import style from "./style.module.scss";

interface InfoProps {
  event: {
    avatar: string,
    speakers: string[],
    description: string | null,
  };
}

const { wrap, speaker, speakersWrap, title, description } = style;

const EventInfo = ({ event }: InfoProps): JSX.Element => {
  const renderSpeakersList = () => event.speakers.map(
    (name, index) => (
      <div key={index} className={speaker}>
        <Avatar status="offline" size="xs" src={event.avatar} alt={event.avatar} />
        <Text size="s" color="grayscale700">{name}</Text>
      </div>
    )
  );
  return (
    <div className={wrap}>
      {event.description !== null &&
        <>
          <div className={title}>
            <Text size={6} bold>Description</Text>
          </div>
          <div className={description}>
            <Text size="m">{event.description}</Text>
          </div>
        </>
      }
      <div className={title}>
        <Text size={6} bold>Speakers</Text>
      </div>
      <div className={speakersWrap}>
        {renderSpeakersList()}
      </div>
    </div>
  );
};
export default EventInfo;