import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"

export default function App() {
  return (
    <BrowserRouter>
      < NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greetings={"Lista de productos"}/>} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/detail/:id" element={<ItemDetailContainer />} />
      </Routes>
      < Footer />
    </BrowserRouter>
  )
}


