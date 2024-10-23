import { TwitterBox, Avatar, Div, Form, DivIcon,DivBottom } from "./style";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import GifIcon from "@mui/icons-material/Gif";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import PollIcon from "@mui/icons-material/Poll";
import { Button } from "@mui/material";
import { UserContext } from "../../auth/Contexts/UserContext";
import React, { useContext } from "react";

export const TwitterBoxs = () => {

  const { user } = useContext(UserContext);

  return (
    <TwitterBox>
      <Form>
        <Div>
          <Avatar
            src={ user?.photoURL  
            }
          />
          <div className="columbus">
            <input type="text" placeholder="¿Qué está pasando?" />
           
          </div>
        </Div>
      </Form>
      <DivBottom>
        <DivIcon>
          <AddPhotoAlternateIcon />
          <GifIcon />
          <EmojiEmotionsIcon />
          <PollIcon />
        </DivIcon>
        <Button type="submit">Post</Button>
      </DivBottom>
    </TwitterBox>
  );
};
