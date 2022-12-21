import React, { useState } from "react";
import styles from "./style.module.scss";
import Layout from "src/features/Layout";
import Sorting from "src/open-part/pages/EventCatalog/Sorting";
import ImageCover from "./images/image.png";
import ImageSpot from "./images/spot.png";
import IconPerson from "./images/icon_person.png";
import { Input, Button, TextOP, Text, Icons } from "@viktor666/byteee-kit";

const { Bookmark, Calendar } = Icons;
const EventCatalog = () => {
  const [value, setValue] = useState("");

  const {
    welcome,
    wrap,
    title,
    search_block,
    input_wrap,
    events,
    event,
    event_image_wrap,
    event_image,
    event_icon,
    event_icon_text,
    event_flag,
    event_price,
    event_date,
    date_wrap,
    time_wrap,
    dot,
    calendar_icon,
    motivator,
    motivator_title,
    motivator_description,
    motivator_button,
    sorting,
    spot,
  } = styles;
  const arrayTest = [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
  ];
  return (
    <Layout gridTemplate>
      <div className={wrap}>
        <div className={welcome}>
          <div className={spot}>
            <img src={ImageSpot} alt="yellow spot" width="100%" height="100%"></img>
          </div>
          <div className={title}>
            <TextOP as="h1" bold size={[5, 5, 3, 3, 3, 2, 1]}>
            Explore the world of events
            </TextOP>
          </div>
          <div className={search_block}>
            <div className={input_wrap}>
              <Input
                onChange={(e) => setValue(e.currentTarget.value)}
                value={value}
                placeholder="Search by event name"
                size="m"
                startIcon="Search"
              />
            </div>
            <Button theme="violet" size="m">
              Find&nbsp;events
            </Button>
          </div>
        </div>
        <div className={sorting}>
          <Sorting />
        </div>
        <div className={events}>
          {arrayTest.map((item, index) => (
            <div className={event} key={`${index}, ${item}`}>
              <div className={event_image_wrap}>
                <img src={ImageCover} alt="Carpet event" className={event_image} />
                <div className={event_flag}>
                  <Bookmark size="m" color="white" fill="white" />
                </div>
                <div className={event_price}>
                  <Text size="m">3$</Text>
                </div>
              </div>
              <div className={event_icon_text}>
                <img src={IconPerson} alt="icon person" className={event_icon} />
                <Text size="m">
                  My first test event bla bla bla bla bla bla bla bla
                </Text>
              </div>
              <div className={event_date}>
                <div className={date_wrap}>
                  <div className={calendar_icon}>
                    <Calendar color="grayscale600" />
                  </div>
                  <Text color="grayscale600" size="xs">
                    Jan&nbsp;22,&nbsp;2023
                  </Text>
                  <span className={dot} />
                </div>
                <div className={time_wrap}>
                  <Text color="grayscale600" size="xs">
                    3:00 p.m.–
                  </Text>
                  <Text color="grayscale600" size="xs">
                    4:00 p.m.
                  </Text>
                </div>
              </div>
            </div>
          ))}
          <div className={motivator}>
            <div className={motivator_title}>
              <Text as="h4" bold size={[5, 5, 2]}>
                No event to your liking?
              </Text>
            </div>
            <div className={motivator_description}>
              <Text size={["m", "m", "l"]}>
                Seize on the opportunity and create your own
              </Text>
            </div>
            <div className={motivator_button}>
              <Button theme="yellow" size="m">
                Create event
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EventCatalog;
