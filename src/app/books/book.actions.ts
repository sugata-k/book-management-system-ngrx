import { createAction, props } from "@ngrx/store";
import { Book } from "../models/book";

export const addBook = createAction('[Book] Add Book',props<{ book: Book }>());
export const addBookSuccess = createAction('[Book] Added Book Successfully',props<{ book: Book }>());
export const addBookFailure = createAction('[Book] Failed to Add Book',props<{ error: any }>());


export const removeBook = createAction('[Book] Remove Book',props<{ bookId: string }>());
