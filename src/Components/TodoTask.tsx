import React from 'react';
import { ITask } from '../Interfaces';

interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({task, completeTask}: Props) => {
    return (
        <div className="task">
            <div className="taskName">{task.taskName}</div>
            <div className="taskDeadline">{task.deadline}</div>
            <button onClick={() => {completeTask(task.taskName)}}>X</button>
        </div>
    )
}

export default TodoTask;