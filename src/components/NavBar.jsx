import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
      <nav>
        <div className="logo">Mi Tienda</div>
        <ul className="nav-links">
          <li><Link to="/">Productos</Link></li>
          <li><Link to="/category/tablet">Tablets</Link></li>
          <li><Link to="/category/celular">Celulares</Link></li>
          <li><Link to="/category/computer">Computadoras</Link></li>
        </ul>

        < CartWidget/>
      </nav>
    )
  }





