import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import ItemDetail from "./pages/ItemDetail";
import "./styles.css";

export default function App() {
    const [theme, setTheme] = React.useState("light");

  return (
    <div className={`app-shell ${theme}`}>
      <Header theme={theme} setTheme={setTheme}/>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:type/:id" element={<ItemDetail />} />
          <Route path="*" element={<div style={{padding:16}}>Not Found</div>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
