import React, { createContext } from "react"
import { UpdateTodo } from "../Pages/UpdateTodo"

type ProviderProp = {
  children: React.ReactNode
}

const NoteState = createContext(UpdateTodo)

export const ProviderProp = ({ children }: ProviderProp) => {
  return <NoteState.Provider value={UpdateTodo}>{children}</NoteState.Provider>
}
