import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCr6IAKM6A3ib25mKEDP-JUW6tMVzKY3ik",
  authDomain: "hmproject-4a240.firebaseapp.com",
  projectId: "hmproject-4a240",
  storageBucket: "hmproject-4a240.appspot.com",
  messagingSenderId: "874293283765",
  appId: "1:874293283765:web:f24c6d0d5ea732c377e7fc",
  measurementId: "G-0RD7JPDQ6S"
};

// Check if Firebse app is already initialized
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };


