import React from 'react';

const Todo = ({ todos }) => {
  return (
    <div>
      <h2>Reminder List</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <h2>
            {todo.text}
              </h2>
            {todo.reminder && (
              <span> (Reminder: {new Date(todo.reminder).toLocaleString()})</span>
            )}
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
