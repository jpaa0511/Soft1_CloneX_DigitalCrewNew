import React from "react";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import UploadIcon from "@mui/icons-material/Upload";
import {
  Post,
  Avatar,
  Images,
  PostBody,
  PostDescription,
  PostFooter,
} from "../Home/styles";

export const Posts = ({ name, username, text, avatar, imagenPost }) => {
  return (
    <Post>
      <div className="post-avatar">
        <Avatar src={avatar} alt={`${name}'s avatar`} />
      </div>
      <PostBody>
        <div>
          <div>
            <h2>
              {name}
              <span>
                <VerifiedUserIcon className="post_icon" />@{username}
              </span>
            </h2>
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
