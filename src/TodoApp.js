import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import fetchTasks from './api'

export const TodoApp = () => {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const tasksfromApi = await fetchTasks();
                setTasks(tasksfromApi)
            } catch (error) {
                console.log('EWrror fetching initial tasks', error)
            }
        }
        fetchData()

    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        // Get the input value (you may want to add state for the input value)
        const newTaskText = e.target.elements.taskInput.value;

        // Check if the input is not empty
        if (newTaskText.trim() !== '') {
            // Create a new task object (you may want to generate an id)
            const newTask = {
                id: tasks.length + 1,
                text: newTaskText,
            };

            // Update the tasks state with the new task
            setTasks((prevTasks) => [...prevTasks, newTask]);

            // Clear the input field
            e.target.elements.taskInput.value = '';
        }
    };

    return (
        <div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.text}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Enter new task' name='taskInput' />
                <button type='submit'>
                    Add Task
                </button>
            </form>

            <Link to='/forms'>Forms</Link>

        </div>
    )
}
