import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDd9Vlrj5hEW15A9xCcb6-7NW6DlKoCURM",
  authDomain: "thankful-journal-43cb3.firebaseapp.com",
  projectId: "thankful-journal-43cb3",
  storageBucket: "thankful-journal-43cb3.appspot.com",
  messagingSenderId: "684699368465",
  appId: "1:684699368465:web:5680cb8e3f2f49ac05c5b0",
  measurementId: "G-TBSNMW1WDP",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
