// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJ0vFmvgaHvGkUXKJoBvOg_1ZHNMEdZPE",
  authDomain: "ccnetflix-29a02.firebaseapp.com",
  projectId: "ccnetflix-29a02",
  storageBucket: "ccnetflix-29a02.appspot.com",
  messagingSenderId: "309404844459",
  appId: "1:309404844459:web:dea048fc09a3ac1b81d2ee",
  measurementId: "G-522TE7RD8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();