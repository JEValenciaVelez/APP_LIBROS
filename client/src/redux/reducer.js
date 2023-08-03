import { CREATE_BOOK, DELETE_BOOK, GET_BOOKS, GET_BOOK_BY_NAME, UPDATED_BOOK } from "./types";


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

      case DELETE_BOOK:
        return {
          ...state,
          books: state.books.filter(bo=> bo.title !== payload)
        }  

      case UPDATED_BOOK:
        return state;
  
      default:
        return state;
    }
  }
  