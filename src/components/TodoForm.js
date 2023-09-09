import React,{useContext,useState} from "react";

// why not .consumer?, why useContext-->my doubt

import{
    Form,
    FormGroup,
    InputGroup,
    Input,
    Button
}from "reactstrap";
import TodoContext from "../context/TodoContext";
import {v4} from "uuid";
import { ADD_TODO } from "../context/action.types";

const TodoForm=()=>{
    const[todoString,setTodoString]=useState("");
    const {dispatch} = useContext(TodoContext);

    const handleSubmit=e=>{
        e.preventDefault();
        if(todoString===""){
            return alert("Please Enter a TODO");
        }

        const todo={
            todoString,
            id: v4()
        }
        dispatch({
            type: ADD_TODO,
            payload: todo
        })

        setTodoString("");
    }

    return(
        <Form onSubmit={handleSubmit}>
                <InputGroup>
                <Input 
                type="text"
                name="todo"
                id="todo"
                placeholder="Your next Todo"
                value={todoString}
                onChange={e=>setTodoString(e.target.value)}
                />
                <Button color="warning">
                    Add
                </Button>
                </InputGroup>
        </Form>
    );
}

export default TodoForm;