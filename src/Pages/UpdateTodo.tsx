import { Button, NumberInput, TextInput } from '@mantine/core';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { BookCtx } from '../context/BookContext';
import { ProviderProp } from '../context/NoteContext';
import { Book } from '../Interfaces'


export function UpdateTodo() {
  const {updateBook} = useContext(BookCtx)
  const [book, setBook] = useState("");
  const [author, setAuthor] = useState("");

  const [price, setPrice] = useState(0);
  const navigate = useNavigate();
  const { state } = useLocation();
  const bookToUpdate = state as Book
  useEffect(() => {
    setBook(bookToUpdate.bookName)
    setAuthor(bookToUpdate.authorName)
    setPrice(bookToUpdate.bookPrice)
  }, [location])

  function update() {

    updateBook(
      { id: bookToUpdate.id, bookName: book, authorName: author, bookPrice: price },
    );
    navigate('/')
  }

  return (
    <form>
      <div style={{ display: "flex" }}>

        <h1>Update form</h1>
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
      <Button onClick={update}>Update Book</Button>
    </form>
  )
}
