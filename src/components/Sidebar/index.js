import React from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import ChatIcon from '@material-ui/icons/Chat'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchIcon from '@material-ui/icons/Search'

import './styles.scss'

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://anhdo95.github.io//images/my-avatar-200wb73daaeac6b4a993eab313c49ff392fb.jpg" />
        <div className="sidebar__header-right">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__search-box">
          <SearchIcon className="sidebar__search-icon" />
          <input className="sidebar__search-input" type="text" placeholder="Search or start new chat" />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
