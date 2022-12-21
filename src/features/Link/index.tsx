import React from "react";
import { Link, LinkProps as LinkComponentProps } from "@viktor666/byteee-kit";
import { Link as RouterLink, useLocation } from "react-router-dom";
import style from "./style.module.scss";


interface LinkProps extends LinkComponentProps {
  to: string;
  external?: boolean;
  nbsp?: boolean;
  target?: "_blank" | "_parent" | "_self" | "_top";
}

const LinkBlock = (props: LinkProps) => {
  const location = useLocation();
  const { to, external = false, nbsp = false, target = "_self" } = props;

  const getLink = () => (
    <Link {...props}>
      <>
        {nbsp && "\u00A0"}
        {props.children}
        {nbsp && "\u00A0"}
      </>
    </Link>
  );

  const propsRouterLink = {
    to,
    target,
    ...(location?.pathname && { state: { prevPath: location.pathname } })
  };

  return (
    <div className={style.wrap}>
      {!external ? (
        <RouterLink {...propsRouterLink}>
          {getLink()}
        </RouterLink>
      ) : (
        <a href={to} target={target}>
          {getLink()}
        </a>
      )}
    </div>
  );
};

export default LinkBlock;
