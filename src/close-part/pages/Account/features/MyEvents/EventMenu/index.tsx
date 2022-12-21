import React from "react";
import style from "./style.module.scss";
import Link from "src/features/Link";
import { Button } from "@viktor666/byteee-kit";
import { ListItem, prepareList } from "./service";

const { wrap, close } = style;

export interface Props {
  openMenu?: boolean;
  roles: string[];
  status: string;
}

const EventMenu = ({ openMenu, roles, status }: Props) => (
  <div className={openMenu ? wrap : close}>
    {prepareList(roles, status).map((item: ListItem, index) => {
      if (item.type === "link") {
        return <Link
          key={index}
          to={item.url ?? ""}
          color="violet" hoverUnderLine={false}>
          {item.name}
        </Link>;
      }
      if (item.type === "button") {
        return <Button
          key={index}
          theme="red"
          type="flat"
          size="s"
          onClick={item.action}
        >
          {item.name}
        </Button>;
      }
    })}
  </div>
);
export default EventMenu;