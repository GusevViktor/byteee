import React, { ReactElement } from "react";
import style from "./style.module.scss";
import ImageLearning from "./img/lerning.png";
import ImageVideo from "./img/video.png";
import { Button, Icons, AccordionEpisode as Accordion, Text, TextOP } from "@viktor666/byteee-kit";
import Layout from "src/features/Layout";
import Link from "src/features/Link";

const { Star, Clock } = Icons;

const episodes = [
  {
    title: "Why byteee: unique platform features",
    status: "viewed",
  },
  {
    title: "Signup. Profile settings ",
  },
  {
    title: "Organizer. Creating an event. Landing page, chat, setup",
  },
  {
    title: "Organizer. Preparing for an event. Lineup, uploads, ticket distribution",
  },
  {
    title: "Organizer. Holding an event",
  },
  {
    title: "Speaker. Preparing for and performing at the event",
  },
  {
    title: "Attendee. Event registration, tickets, tools",
  },
  {
    title: "Speaker and attendee. Connections, chats, event search",
    status: "coming_soon'",
  },
  {
    title: "Organizer. Event analytics and follow-up activity",
    status: "coming_soon'",
  },
  {
    title: "Coming soon: new features, pricing plans, platform development ",
    status: "coming_soon'",
  },
];

const LerningPage = (): ReactElement => {
  const {
    wrap,
    title_block,
    title,
    description,
    button,
    image,
    informations_wrap,
    informations_text,
    informations,
    information,
    information__margin,
    stars,
    icon,
    clock,
    star,
    start__fill,
    video_wrap,
    list,
    item,
    inner,
    list_title,
    title_small,
    episodes_wrap,
    episode: epsiodeStyle,
    episodes_inner,
  } = style;

  return (
    <Layout gridTemplate>
      <div className={wrap}>
        <div className={inner}>
          <div className={title_block}>
            <h1 className={title}>
              <TextOP size={[5, 5, 3, 3, 3, 2, 1]} bold>
                Watch and learn
              </TextOP>
            </h1>
            <p className={description}>
              <Text size={["s", "s", "m"]}>
                Remember all the multipage user manuals you had to read
                in the past? We
                don’t have them here.
              </Text>
              <Text size={["s", "s", "m"]}>
                Instead, we have a series of short videos
                explaining to you the platform basics.
              </Text>
            </p>
            <div className={button}>
              <Button size="m" type="solid" theme="violet">
                Start learning
              </Button>
            </div>
          </div>
          <img className={image} src={ImageLearning} alt="Image: Hand writes text" />
          <div className={informations_wrap}>
            <div className={title_small}>
              <TextOP size={[6, 6, 5, 5, 5, 5, 4]} bold font="inter">
                Season 1
              </TextOP>
            </div>
            <div className={informations}>
              <div className={information}>
                <Text size="s" color="grayscale600">
                  Сomplexity
                </Text>
                <div className={stars}>
                  <div className={[icon, star, start__fill].join(" ")}>
                    <Star color="brand400" fill="brand400" />
                  </div>
                  <div className={[icon, star].join(" ")}>
                    <Star color="brand400" />
                  </div>
                  <div className={[icon, star].join(" ")}>
                    <Star color="brand400" />
                  </div>
                  <div className={[icon, star].join(" ")}>
                    <Star color="brand400" />
                  </div>
                  <div className={[icon, star].join(" ")}>
                    <Star color="brand400" />
                  </div>
                </div>
              </div>
              <div className={[information, information__margin].join(" ")}>
                <div className={[icon, clock].join(" ")}>
                  <Clock color="grayscale600" />
                </div>
                <Text size="s" color="grayscale600">
                  7 of 10 episodes (21 min total)
                </Text>
              </div>
            </div>
            <div className={informations_text}>
              <Text size={["s", "s", "m", "m"]}>
                In this season, you’ll learn everything
                to start using byteee like a pro.&thinsp;
              </Text>
              <Text size={["s", "s", "m", "m"]}>
                Eventually, our platform will grow and become more complicated – just
                like relationships between characters in your favorite series. That’s
                when the next season comes out.
              </Text>
            </div>
          </div>
        </div>
        <div className={episodes_wrap}>
          {episodes.map((episode, index) => (
            <div key={episode.title} className={epsiodeStyle}>
              <Accordion
                subtitle={`Episode ${index + 1}`}
                title={episode.title}
                status={"coming_soon"}
                noOpen={episode?.status === "coming_soon"}
              >
                <div className={episodes_inner}>
                  <div className={video_wrap}>
                    <img
                      width={"100%"}
                      height={"100%"}
                      src={ImageVideo}
                      alt={"video"}
                    />
                  </div>
                  <div className={list}>
                    <div className={list_title}>
                      <Text size={["s", "s", "m"]}>
                        In this episode you will learn:
                      </Text>
                    </div>
                    <p className={item}>
                      <Text size={["s", "s", "m"]}>How to sign up</Text>
                    </p>
                    <p className={item}>
                      <Text size={["s", "s", "m"]}>
                        Next steps after registration
                      </Text>
                    </p>
                    <p className={item}>
                      <Text size={["s", "s", "m"]}>Platform access levels</Text>
                    </p>
                    <p className={item}>
                      <Text size={["s", "s", "m"]}>More</Text>
                    </p>
                    <div>
                      <Button type="flat">
                        <Link size="m" color="violet" to={"/about-us"}>
                          Learn now
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default LerningPage;
