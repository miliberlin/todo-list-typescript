import React, { FC } from 'react';
import './App.css';
import './normalize.css';

const App: FC = () => {
  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <div className="inputs">
            <input type="text" placeholder="Task..." required />
            <input type="date" />
          </div>
          <button>Add task</button>
        </div>
      </div>
      <div className="todoList"></div>
    </div>
  );
}

export default App;
