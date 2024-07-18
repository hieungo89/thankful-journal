import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDd9Vlrj5hEW15A9xCcb6-7NW6DlKoCURM",
  authDomain: "thankful-journal-43cb3.firebaseapp.com",
  projectId: "thankful-journal-43cb3",
  storageBucket: "thankful-journal-43cb3.appspot.com",
  messagingSenderId: "684699368465",
  appId: "1:684699368465:web:5680cb8e3f2f49ac05c5b0",
  measurementId: "G-TBSNMW1WDP",
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
