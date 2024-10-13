import React from "react";
import { Container, Header } from "./styles";
import { BoxTwitter } from "./BoxTwitter";
import { Post } from "./Post";

export const Home = () => {
  return (
    <Container>
      {/* Headers */}
      <Header>Home</Header>
      {/* TweetBox */}
      <BoxTwitter />
      {/* Post */}
      <Post />
      {/* Post */}
      {/* Post */}
    </Container>
  );
};
