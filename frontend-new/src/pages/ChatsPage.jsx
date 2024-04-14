import React, { useEffect } from "react";
import MyChats from "../components/MyChats";
import ChatBox from "../components/ChatBox";
import { ChatState } from "../Context/ChatProvider";
import SideDrawer from "../components/SideDrawer";

const ChatsPage = () => {
  const { user } = ChatState();
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <div
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
      </div>
    </div>
  );
};

export default ChatsPage;
