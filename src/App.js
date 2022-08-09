import { Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cartpage/Cart";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart/:id" element={<Cart />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
