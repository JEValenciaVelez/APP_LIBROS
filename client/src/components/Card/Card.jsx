import "./Card.css";

const Card = ({books}) => {

    const allBooks = books.length > 0 ? books : [];

    return(
        <div className="Cards">
            {
                allBooks.map(book => (
                    <div className="card" key={book._id}>
                         <h1>{book.title}</h1>
                         <img src={book.image} alt="imagen" />
                         <h2>{book.genres.join(", ")}</h2>
                         <h2>{book.date}</h2>
                    </div>
                ))
            }
        </div>
    )
};

export default Card;