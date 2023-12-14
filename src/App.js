import About from "./components/About";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";
import Marquee2 from "./components/Marquee2";
import Navbar from "./components/Navbar";
import ImageBrightness from "./components/ImageBrightness.jsx";
import LoginForm from "./components/loginform.jsx";
import ShapeToggle from "./components/ShapeToggle.jsx";

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home.jsx"
import Gallary from "./pages/Gallary.jsx";
import Commission from "./pages/Commission.jsx";




function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element ={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/gallary" element={<Gallary/>}/>
          <Route path="/commission" element={<Commission/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
