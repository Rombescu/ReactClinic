import "./index.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import UnderConstruction from "./components/UnderConstruction";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />
        <Route path="" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="*" element={<UnderConstruction />} />
      </Routes>
    </BrowserRouter>
  );
}
