// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNjGzV_GN0QgHMgPI2d2vhSpkLfEWQhTM",
  authDomain: "netflixgpt-tailwind.firebaseapp.com",
  projectId: "netflixgpt-tailwind",
  storageBucket: "netflixgpt-tailwind.firebasestorage.app",
  messagingSenderId: "1034298688166",
  appId: "1:1034298688166:web:9921ac40b7c65eeaae6a67",
  measurementId: "G-RYY8TBZG58",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
