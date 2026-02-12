import { createAction, props } from "@ngrx/store";
import { Book } from "../models/book";

export const addBook = createAction('[Book List] Add Book',props<{ book: Book }>());
export const removeBook = createAction('[Book List] Remove Book',props<{ bookId: string }>());
