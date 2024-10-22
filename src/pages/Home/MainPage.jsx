import React, { useContext } from "react";
import { Sidebar } from "../../Components/Sidebar/index";
import { Widgets } from "../../Components/Widgets";
import GlobalStyles from "../../styles/StylesGlobal";
import { Container, SidebarContainer, WidgetsContainer } from "./styles";
import { TwitterBoxs } from "../../Components/TwitterBox/TwitterBox";
import { Tweet } from "../../Components/Tweet/Tweet";
import { tweets } from "../../Components/Moks/tweets";

const MainPage = () => {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <Container>
          <TwitterBoxs />
          {tweets.map((tweet) => (
            <Tweet
              key={tweet.id}
              avatar={tweet.avatar}
              name={tweet.name}
              handle={tweet.handle}
              text={tweet.text}
            />
          ))}
        </Container>
        <WidgetsContainer>
          <Widgets />
        </WidgetsContainer>
      </div>
    </>
  );
};

export default MainPage;
