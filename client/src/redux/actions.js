import axios from "axios";
import { GET_BOOKS } from "./types";


export function getBooks () {
    return async (dispatch) => {
        try{
            const response = await axios.get("http://localhost:3001/books");
            const data = response.data;
            dispatch({type:GET_BOOKS, payload: data});
        }catch(error){
            console.error(error.message);
        }
    }
}