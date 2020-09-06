import React from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'
import SendIcon from '@material-ui/icons/Send'

import './styles.scss'

function Chat() {
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
        <ul className="chat__body-messages">
          <li className="chat__body-message">
            <strong className="chat__body-name">David</strong>
            <p className="chat__body-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span className="chat__body-timestamp">
              {new Date().toUTCString()}
            </span>
          </li>
          <li className="chat__body-message chat__body-message--text-right">
            <strong className="chat__body-name">Richard Do</strong>
            <p className="chat__body-text chat__body-text--highlight">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span className="chat__body-timestamp">
              {new Date().toUTCString()}
            </span>
          </li>
        </ul>
      </div>

      <footer className="chat__footer">
        <IconButton><InsertEmoticonIcon /></IconButton>
        <form className="chat__footer-comment-box">
          <input className="chat__footer-comment-input" type="text" placeholder="Type a message" />
          <button className="chat__footer-send-btn" type="submit">
            <SendIcon />
          </button>
        </form>
        <IconButton><MicIcon /></IconButton>
      </footer>
    </div>
  )
}

export default Chat
