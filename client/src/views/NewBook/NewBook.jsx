import { Link } from "react-router-dom";
import PostBook from "../../components/FormsBook/PostBook/PostBook";


const NewBook = () => {

    return(
        <div className="create-book">
            <PostBook />
            <Link to={`/home`}>
            <h1>Volver</h1>
            </Link>
            
        </div>
    )
};

export default NewBook;