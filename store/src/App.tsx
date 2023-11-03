import "./App.css";
import CartProvider from "./CartContext";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CategoryProducts from "./components/CategoryProducts";
import About from "./components/About";
import ProductDetails from "./components/ProductDetails";
import Cancel from "./components/pages/Cancel";
import Success from "./components/pages/Success";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<CategoryProducts />} />
        <Route path="/about" element={<About />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/success" element={<Success />} />
        <Route
          path="/product-details/:productId"
          element={<ProductDetails />}
        />
      </Routes>
      <ToastContainer autoClose={900} />
    </CartProvider>
  );
}

export default App;
