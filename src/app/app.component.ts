import { Component } from '@angular/core';

// define a book class
export class Book {
  id: number;
  title: string;
  author: string
}

// set up an array of books
const BOOKS: Book[] = [
  {id: 100, title: 'Bit Rot A', author: 'Douglas Coupland A'},
  {id: 101, title: 'Bit Rot B', author: 'Douglas Coupland B'},
  {id: 102, title: 'Bit Rot C', author: 'Douglas Coupland C'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  message = 'Our first Angular Page';
  books = BOOKS;
  
  /*book: Book = {
    id: 100,
    title: 'Bit Rot',
    author: 'Douglas Coupland'
  }*/
}
