import React, { ReactElement } from "react";
import Layout from "src/features/Layout";
import Banner from "./features/Banner";
import EventCreation from "./features/EventCreation";
import MakePublicSection from "./features/MakePublic";
import TryPlatform from "./features/TryPlatform";
import FiveSteps from "./features/FiveSteps";
import style from "./style.module.scss";

const IndexPage = (): ReactElement => (
  <Layout gridTemplate={true}>
    <div className={style.container}>
      <Banner />
      <EventCreation />
      <FiveSteps />
      <MakePublicSection />
      <TryPlatform />
    </div>
  </Layout>
);

export default IndexPage;
