import  { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8080/api/tasks')
            .then(res => setTasks(res.data))
            .catch(err => console.error(err));
    }, []);

    const addTask = () => {
        axios.post('http://localhost:8080/api/tasks', { title })
            .then(res => setTasks([...tasks, res.data]))
            .catch(err => console.error(err));
    };

    const deleteTask = (id) => {
        axios.delete(`http://localhost:8080/api/tasks/${id}`)
            .then(() => setTasks(tasks.filter(task => task._id !== id)))
            .catch(err => console.error(err));
    };

    return (
        <div className="App">
            <h1>Task Manager</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter task"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button onClick={addTask}>Add Task</button>
            </div>
            <ul>
                {tasks.map(task => (
                    <li key={task._id}>
                        {task.title}
                        <button onClick={() => deleteTask(task._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;