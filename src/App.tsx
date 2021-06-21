import React, { FC } from 'react';
import './App.css';
import './normalize.css';

const App: FC = () => {
  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input type="text" placeholder="Task..." required />
          <input type="date" />
          <button>Add task</button>
        </div>
      </div>
      <div className="todoList"></div>
    </div>
  );
}

export default App;
