import React from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import UploadIcon from "@mui/icons-material/Upload";
import { Post, Images, PostBody, PostDescription, PostFooter } from "./styles";

export const Posts = ({ text, imagenPost }) => {
  return (
    <Post>
      <PostBody>
        <div>
          <div>
            <PostDescription>
              <p>{text}</p>
            </PostDescription>
          </div>
          {imagenPost && <Images src={imagenPost} alt="Imagen del post" />}
          <PostFooter>
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <UploadIcon fontSize="small" />
          </PostFooter>
        </div>
      </PostBody>
    </Post>
  );
};
