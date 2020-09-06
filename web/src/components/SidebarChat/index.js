import React from 'react'
import { Avatar } from '@material-ui/core'

import './styles.scss'

function SidebarChat() {
  return (
    <div className="sidebar-chat">
      <Avatar src="https://anhdo95.github.io//images/my-avatar-200wb73daaeac6b4a993eab313c49ff392fb.jpg" />
      <article className="sidebar-chat__info">
        <h3 className="sidebar-chat__room-name">Room name</h3>
        <p className="sidebar-chat__message">This is the last message</p>
      </article>
    </div>
  )
}

export default SidebarChat
