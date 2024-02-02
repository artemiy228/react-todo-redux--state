import React from 'react';

const TodoItem = ({id, completed, text, toggleTodoComplete, removeTodo}) => {
  return (
      <li key={id}>
          <input type="checkbox" checked={completed} onChange={() => toggleTodoComplete(id)}/>
          <span>{text}</span>
          <span className="remove" onClick={() => removeTodo(id)}>&times;</span>
        </li>
  );
};

export default TodoItem;