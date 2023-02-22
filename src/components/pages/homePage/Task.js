import React from "react";
function Task({ task, remove, toggleComplete }) {

    const handleClick = e => {
        remove(e.target.id);
    };

    const toggleCompleted = e => {
        toggleComplete(e.target.id);
    };

    return (
        <div className="Todo">
            <li
                id={task.id}
                onClick={toggleCompleted}
                className={task.completed ? "Todo-task completed" : "Todo-task"}
            >
                {task.description}
            </li>
            <div className="Todo-buttons">
                <button onClick={handleClick}>
                    <i id={task.id} className="fas fa-trash" />
                </button>
            </div>
        </div>
    );
}

export default Task
