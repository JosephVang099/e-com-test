import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";


function App() {
  return (
    <div className="App">
      <Router>
        < Navbar />
        <Routes>
          <Route path="/" />
          <Route path="/shop" />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Newsletter />
        <Footer />
      </Router>

    </div>
        
        
  );
}

export default App;
