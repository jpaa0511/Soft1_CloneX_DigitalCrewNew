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

export const Posts = () => {
  return (
    <Post>
      <div className="post-avatar">
        <Avatar src="https://randomuser.me/api/portraits/women/17.jpg" />
      </div>
      <PostBody>
        <div>
          <div>
            <h2>
              Json dev{" "}
              <span>
                <VerifiedUserIcon className="post_icon" />
                @Emilio1
              </span>
            </h2>
            <PostDescription>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam,
                quia cum atque molestias veritatis animi voluptates eum aut
                delectus cumque dignissimos odit est numquam quas dolores
                recusandae obcaecati beatae temporibus?
              </p>
            </PostDescription>
          </div>
          <Images src="https://randomuser.me/api/portraits/women/17.jpg" />
          <PostFooter>
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <UploadIcon fontSize="small" />
          </PostFooter>
        </div>
      </PostBody>
      <div>Post</div>
    </Post>
  );
};
