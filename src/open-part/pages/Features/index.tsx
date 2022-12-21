import React, { ReactElement } from "react";
import Layout from "src/features/Layout";
import style from "./style.module.scss";
import PublicProfiles from "./features/PublicProfiles";
import Chat from "./features/Chat";
import EventAccess from "./features/EventAccess";
import EventInterface from "./features/EventInterface";
import FunLearning from "./features/FunLearning";

const FeaturesPage = (): ReactElement => (
  <Layout gridTemplate={true}>
    <div className={style.container}>
      <PublicProfiles />
      <Chat />
      <EventAccess />
      <EventInterface />
      <FunLearning />
    </div>
  </Layout>
);
export default FeaturesPage;
