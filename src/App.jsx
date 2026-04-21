
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


function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar cart={cart} />
      <Products cart={cart} setCart={setCart} />
      <Hero></Hero>
      <Stats></Stats>
      <Products></Products>
      <Steps></Steps>
      <Pricing></Pricing>
      <CTA></CTA>
      <Footer></Footer>
    </>
  );
}

export default App;
