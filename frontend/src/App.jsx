import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Footer from "./components/footer/Footer";
import Shop from "./pages/shop/Shop";
import User_Login from "./pages/login/User_Login";
import Driver_Login from "./pages/login/Driver_Login";
import TestimonialSlider from "./pages/testimonials/Component_Testimonials";
import Location from "./pages/location/Location";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="foods" element={<Shop />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="contact" element={<Contact />} />
        <Route path="Userlogin" element={<User_Login />} />
        <Route path="Driverlogin" element={<Driver_Login />} />
        <Route path="testimonials" element={<TestimonialSlider />} />
        <Route path="locations" element={<Location />} />
      </Routes>
      <Footer />
    </Router>
  );
}
