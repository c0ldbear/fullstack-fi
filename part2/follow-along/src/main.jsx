import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import axios from "axios";

axios.get("http://localhost:3001/notes").then((res) => {
  console.log(">> response:", res);
  const notes = res.data;
  console.log(">>> data (notes):", notes);
});

const promise2 = axios.get("http://localhost:3001/foobar");
console.log(">> promise2:", promise2);

const notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App notes={notes} />
  </React.StrictMode>
);
