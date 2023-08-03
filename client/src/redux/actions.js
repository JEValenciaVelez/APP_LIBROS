import axios from "axios";
import { CREATE_BOOK, DELETE_BOOK, GET_BOOKS, GET_BOOK_BY_NAME, UPDATED_BOOK } from "./types";


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


export function deleteBook(title){
    return async (dispatch) => {
        try{
            console.log('titulo en la action: ',title)
            const response = await axios.delete(`http://localhost:3001/books`, { data: { title } });
            const data = response.data;
            dispatch({type: DELETE_BOOK, payload:data});
            alert('libro Eliminado');
        }catch(error){
            console.log('error en la action', error);
            alert(error.message);
        }
    }
}



export function putBook (form)  {
    return async (dispatch) => {
        console.log("form en la action -> ",form)
        try{
            const response = await axios.put("http://localhost:3001/books", form);
            const data = response.data;
            dispatch({type:UPDATED_BOOK, payload: data});
            alert("Libro actualizado");
        }catch(error){
            console.log(error);
            alert(error.message);
        }
    }
}
