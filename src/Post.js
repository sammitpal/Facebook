import { Avatar } from '@material-ui/core'
import { Message, MessageOutlined, ShareOutlined, ThumbUp, ThumbUpOutlined } from '@material-ui/icons'
import React from 'react'
import './Post.css'
function Post({data, username, photo, image}) {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);

    return (
        <div className="post">
            <div class="post_header">
                <Avatar src={photo}/>
                <h3>{username}</h3>
            </div>
            <div class="post_body" style=  {image? {background: '#ffffff'}:{background: '#'+randomColor}}>
                <h2 className={image && 'title'}>{data}</h2>
                {image &&  <img src={image} alt=""/>}
            </div>
            <div class="post_bottom">
                <div class="post_bottom_options">
                    <ThumbUpOutlined/>
                    <h4>Like</h4>
                </div>
                <div class="post_bottom_options">
                    <MessageOutlined/>
                    <h4>Comment</h4>
                </div>
                <div class="post_bottom_options">
                    <ShareOutlined/>
                    <h4>Share</h4>
                </div>
            </div>
        </div>
    )
}

export default Post
