import React from "react";
import style from "./style.module.scss";
import { Text } from "@viktor666/byteee-kit";
import { Field } from "formik";

export interface ProfileTypeProps{
  onClick?: () => void;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  value?: string;
  name?: string;
  title?: string;
  description?: string;
}
export const ProfileType = ({ onChange,
  onClick,
  description,
  value,
  name,
  title, }:ProfileTypeProps) => (
  <label className={style.wrap}>
    <Field type="radio" onChange={onChange}
      onClick={onClick}
      value={value}
      name={name}
    />
    <div className={style.card}>
      <Text size={"m"}
        bold>{title}</Text>
      <Text size={"s"}>
        {description}
      </Text>
    </div>
  </label>
);