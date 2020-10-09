import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyA0b6UmiVGPb5dx25V_nP8ILvD2e9Xudz4",
    authDomain: "ultra-simple-blog-8eb6f.firebaseapp.com",
    databaseURL: "https://ultra-simple-blog-8eb6f.firebaseio.com",
    projectId: "ultra-simple-blog-8eb6f",
    storageBucket: "ultra-simple-blog-8eb6f.appspot.com",
    messagingSenderId: "56988809794",
    appId: "1:56988809794:web:b975f82e1f14a16c668bdb",
    measurementId: "G-FZBQD080KH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;