import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../state/actions";

const TodoCard = ({ todo }) => {
    const dispatch = useDispatch()
    return (
        <div className={todo.done ? "todo--completed" : "todo--notcompleted"}>
            <div className="todo--toggle-completed" onClick={() => dispatch(toggleTodo(todo))}>{todo.task}</div>
            {todo.done ? <button className="todo__button--remove" onClick={() => dispatch(removeTodo(todo.id))}>remove</button> : ''}
        </div>
    )
}

export default TodoCard
