import React,{useReducer} from "react";
import TodoReducer from "./context/reducer";
import TodoContext from "./context/TodoContext";
import { Container } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoForm from "./components/TodoForm";
import Todos from "./components/todos";
import "./App.css";


const App=()=>{
    const[todos,dispatch]=useReducer(TodoReducer,[]);
    return(
        <TodoContext.Provider value={{todos,dispatch}}>
         <Container fluid>
            <h1>Todo App using Context API</h1>
            <Todos />
            <TodoForm/>
        </Container>
        </TodoContext.Provider>
    );
}

export default App;