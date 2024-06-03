import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCriehqTSZfp1DaFRHmyYhtJIAwa1WcHkE",
  authDomain: "cuisine-oasis.firebaseapp.com",
  projectId: "cuisine-oasis",
  storageBucket: "cuisine-oasis.appspot.com",
  messagingSenderId: "178345489076",
  appId: "1:178345489076:web:31f9ccd55c56e12e541de1",
};

export const app = initializeApp(firebaseConfig);
