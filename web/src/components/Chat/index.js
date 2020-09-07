import React, { useState, useEffect } from "react";
import Pusher from "pusher-js";
import classNames from "classnames";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import SendIcon from "@material-ui/icons/Send";

import * as apiService from "../../services/api.service";

import "./styles.scss";

function Chat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    apiService.getMessages().then((messages) => {
      setMessages(messages);
    });
  }, []);

  useEffect(() => {
    Pusher.logToConsole = true;

    const pusher = new Pusher("cd1a4e0cb02a66800705", {
      cluster: "ap1",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("insert", (newMessage) => {
      setMessages((preMessages) => preMessages.concat(newMessage));
    });
    return () => {
      channel.unbind("insert");
      channel.unsubscribe("messages");
    };
  }, [messages]);

  return (
    <div className="chat">
      <header className="chat__header">
        <Avatar src="https://anhdo95.github.io//images/my-avatar-200wb73daaeac6b4a993eab313c49ff392fb.jpg" />
        <div className="chat__header-info">
          <h3 className="chat__header-room-name">Room name</h3>
          <span className="chat__header-last-seen">Last seen at ...</span>
        </div>
        <div className="chat__header-right">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </header>

      <div className="chat__body">
        <ul className="chat__body-messages">{messages.map(renderMessage)}</ul>
      </div>

      <footer className="chat__footer">
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <form className="chat__footer-comment-box">
          <input
            className="chat__footer-comment-input"
            type="text"
            placeholder="Type a message"
          />
          <button className="chat__footer-send-btn" type="submit">
            <SendIcon />
          </button>
        </form>
        <IconButton>
          <MicIcon />
        </IconButton>
      </footer>
    </div>
  );
}

function renderMessage(message) {
  const bodyMessageClass = classNames({
    "chat__body-message": true,
    "chat__body-message--text-right": message.received,
  });

  const bodyTextClass = classNames({
    "chat__body-text": true,
    "chat__body-text--highlight": message.received,
  });

  return (
    <li key={message.id} className={bodyMessageClass}>
      <strong className="chat__body-name">{message.name}</strong>
      <p className={bodyTextClass}>{message.content}</p>
      <span className="chat__body-timestamp">
        {new Date(message.timestamp).toUTCString()}
      </span>
    </li>
  );
}

export default Chat;
