import { Avatar } from "@material-ui/core";
import { ExpandMore, Home, Message, OndemandVideo, Search, StoreMallDirectory, SupervisedUserCircle, Notifications } from "@material-ui/icons";
import React from "react";
import "./Header.css";
import {useStateValue} from './StateProvider';
function Header() {
  const [{user}] = useStateValue();
  return (
    <div className="header">
      <div class="header_left">
        <img
          className="header_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/150px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <div className="header_left_input">
          <input type="text" placeholder="Search Facebook"/>
          <Search />
        </div>
      </div>

      <div className="header_mid">
            <Home className="header_mid_option"/>
            <OndemandVideo className="header_mid_option"/>
            <StoreMallDirectory className="header_mid_option"/>
            <SupervisedUserCircle className="header_mid_option"/>
      </div>
      <div className="header_right">
            <Avatar src={user.photoURL}/>
            <p>{user.displayName}</p>
            <Message className="header_right_options"/>
            <Notifications className="header_right_options"/>
            <ExpandMore className="header_right_options"/>
      </div>
    </div>
  );
}

export default Header;
