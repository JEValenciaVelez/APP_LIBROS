import "./CardContainer.css";

import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { useEffect } from "react";
import { getBooks } from "../../redux/actions";




const CardContainer = () => {

    const dispatch = useDispatch();
    const books = useSelector(state => state.books);

    useEffect(()=>{
        dispatch(getBooks());
    },[dispatch]);


    return(
        <div className="Card-container">
            <Card books = {books} />
        </div>
    )
};

export default CardContainer;