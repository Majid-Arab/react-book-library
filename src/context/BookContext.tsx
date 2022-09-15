import { createContext, ReactNode, useState } from "react";

import { Book } from "../Interfaces";

export interface BookContextInterface {
  books: Book[];
  addBook: (book: Book) => void;
  updateBook: (book: Book) => void;
  removeBook: (id: number) => void;
}

// const books: Book[] = [{ id: 1, bookName: 'Harry Potter', authorName: ' JK rowling', bookPrice: 500 }]

const defaultValues: BookContextInterface = {
  books: [],
  addBook: () => {},
  updateBook: () => {},
  removeBook: () => {},
};

export const BookCtx = createContext<BookContextInterface>(defaultValues);

interface Props {
  children: ReactNode;
}

export function BookContextProvider({ children }: Props) {
  const [books, setBooks] = useState<Book[]>(defaultValues.books);

  const addBook = ({ bookName, authorName, bookPrice }: Book) => {
    const newBook: Book = {
      id: Math.ceil(Math.random()),
      bookName,
      authorName,
      bookPrice,
    };
    console.log(newBook);
    setBooks([...books, newBook]);
  };

  const updateBook = (book: Book) => {
    setBooks(
      books.map((stateBook) => {
        if (stateBook.id === book.id) {
          return {
            ...stateBook,
            bookName: book.bookName,
            authorName: book.authorName,
            bookPrice: book.bookPrice,
          };
        }
        return stateBook;
      })
    );
  };

  const removeBook = (id: number): void => {
    setBooks(
      books.filter((book) => {
        return book.id != id;
      })
    );
  };

  return (
    <BookCtx.Provider value={{ books, addBook, updateBook, removeBook }}>
      {children}
    </BookCtx.Provider>
  );
}
