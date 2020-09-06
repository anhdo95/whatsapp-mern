import React from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert'

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
      </div>
    </div>
  )
}

export default Chat
