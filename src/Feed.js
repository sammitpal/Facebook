import React,{useState, useEffect} from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'
import {db} from './firebase'
function Feed() {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snaphot=>{
            setPosts(snaphot.docs.map((doc)=>doc.data()))
        })
    },[])
    console.log(posts);
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
            {
                posts.map(post => (
                    <Post username={post.username} data={post.main} photo={post.photo} image={post.imageUrl}/>
                ))
            }
        </div>
    )
}

export default Feed
