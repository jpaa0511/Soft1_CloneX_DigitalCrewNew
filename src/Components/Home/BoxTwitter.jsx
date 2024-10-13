import React from "react";
import { Boxtwitter, Avatar, Div, Form, DivIcon } from "./styles";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import GifIcon from "@mui/icons-material/Gif";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import PollIcon from "@mui/icons-material/Poll";
import { Button } from "@mui/material";

export const BoxTwitter = () => {
  return (
    <Boxtwitter>
      <Form>
        <Div>
          <Avatar
            src="https://randomuser.me/api/portraits/women/17.jpg"
            alt="User Avatar"
          />
          <div className="columbus">
            <input type="text" placeholder="¿Qué está pasando?" />
            <input type="text" placeholder="Usuario" />
          </div>
        </Div>
      </Form>
      <Div>
        <DivIcon>
          <AddPhotoAlternateIcon />
          <GifIcon />
          <EmojiEmotionsIcon />
          <PollIcon />
        </DivIcon>
        <input type="text" placeholder="URL: Opcional de imeg" />
        <Button type="submit">Tweet</Button>
      </Div>
    </Boxtwitter>
  );
};
