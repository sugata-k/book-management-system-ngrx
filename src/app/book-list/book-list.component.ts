import { Component } from '@angular/core';
import { Book } from '../models/book';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addBook, removeBook } from '../books/book.actions';
import { AppState } from '../app.state';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  books$: Observable<Book[]>;

  constructor(private store: Store<AppState>) {
    this.books$ = this.store.pipe(select('book'));
  }

  addBook(id: string, title: string, author: string) {
    const book: Book = { id, title, author };
    this.store.dispatch(addBook({ book }));
  }

  removeBook(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }
}
