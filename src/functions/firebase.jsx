import firebase from 'firebase/app'
import 'firebase/auth'

  var firebaseConfig = {
    apiKey: "AIzaSyCGL14lhlxt-U0mffZU6UJo3_GcJW5sV2w",
    authDomain: "react-auth-804a3.firebaseapp.com",
    databaseURL: "https://react-auth-804a3.firebaseio.com",
    projectId: "react-auth-804a3",
    storageBucket: "",
    messagingSenderId: "869053211428",
    appId: "1:869053211428:web:f67de7a8fb330430"
  };
export default  firebase.initializeApp(firebaseConfig);