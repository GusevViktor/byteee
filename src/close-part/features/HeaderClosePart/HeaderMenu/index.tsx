import React from "react";
import style from "./style.module.scss";
import Link from "src/features/Link";
import { Button } from "@viktor666/byteee-kit";

const { wrap, close, divider } = style;

export interface Props {
  openMenu?: boolean;
}

const HeaderMenu = ({ openMenu }: Props) => (
  <div className={openMenu ? wrap : close}>
    <Link to="/account" hoverUnderLine={false} color="violet">
      My profile
    </Link>
    <Link to="/account-settings" hoverUnderLine={false} color="violet">
      Edit profile
    </Link>
    <hr className={`${divider} solid`}/>
    <Link to="/" hoverUnderLine={false} color="violet">
      Homepage
    </Link>
    <Link to="/event-catalog" hoverUnderLine={false} color="violet">
      Event catalog
    </Link>
    <Link to="/features" hoverUnderLine={false} color="violet">
      Features
    </Link>
    <Link to="/pricing" hoverUnderLine={false} color="violet">
      Pricing
    </Link>
    <Link to="/learning" hoverUnderLine={false} color="violet">
      Learning
    </Link>
    <hr className={`${divider} solid`}/>
    <Button theme="red" type="flat" size="s">
      Log out
    </Button>
  </div>
);
export default HeaderMenu;