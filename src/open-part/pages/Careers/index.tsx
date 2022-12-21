import React, { ReactElement, useRef } from "react";
import style from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import Layout from "src/features/Layout";
import { Button, TextOP, Text, Icons } from "@viktor666/byteee-kit";
import Link from "src/features/Link";
import api, { Vacancy } from "src/api/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "./swiper.scss";
import "swiper/css/pagination";
import careers_startup_mindset from "src/assets/images/careers_startup_mindset.svg";
import careers_personal_and_professional_growth from "src/assets/images/careers_personal_and_professional_growth.svg";
import careers_offbeat_team_building_activities from "src/assets/images/careers_offbeat_team_building_activities.svg";
import careers_democratic_decision_making from "src/assets/images/careers_democratic_decision_making.svg";
import careers_work_from_any_part_of_the_worls from "src/assets/images/careers_work_from_any_part_of_the_worls.svg";
import careers_up_to_paid_work from "src/assets/images/careers_up_to_paid_work.svg";
import blue_squire from "src/assets/images/blue_square.svg";
import white_triangle_bottomright from "src/assets/images/white_triangle_bottomright.svg";
import orange_semicircle_bottom from "src/assets/images/orange_semicircle_bottom.svg";
import careers from "src/assets/images/careers.png";
import { scrollTo } from "src/helpers/navigation";

const CareersPage = (): ReactElement => {
  const openPositions = true;
  const navigate = useNavigate();
  const vacancies = api.vacancies();
  const scrollRef = useRef<HTMLHeadingElement>(null);

  const { MapPin } = Icons;

  const switchToOpenPositions = (path: string | number) => {
    window.scrollTo(0, 0);
    navigate(`/careers/vacancy/${path}`);
  };

  const mapVacancies = (vacancies: Vacancy[]) => vacancies.map((el: Vacancy) => (
    <div
      key={el.id}
      className={style.vacancy}
      onClick={() => switchToOpenPositions(el.id)}
    >
      <p className={style.title}>{el.title}</p>
      <div className={style.location_section}>
        <MapPin color={"grayscale700"} />
        <p className={style.adress}>{el.address}</p>
      </div>
    </div>
  ));

  return (
    <Layout gridTemplate={true}>
      <>
        <div className={[style.blocks_width, style.titleAndSubtitle].join(" ")}>
          <div className={style.title}>
            <TextOP as="h1" size={[5, 5, 3, 3, 2, 1]} font="sangbleu" bold>
              Join our team
            </TextOP>
          </div>
          <div className={[style.subtitle].join(" ")}>
            <Text size="m">
              We are building a platform for virtual events, and for that, we need a
              solid base of brilliant professionals and generally awesome people. Are
              you with us?
            </Text>
          </div>
        </div>
        <div className={style.openPositionsButton}>
          <Button
            type="solid"
            theme="violet"
            size="m"
            onClick={() => scrollTo(scrollRef)}
          >
            See open positions
          </Button>
        </div>
        <div className={style.image}>
          <div className={[style.blue_squire, style.substract].join(" ")}>
            <img src={blue_squire} alt="ups" />
          </div>
          <div
            className={[style.white_triangle_bottomright, style.substract].join(
              " "
            )}
          >
            <img src={white_triangle_bottomright} alt="ups" />
          </div>
          <div
            className={[style.orange_semicircle_bottom, style.substract].join(
              " "
            )}
          >
            <img src={orange_semicircle_bottom} alt="ups" />
          </div>
          <img src={careers} className={style.img}/>
        </div>
        <div className={[style.aboutbyteee, style.blocks_width].join(" ")}>
          <TextOP as="h4" size={[6, 6, 5, 5, 5, 4]} font={"inter"} bold>
            About byteee
          </TextOP>
          <div className={style.aboutbyteee_text}>
            <Text size="m" as="p">
              {
                "We're not scared of today's life setbacks caused" +
                "by travel restrictions, political turmoils, and" +
                "gaps in living standards. Instead, we strive to make every" +
                "next day better through connecting people" +
                "and giving them the freedom" +
                "to exchange knowledge, emotions, and experience."
              }
            </Text>
            <Text size="m" as="p">
              {
                "We're excited about a diverse set of perspectives, "
                +"personal and working experiences, religious and "
                +"cultural differences that every team "
                +"member contributes to the "
                +"common cause."
              }
            </Text>
            <Text size="m" as="p">
              Thus, our core employment values are your talents and personality, and
              there are no other limitations or handicaps.
            </Text>
          </div>
          <div>
            <Link to={"/about-us"} color="violet">
              More about us
            </Link>
          </div>
        </div>
        <div className={[style.benefits, style.blocks_width].join(" ")}>
          <div className={style.title}>
            <TextOP as="h4" size={[6, 6, 5, 5, 5, 4]} font={"inter"} bold>
              Benefits
            </TextOP>
          </div>

          <div className={style.benefits_subtitle}>
            <Text size="m" as="p">
              It’s the right thing to ask what you can expect to get from working
              with us. Here’s what we offer you – apart from an appropriate salary
              and challenging tasks, of course.
            </Text>
          </div>
          <ul className={style.icons}>
            <li className={style.icon}>
              <img src={careers_startup_mindset} alt="ups" />
              <Text size="m" as="p" bold>
                Startup mindset
              </Text>
            </li>
            <li className={style.icon}>
              <img src={careers_personal_and_professional_growth} alt="ups" />
              <Text size="m" as="p" bold>
                Personal and professional growth
              </Text>
            </li>
            <li className={style.icon}>
              <img src={careers_offbeat_team_building_activities} alt="ups" />
              <Text size="m" as="p" bold>
                Offbeat team building activities
              </Text>
            </li>
            <li className={style.icon}>
              <img src={careers_democratic_decision_making} alt="ups" />
              <Text size="m" as="p" bold>
                Democratic decision-making
              </Text>
            </li>
            <li className={style.icon}>
              <img src={careers_work_from_any_part_of_the_worls} alt="ups" />
              <Text size="m" as="p" bold>
                Work from any part of the world
              </Text>
            </li>
            <li className={style.icon}>
              <img src={careers_up_to_paid_work} alt="ups" />
              <Text size="m" as="p" bold>
                Up to 10% paid work time for side projects
              </Text>
            </li>
          </ul>
        </div>

        <div className={[style.benefits_carousel, style.blocks_width].join(" ")}>
          <div className={style.benefits_title}>
            <TextOP as="h4" size={[6, 6, 5, 5, 5, 4]} font={"inter"} bold>
              Benefits
            </TextOP>
          </div>
          <div className={style.benefits_subtitle}>
            <Text size="m" as="p">
              It’s the right thing to ask what you can expect to get from
               working with
              us. Here’s what we offer you – apart from an appropriate salary and
              challenging tasks, of course.
            </Text>
          </div>

          <div>
            <Сarousel />
          </div>
        </div>

        <div className={style.openPositions_title} ref={scrollRef}>
          <TextOP as="h4" size={[6, 6, 5, 5, 5, 4]} font={"inter"} bold>
            Open positions
          </TextOP>
        </div>
        {openPositions ? (
          <>
            <div
              className={[
                style.openPositions_subtitle,
                style.openPositionsTrue,
                style.blocks_width
              ].join(" ")}
            >
              <Text size="m" as="p">
                These are our current job openings. If you don’t see a suitable
                position, but you are sure you are the one piece missing from the
                puzzle of our team, please do not hesitate to contact us at{" "}
                <Link to="mailto:team@byteee.net" external={true} color="violet">
                  team@byteee.net
                </Link>
              </Text>
            </div>
            <div
              className={[style.positionsList, style.openPositionsMargin].join(
                " "
              )}
            >
              {mapVacancies(vacancies)}
            </div>
          </>
        ) : (
          <div
            className={[
              style.openPositions_subtitle,
              style.openPositionsFalse,
              style.blocks_width
            ].join(" ")}
          >
            <Text size="m" as="p">
              Right now, we don’t have any job openings, but we’re always open to new
              opportunities. So, if you believe you are the one piece of a puzzle
              missing from our team, please do not hesitate to contact us at{" "}
              <Link to="#" color="violet">
                team@byteee.net
              </Link>
            </Text>
          </div>
        )}
      </>
    </Layout>
  );
};

export default CareersPage;

const Сarousel = (): ReactElement => (
  <>
    <Swiper
      slidesPerView={1.3}
      spaceBetween={40}
      centeredSlides
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className={["mySwiper", style.swipeContainer].join(" ")}
    >
      <SwiperSlide>
        <div className={style.icon}>
          <img src={careers_startup_mindset} alt="ups" />
          <Text size={"m"} as="p" bold>
            Startup mindset
          </Text>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={style.icon}>
          <img src={careers_personal_and_professional_growth} alt="ups" />
          <Text size={"m"} as="p" bold>
            Personal and professional growth
          </Text>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={style.icon}>
          <img
            src={careers_offbeat_team_building_activities}
            width="125"
            height="125"
            alt="ups"
          />
          <Text size={"m"} as="p" bold>
            Offbeat team building activities
          </Text>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={style.icon}>
          <img src={careers_democratic_decision_making} alt="ups" />
          <Text size={"m"} as="p" bold>
            Democratic decision-making
          </Text>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={style.icon}>
          <img
            src={careers_work_from_any_part_of_the_worls}
            width="125"
            height="125"
            alt="ups"
          />
          <Text size={"m"} as="p" bold>
            Work from any part of the world
          </Text>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={style.icon}>
          <img src={careers_up_to_paid_work} alt="ups" />
          <Text size={"m"} as="p" bold>
            Up to 10% paid work time for side projects
          </Text>
        </div>
      </SwiperSlide>
    </Swiper>
  </>
);
