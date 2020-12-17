import { EmojiEvents, GamesRounded, PeopleAltRounded, PollRounded, SupervisedUserCircle } from '@material-ui/icons'
import React from 'react'
import SidebarRow from './SidebarRow'
import './Sidebar.css'
import { useStateValue } from './StateProvider'
function Sidebar() {
    const [{user}] = useStateValue();
    return (
        <div className="sidebar">
            <SidebarRow title={user.displayName} src={user.photoURL}/>
            <SidebarRow title="Friends" Icon={PeopleAltRounded}/>
            <SidebarRow title="Groups" Icon={SupervisedUserCircle}/>
            <SidebarRow title="Games" Icon={GamesRounded}/>
            <SidebarRow title="Events" Icon={EmojiEvents}/>
            <SidebarRow title="Ads" Icon={PollRounded}/>
        </div>
    )
}

export default Sidebar
