import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ButtonsHome2 from "./components/ButtonsHome2";
import Institucional from "./pages/Institucional";
import EspecialidadesMedicas from "./pages/EspecialidadesMedicas";
import Novedades from "./pages/Novedades";
import Representaciones from "./pages/Representaciones";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Institucional" element={<Institucional />} />
        <Route
          path="/especialidadesMedicas"
          element={<EspecialidadesMedicas />}
        />
        <Route path="/novedades" element={<Novedades />} />
        <Route path="/Representaciones" element={<Representaciones />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
