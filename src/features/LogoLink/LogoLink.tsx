import React, { ReactElement } from "react";
import { Link, To } from "react-router-dom";
import { ReactComponent as LogoDark } from "src/assets/images/logo_dark.svg";

interface Props {
  path:To;
}
const LogoLink = ({ path }:Props): ReactElement => (
  <Link to={path}>
    <LogoDark />
  </Link>
);

export default LogoLink;
