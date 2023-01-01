import React from 'react'
import {db} from "../utils/db"
export const TodoContext=React.createContext()
export default function TodoContextProvider({children}) {
    const [data,setData]=React.useState(db())
  return (
    <TodoContext.Provider value={{data:data,setData:setData}}>
      {children}
    </TodoContext.Provider>
  )
}
