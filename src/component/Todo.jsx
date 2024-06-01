import React from 'react';

const Todo = ({ todos }) => {
  return (
    <div>
      <h2>Reminder List</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <h3>
            {todo.text}
            {todo.reminder && (
              <span> (Reminder: {new Date(todo.reminder).toLocaleString()})</span>
            )}
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
