import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';
import './normalize.css';
import {ITask} from './Interfaces'
import TodoTask from './Components/TodoTask'

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<Date>(new Date())
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {setTask(event.target.value)}
    else if (event.target.name === "deadline") {
      setDeadline(new Date(event.target.value))
    }
  }

  const addTask = ():void => {
    const newTask = {taskName: task, deadline: (deadline)}
    todoList.length === 0 ? todoList.push({taskName: task, deadline: (deadline)}) : setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(new Date());
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
            <input type="date" name="deadline" value={
              `${deadline.getFullYear()}-${
              (deadline.getMonth()+1) < 10 ? '0'+(deadline.getMonth()+1) : deadline.getMonth()+1
            }-${
              deadline.getDate() < 10 ? '0'+ deadline.getDate() : deadline.getDate()
            }`
            } onChange={handleChange}/>
          </div>
          <button onClick={addTask}>Add task</button>
        </div>
      </div>
      <div className="todoList">
        {todoList
        .sort((a: ITask,b: ITask) => {
          return a.deadline.getTime() - b.deadline.getTime();
        })
        .map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask}/>
        })
        }
      </div>
    </div>
  );
}

export default App;
