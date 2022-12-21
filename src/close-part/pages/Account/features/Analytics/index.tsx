import React from "react";
import EventAnalytics from "./features/EventAnalytics";
import UserAnalytic from "./features/UserAnalytic";
import OrganizedEvents from "./features/OrganizedEvents";
import style from "./style.module.scss";
import ZeroValueTable from "./features/OrganizedEvents/ZeroValueTable";

const AnalyticsPage = () => (
  <div className={style.wrap}>
    <div className={style.block}>
      <UserAnalytic />
      <EventAnalytics />
    </div>
    <OrganizedEvents />
    <ZeroValueTable />
  </div>


);
export default AnalyticsPage;
