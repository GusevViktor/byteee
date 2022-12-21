import { AccordionPrice as Accordion, Text, TextOP } from "@viktor666/byteee-kit";
import React, { ReactElement } from "react";
import FreeVersion from "./features/FreeVersion";
import PROVersion from "./features/ProVersion";
import style from "./style.module.scss";
import Layout from "src/features/Layout";
import Link from "src/features/Link";

const questions = [
  {
    title: "I use byteee Free right now. What happens when you roll out other plans?",
    content:
      "We’ll notify you and other registered users in advance. After that, " +
      "you’ll still be able to organize free events with all the features you had " +
      "before or upgrade to a paid plan with even more useful tools and options.",
  },
  {
    title: "Is Pro a subscription-based plan?",
    content:
      "No, we don’t do subscriptions. You only pay " +
      "for what you need: either for organizing an event or for a ticket " +
      "if the admission isn’t free.",
  },
  {
    title: "What type of events can I hold on byteee?",
    content:
      "You can hold events with open registration or registration only via a link." +
      " The maximum event duration on the Free plan is 4 hours. " +
      "The upcoming Pro plan will allow you to hold extended " +
      "events for up to 72 hours.",
  },
  {
    title: "Why do I need an event landing page?",
    content:
      "An event landing page contains all the event details, including " +
      "speakers, date, time, and ticket prices (if not admission-free). " +
      "It also has a registration module. Every event landing page has a unique" +
      "URL that you can share via messenger apps, social media, or ads.",
  },
  {
    title: "Who can organize an event?",
    content:
      "Any registered user can organize an event. All you need is" +
      "to sign up with an email and fill " +
      "in your first and last name in the profile.",
  },
  {
    title: "Who can participate in an event?",
    content:
      "Any registered user can. You only need to sign up with an" +
      "email to participate in an event and use most of its " +
      "features, like event chat or analytics.",
  },
  {
    title:
      "I want to participate in and organize events. Do " +
      "I need two separate accounts?",
    content:
      "You only need one account for all the roles: a " +
      "participant, an organizer, or a speaker.",
  },
  {
    title: "What do you mean by 'Public profiles'?",
    content:
      "Your profile is marked as 'public' if you choose to share any " +
      "info with other users. It's up to you "
      +"to disclose personal details, social media links, past or "
      +"upcoming events, as well as allow others to connect" +
      "with you and get updates on "
      +"your event activity. You can always change your profile privacy settings.",
  },
  {
    title: "Is there an byteee mobile app?",
    content:
      "At the moment you can use byteee in a web browser on your computer " +
      "or mobile device. Spoiler: we are working on "
      +"the mobile app and plan to release it later this year.",
  },
];
const PricingPage = (): ReactElement => (
  <Layout gridTemplate={true}>
    <div className={style.wrap}>
      <div className={style.titleAndSubtitle}>
        <div className={style.title}>
          <TextOP size={[5, 5, 3, 3, 3, 2, 1]} font="sangbleu" bold>
              Let’s talk features, not prices
          </TextOP>
        </div>
        <div className={style.subtitle}>
          <Text size="m">
              Everything comes with a price, they said. Well, byteee doesn`t.
          </Text>
          <Text size="m">
              We are currently in public beta, and during this period, you can use
              every existing platform feature for free.
          </Text>
        </div>
      </div>
      <div className={style.versions}>
        <FreeVersion />
        <PROVersion />
      </div>
      <section className={style.asked_questions}>
        <div className={style.subtitle_questions}>
          <TextOP size={[6, 6, 5, 5, 4, 4]} bold font={"inter"}>
              Frequently asked questions
          </TextOP>
        </div>
        <Text size="m" as="div">
            Can’t find the answer here? Feel free to reach out:{" "}
          <Link to={"mailto:support@byteee.net"} external={true} color="violet">
              support@byteee.net
          </Link>
        </Text>
      </section>
    </div>
    <div className={style.wrap_accordion}>
      <Accordion items={questions} />
    </div>
  </Layout>
);

export default PricingPage;
