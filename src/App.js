import React, { useState } from 'react';
import TodoHeader from './component/TodoHeader';
import Todo from './component/Todo';
import TodoForm from './component/TodoForm';
import TodoFooter from './component/TodoFooter';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = name => {
    const newTodos = [...todos, { name, done: false }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const deleteAllDone = () => {
    const newTodos = todos.filter(todo => !todo.done);
    setTodos(newTodos);
  };

  return (
    <div className='app'>
      <div className='todo-list'>
        <TodoHeader />

        <TodoForm addTodo={addTodo} />

        {todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          );
        })}

        <TodoFooter hasTodo={!!todos.length} deleteAllDone={deleteAllDone} />
      </div>
    </div>
  );
};

export default App;
