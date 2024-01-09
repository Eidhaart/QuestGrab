// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS1XfM-hUJF3hhwIjCbadLdyyuJltV9Jk",
  authDomain: "questgrab.firebaseapp.com",
  projectId: "questgrab",
  storageBucket: "questgrab.appspot.com",
  messagingSenderId: "420518544266",
  appId: "1:420518544266:web:e136f53b483fd2a177fe73",
  measurementId: "G-STTJCH2P18",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
