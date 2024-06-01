import React, { useState, useEffect } from 'react';
import Todo from './component/Todo';
import TodoForm from './component/TodoForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  useEffect(() => {
    const now = new Date();
    todos.forEach((todo, index) => {
      if (todo.reminder && new Date(todo.reminder) > now) {
        const timeDifference = new Date(todo.reminder) - now;
        setTimeout(() => {
          toast(`Reminder: ${todo.text}`);
        }, timeDifference);
      }
    });
  }, [todos]);

  return (
    <div className="App">
      <h1>Reminder</h1>
      <TodoForm addTodo={addTodo} />
      <Todo todos={todos} />
      <ToastContainer />
    </div>
  );
};

export default App;