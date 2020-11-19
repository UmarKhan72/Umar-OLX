import firebase from 'firebase';
import "firebase/firestore";
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBcXNmN60AioWCE-NWQSpwaRS8xLcaIq0c",
  authDomain: "saylani-olxclone.firebaseapp.com",
  databaseURL: "https://saylani-olxclone.firebaseio.com",
  projectId: "saylani-olxclone",
  storageBucket: "saylani-olxclone.appspot.com",
  messagingSenderId: "851635953518",
  appId: "1:851635953518:web:e38d422cbc27af9ccd2b7f",
  measurementId: "G-1252JRXKKD"
};


firebase.initializeApp(config);
export default firebase;