import React from "react";
import "./App.css";
import Todo from "./Component/Page1/Todo";
import AllRoutes from "./routes/AllRoutes";
import TodoContextProvider from "./Context/TodoContextProvider";
import Navbar from "./Component/Navbar/Navbar"
function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <TodoContextProvider>
          <AllRoutes />
        </TodoContextProvider>
      </div>
    </div>
  );
}

export default App;
