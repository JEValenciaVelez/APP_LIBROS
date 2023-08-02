import "./NavBar.css";
import {Link} from "react-router-dom"

const NavBar = () => {

    return(
        <nav className="nav-bar">

            <Link to={`/`}>
            <button>Inicio</button>
            </Link>
           
            <select name="" id="">
                <option value="">Acciones para tus libros</option>
                <option value="post">Crear</option>
                <option value="put">Actualizar</option>
                <option value="delete">Borrar</option>
            </select>
            <input name="searchBar" type="text" placeholder="Titulo del libro" />
        </nav>
    )
};

export default NavBar;