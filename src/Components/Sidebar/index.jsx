import React from "react";
import { Container } from "./styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import EmailIcon from "@mui/icons-material/Email";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { IconsOptions } from "./IconsOptions";
import { Button } from "@mui/material";

export const Sidebar = () => {
  return (
    <Container>
      <TwitterIcon className="LogoTitter" />
      <IconsOptions Icon={HomeIcon} text="Home" />
      <IconsOptions Icon={SearchIcon} text="Search" />
      <IconsOptions Icon={NotificationsActiveIcon} text="Notifications" />
      <IconsOptions Icon={EmailIcon} text="Email" />
      <IconsOptions Icon={BookmarksIcon} text="Bookmarks" />
      <IconsOptions Icon={PeopleIcon} text="Communities" />
      <IconsOptions Icon={PersonIcon} text="Profile" />
      <IconsOptions Icon={MoreHorizIcon} text="More" />

      <Button variant="outlined" fullWidth>
        Twitter
      </Button>
    </Container>
  );
};
