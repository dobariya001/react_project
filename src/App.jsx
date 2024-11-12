import { Route, Routes } from "react-router-dom";
import Home from "./components/Firstwebsite/Home";
import About from "./components/Firstwebsite/About";
import Service from "./components/Firstwebsite/Service";
import Contact from "./components/Firstwebsite/Contact";
import Navbar from "./components/Firstwebsite/Navbar";
import Footer from "./components/Firstwebsite/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
      <Footer />

      {/*  */}
    </>
  );
};

export default App;