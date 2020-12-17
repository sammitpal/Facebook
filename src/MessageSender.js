import { Avatar } from "@material-ui/core";
import { InsertEmoticon, PhotoLibrary, Videocam } from "@material-ui/icons";
import React,{useState} from "react";
import  firebase from 'firebase';
import "./MessageSender.css";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";
function MessageSender() {
  const [input, setInput] = useState('');
  const [inputImage, setInputImage] = useState('');
  const [{user}] = useStateValue();
  const submit = (e) => {
    e.preventDefault();
    db.collection('posts').add({
      username: user.displayName,
      photo: user.photoURL,
      main: input,
      imageUrl: inputImage,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("");
    setInputImage("")
  }
  return (
    <div className="message_sender">
      <div className="message_sender_header_top">
        <Avatar src={user.photoURL}/>
        <form>
          <input
            type="text"
            placeholder={`What's on your mind ${user.displayName}`}
            className="message_sender_input"
            value = {input}
            onChange = {(e)=> setInput(e.target.value)}
          />
          <input type="text" placeholder="Image Url" value={inputImage} onChange={(e)=>setInputImage(e.target.value)}/>
          <button onClick={submit}>Submit</button>
        </form>
      </div>
      <div className="message_sender_header_bottom">
        <div className="messege_sender_header_bottom_options">
          <Videocam style={{color: 'red'}}/>
          <h3>Live</h3>
        </div>
        <div className="messege_sender_header_bottom_options">
          <PhotoLibrary style={{color: '#41B35D'}}/>
          <h3>Photo</h3>
        </div>
        <div className="messege_sender_header_bottom_options">
          <InsertEmoticon style={{color: '#eab028'}}/>
          <h3>Feeling and Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
