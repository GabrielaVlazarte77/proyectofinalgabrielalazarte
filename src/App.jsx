import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Productos from "./components/Productos"


export default function App() {

  return (
    <>
      < NavBar />
      < ItemListContainer greeting="Bienvenidos a nuestra tienda"/>
      < Productos />
      < Footer />

    </>
  )
}


