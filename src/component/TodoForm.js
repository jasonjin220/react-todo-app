import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    if (!value) {
      setIsEmpty(true);
      return;
    }
    addTodo(value);
    setValue('');
  };

  const handleValChange = event => {
    setIsEmpty(false);
    setValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      <div className='form-group'>
        <input
          type='text'
          className='input'
          value={value}
          onChange={handleValChange}
          placeholder='Input task'
          autoFocus
        />
        <button type='submit'>Add</button>
      </div>
      {isEmpty && <div className='input-error'>Please enter a todo name.</div>}
    </form>
  );
};

export default TodoForm;
