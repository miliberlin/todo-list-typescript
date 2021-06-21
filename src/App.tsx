import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';
import './normalize.css';
import {ITask} from './Interfaces'

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {setTask(event.target.value)}
    else {setDeadline(event.target.value)}
  }

  const addTask = ():void => {
    const newTask = {taskName: task, deadline: deadline}
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline("");
  }

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <div className="inputs">
            <input type="text" placeholder="Task..." required name="task" value={task} onChange={handleChange}/>
            <input type="date" value={deadline} name="deadline" onChange={handleChange}/>
          </div>
          <button onClick={addTask}>Add task</button>
        </div>
      </div>
      <div className="todoList"></div>
    </div>
  );
}

export default App;
