import React from "react";

export interface TabProps {
  key: string | number;
  label: string;
  startIcon:React.ReactElement | false;
  children?: React.ReactNode;
}

export const Tab = ({ children }: TabProps) => (
  <>{children && children}</>
);
