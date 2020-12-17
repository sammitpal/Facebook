import { Avatar } from '@material-ui/core'
import React from 'react'
import { auth } from './firebase';
import './SidebarRow.css'
function SidebarRow({src, Icon, title}) {
    const handleSignOut = () =>{
        auth.signOut();
    }
    return (
        <div className="sidebar_row">
            {src && <Avatar src={src} onClick={handleSignOut}/>}
            {Icon && <Icon/>}
            <h3>{title}</h3>
        </div>
    )
}

export default SidebarRow
