import { useState } from "react";
import "./Delete.css";
import { useDispatch } from "react-redux";
import { deleteBook } from "../../../redux/actions";
import { Link } from "react-router-dom";


const DeleteBook = () => {

    const [title, setTitle] = useState("");

    const dispatch = useDispatch();

    const handleChange = (e)=> {
        setTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title);
        dispatch(deleteBook(title));
    }

    return (
        <div>
            <form className="delete-form">
                <h2>Elimina libros</h2>
                <div className="form">
                    <button onClick={handleSubmit}>Delete</button>
                    <input
                    onChange={handleChange}
                    type="text" 
                    placeholder="Titutlo del libro" 
                    name="delete"
                    />
                </div>
                <Link to={`/home`}>
                <h3>Volver</h3>
                </Link>
                
            </form>
        </div>
    )
};


export default DeleteBook;