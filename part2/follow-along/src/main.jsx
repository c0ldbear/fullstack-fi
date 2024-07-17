import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import App from "./App.jsx";
import "./index.css";

//    This approach has many issues, as we are rendering the entire App component
//  only when we successfully retrieve a response.
axios.get("http://localhost:3001/notes").then((res) => {
  console.log(">> response:", res);
  const notes = res.data;
  console.log(">>> data (notes):", notes);

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App notes={notes} />
    </React.StrictMode>
  );
});
