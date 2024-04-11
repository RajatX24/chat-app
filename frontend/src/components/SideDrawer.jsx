import React from "react";
import { Tooltip, Button, Typography, Menu, Drawer, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsMenu from "./Misc/NotificationsMenu";
import ProfileMenu from "./Misc/ProfileMenu";
// import SearchUserDrawer from "./Misc/SearchUserDrawer";

const SideDrawer = () => {
  return (
    <>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "white",
          width: "100%",
          padding: "5px 10px 5px 10px",
          borderWidth: "5px",
        }}
      >
        {/* <SearchUserDrawer /> */}
        <Tooltip title="Search Users To Chat" placement="bottom-end" arrow>
          <Button variant="contained" onClick={toggleDrawer(true)}>
            <SearchIcon />
            Search User
          </Button>
        </Tooltip>
        <Typography variant="h3">Chats</Typography>
        <Box style={{ display: "flex" }}>
          <NotificationsMenu />
          <ProfileMenu />
        </Box>
      </Box>
    </>
  );
};

export default SideDrawer;
