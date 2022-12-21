import React, { useState } from "react";
import Layout from "src/close-part/features/Layout";
import style from "./style.module.scss";
import { Tabs } from "@viktor666/byteee-kit";
import Person from "./features/Person";
import imageGirl from "src/assets/images/hamster.png";
import MyEvents from "./features/MyEvents";
import AnalyticsPage from "./features/Analytics";
import ChatFull from "src/close-part/features/Chat/ChatFull";

const { grid_left, grid_center, grid_right, navigation_wrap } = style;
const AccountPage = () => {
  const [selected, setSelected] = useState<React.Key| null>("1");
  const [isOpenChat, setIsOpenChat] = useState(true);
  const changeIsOpen = () => setIsOpenChat(!isOpenChat);
  return (
    <Layout onClickChat={changeIsOpen} isOpenChat={isOpenChat}>
      <div className={grid_left}>
        <Person
          srcIcon={imageGirl}
          name="Grigorii Mirrnzhurenko"
          position="UI/UX Designer"
          company="byteee ™"
          followers="20K"
          following="1K"
          twitter="/"
          instagram="/"
          facebook="/"
          linkedin="/"
          site="mysite.com"
          linkSite="/"
          description="
          Lorem ipsum dolor sit
          amet, us consectetur adipiscing elit ut aliquam, purus sit amet luctus
          venenatis, lectus magna fringilla urna, porttitor lectus magna"
        />
      </div>
      <div className={grid_center}>
        <div className={navigation_wrap}>
          <Tabs activeKey={selected} onClick={(key) => setSelected(key)}>
            <Tabs.Tab key="1" label="My events"/>
            <Tabs.Tab key="2" label="Analytics"/>
          </Tabs>
        </div>
        {selected === "1" && <MyEvents/>}
        {selected === "2" && <AnalyticsPage/>}
      </div>
      <div className={grid_right}>
        <ChatFull onClickHeader={changeIsOpen} isOpen={isOpenChat} type="desktop" />
      </div>

    </Layout>
  );
};
export default AccountPage;