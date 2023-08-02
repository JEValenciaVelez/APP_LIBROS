import { GET_BOOKS } from "./types";


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

        default:
            return {
                ...state
            }
    }
}