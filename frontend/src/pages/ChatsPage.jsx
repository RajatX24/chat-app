import React, { useEffect } from "react";
import axios from "axios";

const ChatsPage = () => {
  const [chats, setChats] = React.useState([]);

  useEffect(() => {
    async function getChat() {
      const chatData = await axios.get(
        `${import.meta.env.VITE_SERVER}/api/chats`
      );
      console.log(chatData.data);
      setChats(chatData.data);
    }

    getChat();
  }, []);
  return (
    <div>
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default ChatsPage;
