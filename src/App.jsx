import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ButtonsHome2 from "./components/ButtonsHome2";
import Institucional from "./pages/Institucional";


function App() {
  return (
    <Router>
<Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Institucional" element={<Institucional/>} />
        <Route path="/buttonHome2" element={<ButtonsHome2/>} />
      </Routes>
 <Footer /> 
    </Router>
  );
}

export default App;
