import axios from "axios";
import { CREATE_BOOK, GET_BOOKS, GET_BOOK_BY_NAME } from "./types";


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


export function getBook (title) {
    return async (dispatch) => {
        try{
            if(title){
                dispatch({type:GET_BOOK_BY_NAME, payload: title});
            }else{
                const response = await axios.get("http://localhost:3001/books");
            const data = response.data;
            dispatch({type:GET_BOOKS, payload: data});
            }
            
        }catch(error){
            console.error(error.message);
        }
    }
}


export function postBooks (form) {
    return async (dispatch) => {
        console.log("form en la action->",form)
        try{
            const response = await axios.post("http://localhost:3001/books", form);
            const data = response.data;
            console.log("data ne la action->",data)
            dispatch({type:CREATE_BOOK, payload: data});
            alert("Libro creado !");
        }catch(error){
            console.error(error.message);
            alert(error.message);
        }
    }
}
