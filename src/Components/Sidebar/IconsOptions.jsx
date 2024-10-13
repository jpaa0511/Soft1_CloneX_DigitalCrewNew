import React from "react";
import { SidebarIcon } from "./styles";

export const IconsOptions = ({ text, Icon }) => {
  return (
    <SidebarIcon>
      <Icon />
      <h2>{text}</h2>
    </SidebarIcon>
  );
};
