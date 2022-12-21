import React from "react";
import { Tabs } from "@viktor666/byteee-kit";

interface NavigationProps {
  activeKey: React.Key | null;
  onClick: (key: React.Key | null) => void;
  className?: string;

}

export const Navigation = ({ activeKey, onClick }:NavigationProps) => (
  <div>
    <Tabs activeKey={activeKey} onClick={onClick}>
      <Tabs.Tab key="1" label="My events"/>
      <Tabs.Tab key="2" label="Analytics"/>
    </Tabs>
  </div>
);
