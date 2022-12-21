import React from "react";
import style from "./style.module.scss";
import { Text, Icons } from "@viktor666/byteee-kit";
import { Tab, TabProps } from "./Tab";
import { useDesktopType } from "src/hooks";

export interface TabsProps {
  className?: string;
  onChange?: () => void;
  onClick: (key: React.Key | null) => void;
  children: React.FunctionComponentElement<TabProps>[];
  activeKey: React.Key | null;
}

export interface Label {
  label: string,
  key: React.Key | null,
  startIcon?:React.ReactElement | false,
  child: React.ReactNode,
}

export interface ChildProps {
  child: React.ReactNode
}

const { ChevronDown } = Icons;

const VerticalTabs = ({
  children,
  onChange,
  onClick,
  className,
  activeKey
}: TabsProps) => {
  let labels: Label[] = [];
  const isDesktop = useDesktopType();

  if (Array.isArray(children) && children.length) {
    labels = children.map((child):Label => (
      {
        label: child.props.label,
        key: child.key,
        startIcon: child.props.startIcon,
        child: child.props.children
      }
    ));
  }

  return (
    <div className={style.wrap}>
      <ul onChange={onChange}
        className={`${style.tabs} ${className} ${style.list}`}>
        {labels.map((label) => (
          <li key={label.key} onChange={onChange}>
            <div className={style.tab} onClick={() => onClick(label.key)}>
              <div className={style.label}>
                <div
                  className={activeKey === label.key ? style.black : style.grey}
                >
                  {label.startIcon}
                </div>
                <Text
                  size={"m"}
                  font="inter"
                  bold={!isDesktop}
                  color={activeKey === label.key || !isDesktop ?
                    "grayscale900" : "grayscale500"}
                >
                  {label.label}
                </Text>
              </div>
              {activeKey === label.key && (
                <div className={style.indicator}/>
              )}
              <div className={activeKey === label.key ?
                style.arrow : style.arrowUp}>
                <ChevronDown color={"violet600"} size={"m"}/>
              </div>
            </div >
            {activeKey === label.key && label.child}
            <hr className={`${style.hr_bottom} solid`}/>
          </li>
        ))
        }
      </ul>
    </div>
  );
};
VerticalTabs.Tab = Tab;
export default VerticalTabs;