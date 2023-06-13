import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <div className="bg"></div>
      <Routes></Routes>
    </>
  );
}

export default App;
