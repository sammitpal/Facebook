import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCso4NgAPDDj0KrmhQVHn4dnvl-hsFvzMI",
    authDomain: "facebook-55457.firebaseapp.com",
    projectId: "facebook-55457",
    storageBucket: "facebook-55457.appspot.com",
    messagingSenderId: "691098548085",
    appId: "1:691098548085:web:a5851005a0f17c0410c53c",
    measurementId: "G-K1B36P5WRM"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const db = firebase.firestore();
export {auth, db}