import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YAIzaSyDuEI_nN-e5DOhbOxZ1NzwTm2rM6S1gwQU",
  authDomain: "voting-system-6e8e4.firebaseapp.com",
  projectId: "voting-system-6e8e4",
  storageBucket: "voting-system-6e8e4.appspot.com",
  messagingSenderId: "349446937652",
  appId: "1:349446937652:web:1ae319f6fb3a632e0f3e61"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };