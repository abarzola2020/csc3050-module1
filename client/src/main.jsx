import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// finds the root element in the HTML and mounts the React app to it
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);