import {
  MantineProvider,
  Table,
  Group,
  Button,
  TextInput,
  Modal,
  NumberInput,
} from "@mantine/core"; import React, { useCallback, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Book } from "../Interfaces";
interface Props {
  add: (book: Book) => void
}

export function AddTodo({ add }: Props) {
  const [book, setBook] = useState("");
  const [author, setAuthor] = useState("");

  const [price, setPrice] = useState(0);
  const navigate = useNavigate();
  function addBook(){
    add({ id:0,bookName: book, authorName: author, bookPrice: price }); navigate('/')
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
      <Button onClick={addBook}>Add Book</Button>
    </form>

  )
}

