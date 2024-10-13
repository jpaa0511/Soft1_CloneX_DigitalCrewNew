import React from "react";
import { DivIcon, Widget, Header, DivContent } from "./styles";
import SearchIcon from "@mui/icons-material/Search";

export const Widgets = () => {
  return (
    <Widget>
      <Header>
        <DivIcon>
          <SearchIcon className="searchIcon" />
          <input placeholder="Buscar en twitter colone" />
        </DivIcon>
      </Header>

      <DivContent>
        <h2>What's happening</h2>
      </DivContent>
    </Widget>
  );
};
