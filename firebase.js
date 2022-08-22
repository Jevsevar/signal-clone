import * as firebase from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy3zeMXBl_Uw0GK62EC22x9Pf4o10e01w",
  authDomain: "signal-clone-28e22.firebaseapp.com",
  projectId: "signal-clone-28e22",
  storageBucket: "signal-clone-28e22.appspot.com",
  messagingSenderId: "952142348207",
  appId: "1:952142348207:web:78fcdc5353b317d6f2395a",
};

let app;

if (firebase.getApps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.db;
const auth = getAuth(app);

export { db, auth };
