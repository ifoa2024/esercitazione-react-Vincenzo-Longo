import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Corrected import path
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Contatcs from "./pages/Contacts";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar needs to be inside the Router context */}
      <Navbar />
      
      {/* Define the routes inside the Router */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/contacts" element={<Contatcs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
