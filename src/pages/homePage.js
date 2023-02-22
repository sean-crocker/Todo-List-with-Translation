import React, {useState} from "react";
import AddTask from '../components/pages/homePage/addTask'
import Task from '../components/pages/homePage/Task'
import { v4 as uuidv4 } from 'uuid';

function HomePage() {
    const [tasks, setTasks] = useState([
        { id: uuidv4(), description: "task 1", completed: false },
        { id: uuidv4(), description: "task 2", completed: true }
    ]);

    const create = newTask => {
        console.log(newTask);
        setTasks([...tasks, newTask]);
    }

    const remove = id => {
      setTasks(tasks.filter(task => task.id !== id));
    };

    const update = (id, updatedTask) => {
        const updatedTasks = tasks.map(task => {
            return task.id === id ? { ...task, description: updatedTask } : task;
        });
        setTasks(updatedTasks);
    };

    const toggleComplete = id => {
        const updatedTasks = tasks.map(task => {
            return task.id === id ? { ...task, completed: !task.completed } : task;
        });
        setTasks(updatedTasks);
    };

    const taskList = tasks.map(task => (
       <Task toggleComplete={toggleComplete} update={update} remove={remove} key={task.id} task={task}/>
    ));

    return (
        <div className='todo-list'>
            <h1>To-do List</h1>
            <AddTask createTask={create} />
            <ul>{taskList}</ul>
        </div>
    );
}

export default HomePage;
