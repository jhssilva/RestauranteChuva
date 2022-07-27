import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVbuAkuLEfQkARKaNWxxNmA3p74r1OxU0",
  authDomain: "restaurantechuvaa.firebaseapp.com",
  projectId: "restaurantechuvaa",
  storageBucket: "restaurantechuvaa.appspot.com",
  messagingSenderId: "26329618177",
  appId: "1:26329618177:web:e36bf945ef07b1e3ed6d00",
  measurementId: "G-LKHFYQZHXE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const container = document.getElementById("root");

// Create a root.
const root = createRoot(container);

// Initial render: Render an element to the root.
root.render(<App tab="home" />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
