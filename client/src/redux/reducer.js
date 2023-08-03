import { CREATE_BOOK, GET_BOOKS, GET_BOOK_BY_NAME } from "./types";


const initialState = {
    books:[]
};

export function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
      case GET_BOOKS:
        return {
          ...state,
          books: payload,
        };
  
      case GET_BOOK_BY_NAME:
        return {
          ...state,
          books: state.books.filter((book) =>
            book.title.toLowerCase().includes(payload.toLowerCase())
          ),
        };
  
      case CREATE_BOOK:
        return {
          ...state,
          books: [...state.books, payload],
        };
  
      default:
        return state;
    }
  }
  