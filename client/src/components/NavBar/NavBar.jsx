
import "./NavBar.css";
import {Link, useNavigate} from "react-router-dom"

const NavBar = () => {

    const navigate = useNavigate();

    const handleSelectChange = (e) => {
        if (e.target.value === "post") {
          navigate("/postBook");
        }else if(e.target.value === "put"){
            navigate("/");
        }else if(e.target.value === "delete"){
            navigate("/");
        }
      };

    return(
        <nav className="nav-bar">

            <Link to={`/`}>
            <button>Inicio</button>
            </Link>
           
            <select name="options" id="" onChange={handleSelectChange}>
                <option value="">Acciones para tus libros</option>
                <option value="post" >Crear</option>
                <option value="put">Actualizar</option>
                <option value="delete">Borrar</option>
            </select>
            <input name="searchBar" type="text" placeholder="Titulo del libro" />
        </nav>
    )
};

export default NavBar;