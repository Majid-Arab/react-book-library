import { createContext, ReactNode, useState } from "react";
import { Book } from "../Interfaces";

export interface BookContextInterface {
  books: Book[]
  updateBook: (id: number) => void;
}

interface Props {
  children: ReactNode
}

export const BookCtx = createContext<BookContextInterface>;

export function BookContextProvider({ children }: Props) {

  const [books, setBooks] = useState<Book[]>();

  const updateData = (book: Book) => {
    console.log(book)
    setBooks(books.map((stateBook) => {
      if (stateBook.id === book.id) {
        return {
          ...stateBook,
          bookName: book.bookName,
          authorName: book.authorName,
          bookPrice: book.bookPrice,
        };
      }
      return stateBook;
    }))
  }

  return (
    <BookCtx.Provider value={{ books, updateData }}>{children}</BookCtx.Provider>
  )
}