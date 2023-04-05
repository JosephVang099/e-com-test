import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/ShopContext";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Announcement from "./components/Announcement";


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
        <Announcement />
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/shop" element={<Shop />} />
            <Route path="/home" element={<Home />}/>
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Newsletter />
          <Footer />
        </Router>
      </ShopContextProvider>

    </div>
        
        
  );
}

export default App;
