import React from "react";
import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

const TodoList = () => {
    const todos = useSelector((state) => state)
    return (
        <main className='main' id="todoList" >
        {todos.map((item, index) => <TodoCard todo={item} key={index} />)}
        </main>
    )
}

export default TodoList