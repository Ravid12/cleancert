// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMXarKDLrUdcsfbEZJLGR2KGumTwiQM6U",
  authDomain: "cleancert-23cdb.firebaseapp.com",
  projectId: "cleancert-23cdb",
  storageBucket: "cleancert-23cdb.appspot.com",
  messagingSenderId: "7308478946",
  appId: "1:7308478946:web:afac7c417d5fdafa0651bb",
  measurementId: "G-RQRL69W5JR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);