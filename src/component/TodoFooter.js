import React from 'react';

const TodoFooter = ({ hasTodo, deleteAllDone }) => {
  return (
    <div className='todo-footer'>
      {!hasTodo && <p className='info'>No Todo</p>}
      {hasTodo && (
        <button className='delete-all-done' onClick={deleteAllDone}>
          Delete All Done
        </button>
      )}
    </div>
  );
};

export default TodoFooter;
