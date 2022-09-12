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

  const [books, setBooks] = useState<Book[]>([{ bookName: 'Harry Potter', authorName: ' JK rowling', bookPrice: 500 }]);


  // const navigate = useNavigate();

  // const navigate = useNavigate();
  // const handleOnClick = useCallback(() => navigate('/', { replace: true }), [navigate]);

  // const navigate = useNavigate();
  // const handleOnClick = useCallback(() => navigate('/addTodo', { replace: true }), [navigate]);

  // const updateData = (book: Book) => {
  //   setOpened(true)
  //   setBook(book.bookName)
  //   setAuthor(book.authorName)
  //   setPrice(book.bookPrice)
  // }

  const addData = ({ bookName, authorName, bookPrice }: Book) => {
    const newBook: Book = {
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

      {/* Add Modal  */}

      <Router>
        <Routes>
          <Route element={<Home remove={removeBook} books={books} />} path="/" />
          <Route element={<AddTodo add={addData} />} path="/addTodo" />
          <Route element={<UpdateTodo />} path="/updateTodo" />
        </Routes>
      </Router>

      {/* {/* <Group position="center">
        <Button onClick={handleOnClick}>Add Book Deatils</Button>
      </Group> */}

    </MantineProvider>
  );
}
