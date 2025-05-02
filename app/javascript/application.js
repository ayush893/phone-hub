import React from "react";
import ReactDOM from "react-dom/client";  // Using the React 18/19 import method
import Header from "./common_resources/Header"; // Import your Header component
import Footer from "./common_resources/Footer"; // Import your Footer component
import MainContent from "./components/MainContent"; // Import your Footer component


// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("react-root");

  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement); // Create root using React 18/19 method
    root.render(
      <div className="app-container">
        <Header /> {/* Render Header */}
        <main className="main-content">
          <MainContent /> {}
        </main>
        <Footer /> {/* Render Footer */}
      </div>
    );
  }
});
