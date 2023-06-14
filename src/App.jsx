// import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

//Component's
import NavBar from "./components/shared/NavBar";
import Footer from "./components/shared/Footer";
import AboutUs from "./components/AboutUs";
import Landing from "./components/Landing";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const element = document.documentElement;

  useEffect(() => {
    if (darkMode === true) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [darkMode]);

  const darkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex min-h-screen flex-col font-Roboto">
      <NavBar darkModeToggle={darkModeToggle} darkMode={darkMode} />
      <Routes>
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/" element={<Landing />} />
      </Routes>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
