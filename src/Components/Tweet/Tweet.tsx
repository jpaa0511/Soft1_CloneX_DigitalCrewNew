import React from "react";
import {
  TweetContainer,
  Avatar,
  TweetContent,
  UserInfo,
  TweetText,
  Interactions,
} from "./styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RepeatIcon from "@mui/icons-material/Repeat";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";

export const Tweet = ({ avatar, name, handle, text }) => {
  return (
    <TweetContainer>
      <Avatar src={avatar} alt="User Avatar" />
      <TweetContent>
        <UserInfo>
          <strong>{name}</strong> <span>@{handle}</span>
        </UserInfo>
        <TweetText>{text}</TweetText>
        <Interactions>
          <div>
            <ChatBubbleOutlineIcon />
          </div>
          <div>
            <RepeatIcon />
          </div>
          <div>
            <FavoriteBorderIcon />
          </div>
          <div>
            <ShareIcon />
          </div>
        </Interactions>
      </TweetContent>
    </TweetContainer>
  );
};
