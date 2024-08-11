import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartProvider } from "./contexts/CartContext";
import NavBar from "./components/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        < NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greetings={"Lista de productos"} />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
        </Routes>
        < Footer />
      </CartProvider>
    </BrowserRouter>
  )
}


