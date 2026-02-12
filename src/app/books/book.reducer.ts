import { createReducer, on } from "@ngrx/store";
import { addBook, removeBook, addBookSuccess, addBookFailure } from "./book.actions";
import { Book } from "../models/book";

export const initialState: Book[] = [];

export const bookReducer = createReducer(
    initialState,
    on(addBook, (state, { book }) => state),
    on(addBookSuccess, (state, { book }) => [...state, book]),
    on(addBookFailure, (state, { error }) => {
        console.error('Failed to add book:', error);
        return state;
    }),
    on(removeBook, (state, { bookId }) => state.filter(book => book.id !== bookId))
);