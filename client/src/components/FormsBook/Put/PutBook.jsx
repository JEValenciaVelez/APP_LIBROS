import { Link } from "react-router-dom";
import "./putBook.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { putBook } from "../../../redux/actions";


const PutBook = () => {

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [genres, setGenres] = useState("");
  const [date, setDate] = useState("");
  const [author, setAuthor] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = {
      title,
      image,
      genres,
      date,
      author
    };
    console.log(form);
    dispatch(putBook(form));
  };



    return(
        <form className="putForm">
            <span>*este campo es obligatorio</span>
            <input 
            type="text" 
            placeholder="Titulo del libro"
            name="title"
            onChange={(e)=>setTitle(e.target.value)}
            value={title}
            />
            <div className="put-form">
            <span>Imagen</span>
        <input
          type="text"
          name="image"
          placeholder="url de imagen"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
         <span>Author</span>
        <input
          type="text"
          name="author"
          placeholder="Autor"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <span>Generos</span>
        <input
          type="text"
          name="genres"
          placeholder="generos"
          value={genres}
          onChange={(e) => setGenres(e.target.value)}
        />
        <span>Año de publicacion</span>
        <input
          type="text"
          name="date"
          placeholder="año"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button onClick={handleSubmit}>Actualizar</button>

        </div>

            <Link to={`/home`}>
            <h2>Volver</h2>
            </Link>
        </form>
    )
};

export default PutBook;