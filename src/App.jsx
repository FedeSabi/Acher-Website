import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Footer from "./components/Footer";
//import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CarouselHome from "./components/CarouselHome";

function App() {
  return (
    <Router>
     {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="Carouselhome" element={<CarouselHome/>} />
      </Routes>
    {/*  <Footer /> */}
    </Router>
  );
}

export default App;
