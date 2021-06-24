import React, {useState} from 'react';
import { ITask } from '../Interfaces';

interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
    editTask(taskToEdit: ITask): ITask;
}

const TodoTask = ({task, completeTask, editTask}: Props) => {
    return (
        <div className="task">
            <div className="taskName">{task.taskName}</div>
            <div className="taskDeadline">
                {`${task.deadline.getFullYear()}-${
                    (task.deadline.getMonth()+1) < 10 ? '0'+(task.deadline.getMonth()+1) : task.deadline.getMonth()+1
                }-${
                    task.deadline.getDate() < 10 ? '0'+ task.deadline.getDate() : task.deadline.getDate()
                }`}
            </div>
            <button className="editTask" onClick={() => {editTask(task)}}>Edit</button>
            <button className="deleteTask" onClick={() => {completeTask(task.taskName)}}>X</button>
        </div>
    )
}

export default TodoTask;