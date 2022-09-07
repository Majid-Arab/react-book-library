import {
  MantineProvider,
  Table,
  Group,
  Button,
  TextInput,
  Modal,
  NumberInput,
} from "@mantine/core";
import { ChangeEvent, useRef, useState } from "react";
import { Book } from "./Interfaces";
import { theme } from "./theme";

export default function App() {

  const [opened, setOpened] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);

  const [book, setBook] = useState("");
  const [author, setAuthor] = useState("");

  const [price, setPrice] = useState(0);

  const addData = () => {
    const newBook: Book = {
      bookName: book,
      authorName: author,
      bookPrice: price,
    };
    console.log(newBook)
    setBooks([...books, newBook]);
    setBook("");
    setAuthor("");
    setOpened(false)
    setPrice(0);
  };

  const updateData = (book: Book) => {
    setOpened(true)
    setBook(book.bookName)
    setAuthor(book.authorName)
    setPrice(book.bookPrice)
  }

  // const removeBook = (index: number) => {
  //   const delBook = [...books];
  //   delBook.splice(index, 1);
  // }

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

      <Modal opened={opened} onClose={() => setOpened(false)}>
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
          <Button onClick={addData}>Add Book</Button>
        </form>
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Add Book Deatils</Button>
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
                <Button onClick={() => updateData(book)}>
                  Update Modal
                </Button>
                <Button onClick={() => {
                  removeBook(book.bookName);
                }} variant="outline" ml={10} color="red">
                  Delete
                </Button>
              </td>
            </tr>
          ))}

        </tbody>
      </Table>
    </MantineProvider>
  );
}
