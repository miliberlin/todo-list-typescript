import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';
import './normalize.css';
import {ITask} from './Interfaces'
import TodoTask from './Components/TodoTask'

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {setTask(event.target.value)}
    else if (event.target.name === "deadline") {
      setDeadline(event.target.value)
    }
  }

  const addTask = ():void => {
    const newTask = {taskName: task, deadline: (deadline)}
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline("");
    console.log(todoList)
  }

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter(task => {
      return task.taskName !== taskNameToDelete
    }))
  }

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <div className="inputs">
            <input type="text" placeholder="Task..." required name="task" value={task} onChange={handleChange}/>
            <input type="date" name="deadline" onChange={handleChange}/>
          </div>
          <button onClick={addTask}>Add task</button>
        </div>
      </div>
      <div className="todoList">
        {todoList
        .map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask}/>
        })
        // .sort((a,b) => {
        //   return new Date(a.deadline) - new Date(b.deadline)
        // })
        }
      </div>
    </div>
  );
}

export default App;
