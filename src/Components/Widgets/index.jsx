import React from "react";
import {
  WidgetContainer,
  SearchBar,
  ContentSection,
  InputContainer,
  TrendsList,
  TrendItem,
} from "./styles";
import SearchIcon from "@mui/icons-material/Search";
import { trends } from "../Moks/trends";

export const Widgets = () => {
  return (
    <WidgetContainer>
      <SearchBar>
        <InputContainer>
          <SearchIcon className="searchIcon" />
          <input placeholder="Buscar en X" />
        </InputContainer>
      </SearchBar>
      <ContentSection>
        <h2>What's happening</h2>
        <TrendsList>
          {trends.map((trend) => (
            <TrendItem key={trend.id}>
              <strong>{trend.name}</strong>
              <span>{trend.tweet_count}</span>
              <span>{trend.description}</span>
            </TrendItem>
          ))}
        </TrendsList>
      </ContentSection>
    </WidgetContainer>
  );
};
