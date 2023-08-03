import "./CardContainer.css";

import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import { getBooks } from "../../redux/actions";
import Pagination from "../Pagination/Pagination";




const CardContainer = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

     const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
      };

      const handleChange = (e)=>{
        if (e.target.name === 'itemsPerPage') {
            setItemsPerPage(parseInt(e.target.value));
            setCurrentPage(1); 
        }
        if(e.target.name === 'search'){
          setName(e.target.value);
          console.log(name)
        }
    };

    const dispatch = useDispatch();
    const books = useSelector(state => state.books);

    useEffect(()=>{
        dispatch(getBooks());
    },[dispatch]);


    return(
        <div className="Card-container">
          <div className="items-per-page">
             <label htmlFor="itemsPerPage">Cantidad de ítems por página:</label>
             <select onChange={handleChange} name="itemsPerPage">
             <option value="6">6</option>
             <option value="12">12</option>
             <option value="24">24</option>
            </select>
          </div>
            <Card books = {books.length > 0 ? books.slice(indexOfFirstItem, indexOfLastItem): []} />
            <div>
                <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={books.length > 0 ? books.length : null}
            paginate={paginate}
            currentPage={currentPage}
            />
            </div>
        </div>
    )
};

export default CardContainer;