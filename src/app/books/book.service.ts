import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  addBook(book: Book): Observable<Book> {
    // Simulate a successful API call
    //return of(book);
    
    // To simulate an error, uncomment the following line:
    return throwError(() => new Error('Failed to add book'));
  }
}
