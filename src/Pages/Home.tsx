
import React, { useCallback, useState } from 'react'
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

interface Props {
  books: Book[]
  remove: (bookNameToDelete: string) => void;
}

export function Home({ books, remove }: Props) {

  const [book, setBook] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState(0);

  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('/addTodo'), [navigate]);
  const handleUpdateOnClick = useCallback((book:Book) => navigate('/UpdateTodo',{state:book}), [navigate]);

  // const updateData = (book: Book) => {
  //   setBook(book.bookName)
  //   setAuthor(book.authorName)
  //   setPrice(book.bookPrice)
  // }


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
                  remove(book.bookName);
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
