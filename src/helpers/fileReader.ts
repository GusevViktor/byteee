import React from "react";

export const fileReader = (
  e: React.FormEvent<HTMLInputElement>, setState: (value: string) => void
) => {
  const curFile = e?.currentTarget?.files?.[0];
  const reader = new FileReader();
  if (curFile) {
    reader.readAsDataURL(curFile);
    reader.onload = (e) => {
      setState(`${e.target?.result}`);
    };
  }
};