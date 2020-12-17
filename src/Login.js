import React from 'react'
import './Login.css'
import firebase from 'firebase';
import {auth} from './firebase';
function Login() {
        var provider = new firebase.auth.GoogleAuthProvider();    const signIn = () =>{
            auth.signInWithPopup(provider).then(function(result) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // ...
              }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
              });
    }
    return (
        <div className="login">
            <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/150px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <button onClick={signIn}>Sign in with google</button>
        </div>
    )
}

export default Login
