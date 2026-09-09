import { Book } from '../book.schema';

export interface CreateBookResponse {
  message: string;
  book: Book;
}
