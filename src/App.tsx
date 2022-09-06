import {
  MantineProvider,
  Table,
  Group,
  Button,
  TextInput,
  Modal,
  NumberInput,
} from "@mantine/core";
import { useState } from "react";
import { Books } from "./Interfaces";
import { theme } from "./theme";

export default function App() {
  const [opened, setOpened] = useState(false);
  const [updateOpened, setUpdateOpened] = useState(false);
  const [books, setBooks] = useState<Books[]>([]);
  const [book, setBook] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState(0);

  const newBook: Books = {
    bookName: book,
    authorName: author,
    bookPrice: price,
  };
  const addData = () => {
    console.log(newBook)
    setBooks([...books, newBook]);
    setBook("");
    setAuthor("");
    setOpened(false)
    setPrice(0);
  };

  const updateData = () => {
    const updateBook = newBook.bookName.valueOf
    console.log(updateBook)
  }

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
          <Button onClick={updateData}>Add Book</Button>
        </form>
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Add Book Deatils</Button>
      </Group>

      {/* Update Modal  */}

      <Modal opened={updateOpened} onClose={() => setUpdateOpened(false)}>
        {/* Modal content */}
        <form>
          <div style={{ display: "flex" }}>
            <TextInput placeholder="Book name" name="book_name" label="Book name" />

            <TextInput placeholder="Author name" name="author_name" label="Author name" />

            <NumberInput placeholder="Book Price" name="book_price" label="Price" />
          </div>
          <Button onClick={addData}>Add Book</Button>
        </form>
      </Modal>

      <Table>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Author Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book: Books, key: number) => (
            <tr key={key}>
              <td >{book.bookName}</td>
              <td>{book.authorName}</td>
              <td>{book.bookPrice}</td>
              <td>
                <Button onClick={() => setUpdateOpened(true)}>
                  Update Modal
                </Button>
              </td>
            </tr>
          ))}

        </tbody>
      </Table>
    </MantineProvider>
  );
}
