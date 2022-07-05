import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


function App() {
  return (
    <>
      <h1>To do list</h1>
      <TodoForm />
      <TodoList />
    </>
  );
}

export default App;
