import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
    const [tasks, setTask] = useState([
        {
            id: 1,
            text: "Test Task",
            isCompleted: false
        }
    ]);
    const [text, setText] = useState('');

    function addTask(text) {
        const newTask = {
            id: Date.now(),
            text,
            isCompleted: false
        };
        setTask([...tasks, newTask]);
        setText("");
    }
    function deleteTask(id){
        setTask(tasks.filter(task => task.id !== id));

    }
    function toggleCompleted(id){
        setTask(tasks.map(task => {
            if (task.id === id){
                return{...task, isCompleted: !task.isCompleted}
            } else{
                return task;
            }
        }))

    }

    return(
        <div className='todo-list'>
            <h1>ReminderRaven</h1>
            <div>
                <input
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <button onClick={() => addTask(text)}>Add</button>
            </div>
            {tasks.map(task => (
                <TodoItem 
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    toggleCompleted={toggleCompleted}
                />
            ))}

        </div>
    )

}

export default TodoList;