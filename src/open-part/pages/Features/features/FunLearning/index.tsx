import React, { ReactElement } from "react";
import { ReactComponent as StarIcon } from "../../img/star.svg";
import classes from "./style.module.scss";
import { ReactComponent as Arrow } from "../../img/arrow.svg";
import video from "../../img/video.png";
import grey_group from "../../img/grey_group.svg";
import { Button, TextOP, Text } from "@viktor666/byteee-kit";

const FunLearning = (): ReactElement => (
  <div className={classes.container}>
    <div className={classes.section_one}>
      <div className={classes.header}>
        <div className={classes.heading}>
          <TextOP size={[6, 6, 5, 5, 4, 4, 3]} bold font={"sangbleu"}>
          Binge-worthy learning
          </TextOP>
        </div>
        <div className={classes.block_complexity}>
          <div className={classes.complexity}>
            Сomplexity
            <div className={classes.stars}>
              <div
                className={[
                  classes.icon,
                  classes.star,
                  classes.start__fill].join(
                  " "
                )}
              >
                <StarIcon />
              </div>
              <div className={[classes.icon, classes.star].join(" ")}>
                <StarIcon />
              </div>
              <div className={[classes.icon, classes.star].join(" ")}>
                <StarIcon />
              </div>
              <div className={[classes.icon, classes.star].join(" ")}>
                <StarIcon />
              </div>
              <div className={[classes.icon, classes.star].join(" ")}>
                <StarIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.paragraph}>
        <Text size={"m"} font={"inter"} color={"grayscale900"}>
          We’ve all been in a situation when you need to do something but don’t know
          how to do it right. Filling in a tax return form or trying to decide how
          much paint is necessary to renovate the living room — sure, you can
          remember a dozen times you sighed hopelessly and flipped through a 200-page
          manual, scrolled through outdated webpages with “Tips how to...,” or read
          endless boring longreads.
        </Text>
      </div>
      <div className={classes.episode_section}>
        <div className={classes.accordion}>
          <div className={classes.episode}>
            <div className={classes.episode_title}>
              <div>Episode 4</div>
              <div className={classes.status}>viewed</div>
            </div>
            <Arrow />
          </div>
          <div className={classes.paragraph}>
            <Text size={"m"} font={"inter"} color={"grayscale900"}>
            Organizer. Preparing for an event. Lineup, uploads, ticket distribution
            </Text>
          </div>
        </div>
        <div className={classes.accordion}>
          <div className={classes.episode}>
            <div className={classes.episode_title}>
              <div>Episode 5</div>
            </div>
            <Arrow />
          </div>
          <div className={classes.paragraph}>Organizer. Holding an event</div>
        </div>
      </div>
    </div>
    <div className={classes.section_two}>
      <div className={classes.video_section}>
        <div className={`${classes.paragraph} ${classes.mb}`}>
          <Text size={"m"} font={"inter"} color={"grayscale900"}>
            We created byteee to be user-friendly and intuitive. And to make your
            interaction with the platform even more seamless, we came up with a
            series of short illustrative videos on how to use it.
          </Text>
        </div>
        <div className={classes.block}>
          <img src={video} className={classes.video} />
        </div>
      </div>
      <div className={classes.block}>
        <Button type={"outline"} size={"m"} style={{ width: "100%" }}>
          Go watch our videos
        </Button>
      </div>
      <img src={grey_group} alt={""} className={classes.images_group} />
    </div>
  </div>
);
export default FunLearning;
