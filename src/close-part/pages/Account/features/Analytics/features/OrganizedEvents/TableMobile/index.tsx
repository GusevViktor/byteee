import React from "react";
import style from "./style.module.scss";
import { DataType } from "src/close-part/features/Table";
import { Text, Status, Icons } from "@viktor666/byteee-kit";
import moment from "moment";

interface TableMobileProps {
  data: DataType[],
}

const TableComponent = (props: TableMobileProps) => {

  const {
    MoreHorizontal
  } = Icons;

  const {
    data,
  } = props;

  return (
    <div className={style.wrap}>
      {data.map((item, index) => (
        <div key={item.key}>
          <div className={style.date_wrap}>
            <div className={style.flex}>
              <Text as="div" color="grayscale600" size="xs">
                {typeof item.date === "string" && (
                  moment(item.date).format("MMM D, YYYY")
                )}
              </Text>
              <div className={style.status}>
                <Status
                  color="mint"
                  text="Upcoming"
                  size="xs"
                />
              </div>
            </div>
            <div className={[style.dots, style.pointer].join(" ")}>
              <MoreHorizontal color="violet500" size="m" />
            </div>
          </div>
          <div className={style.text}>
            <Text size="m" color="grayscale900">
              {item.event}
            </Text>
          </div>
          <div className={style.info}>
            {item?.registered && (
              <div className={style.info_block}>
                <div className={style.info_title}>
                  <Text size="xs" color="grayscale500">
                    Registered
                  </Text>
                </div>
                <div className={style.info_item}>
                  <Text size="s" color="grayscale900">
                    {item.registered}
                  </Text>
                </div>
              </div>
            )}
            {item?.attended && (
              <div className={[
                style.info_block,
                style.info_block__no_margin
              ].join(" ")}>
                <div className={style.info_title}>
                  <Text size="xs" color="grayscale500">
                    Attended
                  </Text>
                </div>
                <div className={style.info_item}>
                  <Text size="s" color="grayscale900">
                    {item.attended}
                  </Text>
                </div>
              </div>
            )}
          </div>
          {index !== data.length - 1 && (
            <div className={style.line} />
          )}
        </div>
      ))}
    </div>
  );
};

export default TableComponent;