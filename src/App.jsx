import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Homecopy from "./Homecopy";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homecopy />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
