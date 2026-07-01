import { Link } from 'react-router-dom';
import CartWidget from "./CartWidget";
import logo from "../assets/LOGO.png";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      { }
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>

      <ul>
        {/* rutas dinámicas */}
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/indumentaria">Indumentaria</Link></li>
        <li><Link to="/category/accesorios">Accesorios</Link></li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;