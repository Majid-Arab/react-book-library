import {
  MantineProvider,
  Table,
  Group,
  Button,
  TextInput,
  Modal,
  NumberInput,
} from "@mantine/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AddTodo } from "./Pages/AddTodo";
import { UpdateTodo } from "./Pages/UpdateTodo";
import { Home } from "./Pages/Home";
import { BookContextProvider } from "./context/BookContext";


export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BookContextProvider>

        <Router>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<AddTodo />} path="/addTodo" />
            <Route element={<UpdateTodo />} path="/updateTodo" />
          </Routes>
        </Router>
      </BookContextProvider>

    </MantineProvider>
  );
}
