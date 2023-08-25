// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUixxGKQa0Nw5dXuf9Aa3xXkhW6L6zW_Y",
  authDomain: "fashionfusion-18715.firebaseapp.com",
  projectId: "fashionfusion-18715",
  storageBucket: "fashionfusion-18715.appspot.com",
  messagingSenderId: "82810288536",
  appId: "1:82810288536:web:eddac0b3c226ffbd8913ed",
  measurementId: "G-R4K4JEQX27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);