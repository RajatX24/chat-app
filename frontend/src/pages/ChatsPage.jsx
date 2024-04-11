import React, { useEffect } from "react";
import { Box } from "@mui/material";
import MyChats from "../components/MyChats";
import ChatBox from "../components/ChatBox";
import { ChatState } from "../Context/ChatProvider";
import SideDrawer from "../components/SideDrawer";
import axios from "axios";

const ChatsPage = () => {
  const { user } = ChatState();
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          height: "90vh",
          padding: "10px",
        }}
      >
        {user && <MyChats />}
        {user && <ChatBox />}
      </Box>
    </div>
  );
};

export default ChatsPage;
