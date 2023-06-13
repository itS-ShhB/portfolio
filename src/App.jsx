// import "./App.css";
import NavBar from "./components/shared/NavBar";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/shared/Footer";
import AboutUs from "./components/AboutUs";
import Landing from "./components/Landing";

function App() {
  return (
    <div className="flex min-h-screen flex-col font-Roboto">
      <NavBar />
      <Routes>
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/" element={<Landing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
