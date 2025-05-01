// Entry point for the build script in your package.json
// app/javascript/application.js

import React from "react";
import ReactDOM from "react-dom/client";  // Use the new import
import HelloReact from "./components/HelloReact"; // Import your component

// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("react-root");

  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement); // Create root using React 18/19 method
    root.render(<HelloReact />);  // Render your component
  }
});

