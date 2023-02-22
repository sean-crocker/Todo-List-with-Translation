import React, { useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';

function AddTask({createTask }) {
    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            task: ""
        }
    );

    const handleChange = e => {
        setUserInput({ [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        const newTask = { id: uuidv4(), description: userInput.task, completed: false };
        createTask(newTask);
        setUserInput({ task: "" });
    };

    return (
        <form className='AddTask' onSubmit={handleSubmit}>
            <label htmlFor='task'> Add Task</label>
            <input
                value={userInput.task}
                onChange={handleChange}
                id="task"
                type="text"
                name="task"
                placeholder="New Task"
            />
            <button>Add</button>
        </form>
    );
}

export default AddTask
