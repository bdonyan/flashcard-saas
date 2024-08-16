// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlo1yznxw6GdKbsg94P47vneWjzb3x_Dg",
  authDomain: "flashcard-57057.firebaseapp.com",
  projectId: "flashcard-57057",
  storageBucket: "flashcard-57057.appspot.com",
  messagingSenderId: "240848314264",
  appId: "1:240848314264:web:de1c914a8fca01e32f55ed",
  measurementId: "G-CV4ZNJPPVM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export {db}