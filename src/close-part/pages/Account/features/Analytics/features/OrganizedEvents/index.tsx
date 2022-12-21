import React, { useState } from "react";
import style from "./style.module.scss";
import TableComponent, { DataType } from "src/close-part/features/Table";
import TableMobile from "./TableMobile";
import { Text, Icons, Status, Button } from "@viktor666/byteee-kit";
import moment from "moment";
import { dataMock as data, columns } from "./data";

const OrganizedEvents = () => {
  const defaultSort = {
    "Date": true,
    "Registered": false,
    "Attended": false,
  };


  const [sort, setSort] = useState<{ [key: string]: boolean}>(defaultSort);
  const [sortItem, setSortItem] = useState("Date");
  const {
    ArrowDown,
    MoreHorizontal
  } = Icons;

  const getTextTd = (text: React.ReactNode) => (
    <Text as="div" size={["s", "s", "s", "m"]} color="grayscale1000">
      {text}
    </Text>
  );

  const getStyleData = (obj: DataType): DataType => {
    const newObj = { ...obj };
    if(typeof newObj.date === "string" && typeof newObj.settings === "string") {
      newObj.date = (
        <div className={[
          style.text,
          style.text_date
        ].join(" ")}>
          {getTextTd(
            moment(newObj.date).format("MMM D, YYYY")
          )}
          <Status
            color="mint"
            text="Upcoming"
            size="xs"
          />
        </div>
      );
      newObj.settings = (
        <div className={[
          style.text,
          style.pointer,
        ].join(" ")}>
          <MoreHorizontal color="violet500" size="m" />
        </div>
      );
    }
    for (const prop in newObj) {
      if(prop !== "date" && prop !== "key" && prop !== "settings") {
        newObj[prop] = (
          <div className={style.text}>
            {getTextTd(newObj[prop])}
          </div>
        );
      }

    }
    return newObj;
  };

  const sortData = (key: string) => {
    if(key in sort) {
      const value = sort[key];
      const newSortObj = {
        ...sort,
        [key]: !value,
      };
      setSort(newSortObj);
    }
  };

  const searchSortWord = (obj: { [key: string]: boolean}) => {
    let word = "";
    for (const prop in obj) {
      if(obj[prop] === true) {
        word = prop;
      }
    }
    return word;
  };

  const dataDesktop = [...data].map(item => ({
    ...item,
    ...getStyleData(item),
  }));

  return (
    <div className={style.wrap}>
      <div className={style.main_title}>
        <Text size={[6, 6, 6, 5]} bold>
            Organized events
        </Text>
      </div>
      <div className={style.mobile}>
        <div className={style.sort}>
          <Text size="m" color="grayscale700">
            Sort by
          </Text>
          <div className={style.button}>
            <Button
              type="flat"
              theme="violet"
              size="m"
              onClick={() => 1 + 1}
            >
              {searchSortWord(sort)}
            </Button>
          </div>

        </div>
        <TableMobile data={[...data]} />
      </div>
      <div className={style.desktop}>
        <TableComponent
          data={dataDesktop}
          columns={columns.map(item => ({
            ...item,
            onClick: sortData,
            title: (
              <div className={
                [
                  style.head,
                  (item.key in sort) ? style.pointer : ""
                ].join(" ")
              }
              onClick={() => setSortItem(item.key)}
              >
                <Text as="div" size="s" color="grayscale700">
                  {item.title}
                </Text>
                {item.sort && (

                  <div className={[
                    style.head_icon,
                    sort[item.key] === false ? style.head_icon__open : ""
                  ].join(" ")}
                  >
                    {sortItem===item.key && <ArrowDown size="s" color="grayscale700" />}
                  </div>
                )}
              </div>
            )
          }))}
        />
      </div>

    </div>

  );
};

export default OrganizedEvents;
