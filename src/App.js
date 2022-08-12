import Navbar from "./components/Navbar";
import { publicRoute } from "./routes/publicRoute";
import { Routes, Route } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


function App() {
  useEffect(() => {
    AOS.init();
  },[]);
  
  return (
    <div>
      <Navbar>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} /> */}

          {
            publicRoute.map(({path, Component}, index) => <Route key={index} path={path} element={<Component/>}></Route>)
          }
          
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
