
import React, { useCallback, useContext, useState } from 'react'
import {
  MantineProvider,
  Table,
  Group,
  Button,
  TextInput,
  Modal,
  NumberInput,
} from "@mantine/core";
import { useNavigate } from 'react-router-dom';
import { Book } from '../Interfaces';
import { BookCtx } from '../context/BookContext';



export function Home() {
  const {books,removeBook}= useContext(BookCtx)
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('/addTodo'), [navigate]);
  const handleUpdateOnClick = useCallback((book:Book) => navigate('/UpdateTodo',{state:book}), [navigate]);
  return (
    <>
      <Group position="center">
        <Button onClick={handleOnClick}>Add Book Deatils</Button>
      </Group>

      <Table id="table">
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Author Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book: Book, key: number) => (
            <tr key={key}>
              <td >{book.bookName}</td>
              <td>{book.authorName}</td>
              <td>{book.bookPrice}</td>
              <td>
                <Button onClick={()=>handleUpdateOnClick(book)}>
                  Update Modal
                </Button>
                <Button onClick={() => {
                  removeBook(book.id);
                }} variant="outline" ml={10} color="red">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}
