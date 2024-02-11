import React from "react";

function TodoItem({task, deleteTask, toggleCompleted}) {
    function handleChange() {
        toggleCompleted(task.id);
    }

    return(
        <div className="todo-item">
            <input
                type="checkbox"
                checked={task.isCompleted}
                onChange={handleChange}
            />
            <p className={ task.isCompleted ? 'strike' : null}>{task.text}</p>
            <button onClick={() => deleteTask(task.id)}>X</button>
        </div>
    )
}

export default TodoItem;