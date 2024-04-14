import React from "react";
import ScrollableFeed from "react-scrollable-feed";
import { isSameSender, isLastMessage } from "../../config/ChatLogics";
import { ChatState } from "../../Context/ChatProvider";
import { Avatar, Tooltip } from "@mui/material";
import { isSameSenderMargin, isSameUser } from "../../config/ChatLogics.jsx";

const ScrollableMessages = ({ messages }) => {
  const { user } = ChatState();

  return (
    <ScrollableFeed>
      {messages &&
        messages.map((m, i) => (
          <div key={m._id} style={{ display: "flex" }}>
            {(isSameSender(messages, m, i, user._id) ||
              isLastMessage(messages, i, user._id)) && (
              <Tooltip title={m?.sender?.name || "user"} arrow>
                <Avatar src={m?.sender?.picture?.image}>
                  {m?.sender?.name?.slice(0, 1)}
                </Avatar>
              </Tooltip>
            )}
            <span
              style={{
                backgroundColor:
                  m.sender._id === user._id ? "#BEE3F8" : "#B9F5D0",
                borderRadius: "20px",
                padding: "5px 15px",
                maxWidth: "75%",
                marginLeft: isSameSenderMargin(messages, m, i, user._id),
                marginTop: isSameUser(messages, m, i, user._id) ? 3 : 10,
              }}
            >
              {m.content}
            </span>
          </div>
        ))}
    </ScrollableFeed>
  );
};

export default ScrollableMessages;
