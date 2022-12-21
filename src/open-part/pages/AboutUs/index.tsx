import React, { ReactElement } from "react";
import style from "./style.module.scss";
import Carousel from "src/open-part/pages/AboutUs/Carousel";
import Link from "src/features/Link";
import Layout from "src/features/Layout";
import { TextOP, Text } from "@viktor666/byteee-kit";

const AboutUsPage = (): ReactElement => (
  <Layout >
    <div className={[style.aboutUsPage, style.wrap].join(" ")}>
      <div className={ style.title }>
        <TextOP font="sangbleu" size={[5, 5, 3, 2, 2, 2, 1]} bold as={"h1"}>
          What is byteee
        </TextOP>
      </div>

      <div className={style.icons__orangeDrop_Carousel}>
        <img src="img/icons/orangeDrop.svg" alt="" />
      </div>

      <div className={style.subtitle}>
        <Text size="m" color="grayscale900">
          The virtual event platform for those who like it simple but still
          professional.
        </Text>
      </div>

      <Carousel />

      <div
        className={[
          style.block,
          style.block_white,
          style.block__aboutTeam,
        ].join(" ")}
      >
        <div className={style.title_text_block}>
          <TextOP size={[6, 6, 5, 5, 5, 5, 4]} bold as={"h4"} font="inter">
            Who we are
          </TextOP>
          <Text size="m" color="grayscale900">
            Our globally-minded team shares common values:
          </Text>
        </div>
        <div className={style.text_block}>
          <Text size={[6]} as="h6">
            Equality
          </Text>
          <Text size="m" color="grayscale900">
            All employees, users, and events are equally valuable.
          </Text>
        </div>
        <div className={style.text_block}>
          <Text size={[6]} as="h6">
            Accessibility
          </Text>
          <Text size="m" color="grayscale900">
            Information, tools, and means
            of communication should be available to anyone in any part of the world.
          </Text>
        </div>
        <div className={style.text_block}>
          <Text size={[6]} as="h6">
            Solidarity
          </Text>
          <Text size="m" color="grayscale900">
            Our user is a part of our team. We develop the product together.
          </Text>
        </div>
        <div className={style.text_block}>
          <Text size={[6]} as="h6">
            Pursuit of excellence
          </Text>
          <Text size="m" color="grayscale900">
            We live for constant growth and improvement, so if you feel
            you’re just like us, you should check out our Careers page.
          </Text>
        </div>
        <div className={style.link}>
          <Link size="m" color="violet" to={"/careers"}>
            See open positions
          </Link>
        </div>
      </div>

      <div className={[style.block, style.block__aboutbyteee].join(" ")}>
        <TextOP size={[6, 6, 5, 5, 5, 5, 4]} bold as={"h4"} font="inter">
          How byteee came to be
        </TextOP>
        <Text size="m">
          It’s hard to deny the importance of virtual space and online tools for everyday tasks.
          Preferably, these tools are powerful yet easy to use. Our team always
          felt that
          no instrument is perfect or enough. So, the idea of byteee was born.
        </Text>

        <div className={ style.queteParagraph }>
          <span className={style.queteOpened}>
            <img src="/img/icons/quoteOpened.svg" alt="ups" />
          </span>
          <TextOP as={"p"} size={[6, 6, 5, 4, 4, 4, 3]} font="sangbleu" bold>
            byteee is our way to change the virtual event paradigm
            and make this complex concept simple and accessible for anyone.
          </TextOP>
          <span className={style.queteClosed}>
            <img src="/img/icons/quoteClosed.svg" alt="ups" />
          </span>
        </div>
        <Text size="m">
          Our dream is to create a community where all members are different enough
          to introduce something new and unique but have a shared vision and line of
          thought.
        </Text>
        <div className={style.lastParagraph}>
          <Text size="m">
            We don`t try to think like our users. We ask our users what they think.
            And we base all our product decisions on the user experience and needs
            to give
            you the best tools to excel at what you do.
          </Text>
        </div>
        <div className={style.backgroundCircle}></div>
      </div>

      <div className={style.icons}>
        <img
          src="img/icons/redSquare.svg"
          alt=""
          className={style.icons__redSquare}
        />
        <img
          src="img/icons/orangeDrop.svg"
          alt=""
          className={style.icons__orangeDrop}
        />
        <img
          src="img/icons/whiteQuarterCircle.svg"
          alt=""
          className={style.icons__whiteQuarterCircle}
        />
      </div>
    </div>
  </Layout>
);

export default AboutUsPage;
