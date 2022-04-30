
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA92X72Zai1nEKlf5aIJwgFmMvCUeHpS_c",
  authDomain: "fruits-buddy.firebaseapp.com",
  projectId: "fruits-buddy",
  storageBucket: "fruits-buddy.appspot.com",
  messagingSenderId: "441943191268",
  appId: "1:441943191268:web:110e07aa6c00c72c5246f1"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;