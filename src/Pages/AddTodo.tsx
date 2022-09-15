import {
  Button,
  TextInput,
  NumberInput,
} from "@mantine/core";
import { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { BookCtx } from "../context/BookContext";


export function AddTodo() {
  const { addBook } = useContext(BookCtx)
  const [book, setBook] = useState("");
  const [author, setAuthor] = useState("");

  const [price, setPrice] = useState(0);
  const navigate = useNavigate();
  function add() {
    addBook({ id: 0, bookName: book, authorName: author, bookPrice: price });
    navigate('/')
  }

  return (
    <form>
      <div style={{ display: "flex" }}>

        <h1>Add form</h1>
        <TextInput
          placeholder="Book name"
          id="book_name"
          label="Book name"
          name="book_name"
          value={book}
          onChange={(event) => setBook(event.currentTarget.value)}
        />

        <TextInput
          placeholder="Author name"
          label="Author name"
          name="author_name"
          value={author}
          onChange={(event) => setAuthor(event.currentTarget.value)}
        />

        <NumberInput
          placeholder="Book Price"
          label="Price"
          name="book_price"
          value={price}
          onChange={(val: number) => setPrice(val)}
        />
      </div>
      <Button onClick={add}>Add Book</Button>
    </form>

  )
}

