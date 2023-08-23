// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDxL2GHPgha9FZRWakAinEA5_zUhwIp-E",
  authDomain: "twitter-clone-a37e3.firebaseapp.com",
  projectId: "twitter-clone-a37e3",
  storageBucket: "twitter-clone-a37e3.appspot.com",
  messagingSenderId: "267480975765",
  appId: "1:267480975765:web:711d0bcf8b7bd4599dce9c",
  measurementId: "G-7QDGFXZR08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;