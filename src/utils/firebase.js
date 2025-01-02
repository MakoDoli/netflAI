// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkFLWqT4BB5NwImenNA19uj4vGju5b7N4",
  authDomain: "netflix-gpt-e9165.firebaseapp.com",
  projectId: "netflix-gpt-e9165",
  storageBucket: "netflix-gpt-e9165.firebasestorage.app",
  messagingSenderId: "258480919960",
  appId: "1:258480919960:web:3b643277e17dffb10307ed",
  measurementId: "G-WDF32WFTTM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
