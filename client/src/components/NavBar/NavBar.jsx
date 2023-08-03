
import { useState } from "react";
import "./NavBar.css";
import {Link, useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux";
import { getBook, getBooks } from "../../redux/actions";

const NavBar = () => {

    const [title, setTitle] = useState("");

    const dispatch = useDispatch();

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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title)
        dispatch(getBook(title));
    }

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
            <button type="submit" onClick={handleSubmit}>Buscar</button>
            <input 
            onChange={(e)=>setTitle(e.target.value)}
            name="searchBar" 
            type="text" 
            placeholder=" Buscar por titulo de libro" 
            />
        </nav>
    )
};

export default NavBar;