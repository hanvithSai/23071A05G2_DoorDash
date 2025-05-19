import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Catalogue from "./pages/Catalogue";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Payment from "./pages/Payment";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main className="pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/catalogue" element={<Catalogue />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/payment" element={<Payment />} />
            </Routes>
          </main>
          <Toaster position="top-center" />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
