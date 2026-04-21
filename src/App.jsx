import './App.css'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Products from './components/Products'
import Stats from './components/Stats'
import Steps from './components/Steps'
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar cart={cart} />

      <Hero />
      <Stats />

      <Products cart={cart} setCart={setCart} />

      <Steps />
      <Pricing />
      <CTA />
      <Footer />

      {/* Toast */}
      <ToastContainer position="top-center" autoClose={1000} />
    </>
  );
}

export default App;