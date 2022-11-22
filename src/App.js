import "./index.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import UnderConstruction from "./components/UnderConstruction";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="" element={<Home />} />
        <Route path="*" element={<UnderConstruction />} />
      </Routes>
    </BrowserRouter>
  );
}
