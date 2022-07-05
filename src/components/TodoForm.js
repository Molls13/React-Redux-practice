import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../state/actions";

const TodoForm = () => {
  const [task, setTask] = useState('')
  const [id, setId] = useState(1)
  const dispatch = useDispatch()
  const submitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: id,
      task: task,
      done: false
    };
    setId(prev => prev + 1)
    dispatch(addTodo(newTodo))
    setTask('');
  }

  return (
    <form className="form" autoComplete="off" onSubmit={submitHandler}>
      <input className="form__input" id="txtTodoItemToAdd"
        placeholder='Things to do' type="text"
        onChange={(e) => setTask(e.target.value)}
        value={task} />
      <input className="form__button" id="btnAddTodo" type="submit" />
    </form>
  );
}

export default TodoForm