import { CREATE_BOOK, GET_BOOKS } from "./types";


const initialState = {
    books:[]
};

export function rootReducer (state= initialState, {type, payload}) {

    switch (type) {
        case GET_BOOKS:
            return {
                ...state,
                books: payload
            }

        case CREATE_BOOK:
            return {
                ...state,
                books: [...state.books, payload]
            }    

        default:
            return state;
    }
}