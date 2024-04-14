import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const chatContext = createContext();

const ChatProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [selectedChat, setSelectedChat] = useState();
  const [chats, setChats] = useState([]);
  const [notification, setNotification] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (!userInfo) {
      navigate("/");
    } else {
      setUser(userInfo);
    }
  }, [navigate]);

  return (
    <chatContext.Provider
      value={{
        user,
        setUser,
        selectedChat,
        setSelectedChat,
        chats,
        setChats,
        notification,
        setNotification,
      }}
    >
      {children}
    </chatContext.Provider>
  );
};

function ChatState() {
  return useContext(chatContext);
}

export { ChatProvider, ChatState };
