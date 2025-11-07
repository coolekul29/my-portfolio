// Import React so we can use JSX and components
import React from "react";

// Import the createRoot function to show our app inside the browser
import { createRoot } from "react-dom/client";

// Import BrowserRouter so we can move between pages
import { BrowserRouter } from "react-router-dom";

// Import the main App component (this is where all pages connect)
import App from "./App.jsx";

// Import the main CSS file for the whole app
import "./styles.css";

// Find the <div> with id="root" in index.html where the app will show up
const root = createRoot(document.getElementById("root"));

// Render the app inside the root element
root.render(
  // StrictMode helps find possible issues while we’re building the app
  <React.StrictMode>
    {/* BrowserRouter lets us switch pages without reloading */}
    <BrowserRouter>
      {/* The App component holds everything in our project */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
