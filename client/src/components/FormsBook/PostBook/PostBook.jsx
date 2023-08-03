import { useState } from "react";
import "./PostBook.css";
import { useDispatch } from "react-redux";
import { postBooks } from "../../../redux/actions";


const PostBook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [genres, setGenres] = useState("");
  const [date, setDate] = useState("");
  const [author, setAuthor] = useState("");

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
    dispatch(postBooks(form));
  };

  return (
    <form className="full" onSubmit={handleSubmit}>
      <h1>Nuevo Libro</h1>
      <div className="main">
        <span>*Este campo es obligatorio</span>
        <input
          type="text"
          name="title"
          placeholder="titulo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <span>*Este campo es obligatorio</span>
        <input
          type="text"
          name="image"
          placeholder="url de imagen"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
         <span>*Este campo es obligatorio</span>
        <input
          type="text"
          name="author"
          placeholder="Autor"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <span>*Este campo es obligatorio</span>
        <input
          type="text"
          name="genres"
          placeholder="generos"
          value={genres}
          onChange={(e) => setGenres(e.target.value)}
        />
        <span>*Este campo es obligatorio</span>
        <input
          type="text"
          name="date"
          placeholder="año"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default PostBook;
