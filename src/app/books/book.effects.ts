import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { BookService } from "./book.service";
import { addBook, addBookFailure, addBookSuccess } from "./book.actions";
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class BookEffects {
    constructor(
        private actions$: Actions,
        private bookService: BookService
    ) { }

    // This is an NgRx Effect that responds to 'AddBook' actions.
    addBook$ = createEffect(() => this.actions$.pipe(
        // Listen for actions of type 'AddBook'
        ofType(addBook),

        // For each 'AddBook' action, call 'addBook' on the book service.
        // 'mergeMap' allows multiple concurrent 'addBook' calls.
        mergeMap((action) => this.bookService.addBook(action.book)
            .pipe(
                // If the 'addBook' call is successful, dispatch 'AddBookSuccess' action with the book data.
                map(book => addBookSuccess({ book })),

                // If the 'addBook' call fails, dispatch 'AddBookFailure' action with the error.
                catchError((error) => of(addBookFailure({ error })))
            )
        )
    ));
}