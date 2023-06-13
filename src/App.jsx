// import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <h1>Hi</h1>
      <Routes></Routes>
      <Footer />
    </div>
  );
}

export default App;
