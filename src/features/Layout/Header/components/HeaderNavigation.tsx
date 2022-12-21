import Link from "../../../Link";
import React from "react";

const HeaderNavigation = () => (
  <>
    <Link to={"/event-catalog"} size={"m"} color={"black"}>
                Event catalog
    </Link>
    <Link to={"/features"} size={"m"} color={"black"}>
                Features
    </Link>
    <Link to={"/pricing"} size={"m"} color={"black"}>
                Pricing
    </Link>
    <Link to={"/learning"} size={"m"} color={"black"}>
                Learning
    </Link>
  </>
);
export default HeaderNavigation;