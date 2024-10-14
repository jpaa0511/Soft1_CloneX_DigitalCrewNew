import React from "react";
import { Container, Header } from "./styles";
import { BoxTwitter } from "./BoxTwitter";
import { Posts } from "./Post";

export const Home = () => {
  return (
    <Container>
      {/* Headers */}
      <Header>Home</Header>
      {/* TweetBox */}
      <BoxTwitter />
      {/* Post */}
      <Posts />
      {/* Post */}
      {/* Post */}
    </Container>
  );
};
