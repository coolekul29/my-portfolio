// Import React so we can use JSX and components
import React from "react";

// Import tools for page navigation
import { Routes, Route } from "react-router-dom";

// Import own components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import the pages for the website
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import ItemDetail from "./pages/ItemDetail";

// Import the main CSS file for styling
import "./styles.css";

// This is the main App component
export default function App() {

  // Set up theme for light or dark mode
  const [theme, setTheme] = React.useState("light");

  return (
    // The main app container that changes style based on theme
    <div className={`app-shell ${theme}`}>
      
      {/* The header stays at the top and can switch themes */}
      <Header theme={theme} setTheme={setTheme} />

      {/* The main area where pages will load */}
      <main className="container">
        <Routes>
          {/* When the user goes to "/", show the Home page */}
          <Route path="/" element={<Home />} />

          {/* When the user goes to "/about", show the About page */}
          <Route path="/about" element={<About />} />

          {/* When the user goes to "/resume", show the Resume page */}
          <Route path="/resume" element={<Resume />} />

          {/* When the user goes to "/portfolio", show the Portfolio page */}
          <Route path="/portfolio" element={<Portfolio />} />

          {/* When the user clicks an item in the portfolio, show more details */}
          <Route path="/portfolio/:type/:id" element={<ItemDetail />} />

          {/* If the user goes to a page that doesn’t exist, show this message */}
          <Route
            path="*"
            element={<div style={{ padding: 16 }}>Not Found</div>}
          />
        </Routes>
      </main>

      {/* The footer stays at the bottom of every page */}
      <Footer />
    </div>
  );
}