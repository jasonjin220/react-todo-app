import React from 'react';
import { FiSquare, FiCheckSquare, FiX } from 'react-icons/fi';

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  const style = todo.done
    ? {
        fontStyle: 'italic',
        textDecoration: 'line-through'
      }
    : {};

  const handleComplete = () => {
    completeTodo(index);
  };

  const handleRemove = () => {
    removeTodo(index);
  };

  return (
    <span className='todo' style={style}>
      <div className='todo-row'>
        <span onClick={handleComplete} className='btn-check'>
          {todo.done ? <FiCheckSquare /> : <FiSquare />}
        </span>
        {todo.name}
      </div>

      <FiX onClick={handleRemove} className='btn-close' />
    </span>
  );
};

export default Todo;
