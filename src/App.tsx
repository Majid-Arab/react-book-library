import {
  MantineProvider,
  Table,
  Group,
  Button,
  TextInput,
  Modal,
  NumberInput,
} from "@mantine/core";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { ChangeEvent, useCallback, useRef, useState } from "react";
import { Book } from "./Interfaces";
import { theme } from "./theme";
import { AddTodo } from "./Pages/AddTodo";
import { UpdateTodo } from "./Pages/UpdateTodo";
import { Home } from "./Pages/Home";

export default function App() {

  const [books, setBooks] = useState<Book[]>([{id:1, bookName: 'Harry Potter', authorName: ' JK rowling', bookPrice: 500 }]);
  // const navigate = useNavigate();

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

  const addData = ({ bookName, authorName, bookPrice }: Book) => {
    const newBook: Book = {
      id:Math.ceil(Math.random()),
      bookName,
      authorName,
      bookPrice,
    };
    console.log(newBook)
    setBooks([...books, newBook]);
  };

  const removeBook = (bookNameToDelete: string): void => {
    setBooks(
      books.filter((del) => {
        return del.bookName != bookNameToDelete;
      })
    );
  };

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>

      <Router>
        <Routes>
          <Route element={<Home remove={removeBook} books={books} />} path="/" />
          <Route element={<AddTodo add={addData} />} path="/addTodo" />
          <Route element={<UpdateTodo update={updateData} />} path="/updateTodo" />
        </Routes>
      </Router>

    </MantineProvider>
  );
}
