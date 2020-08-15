import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}
            />
            {props.item.completed ? <p><s>{props.item.text}</s></p> : <p>{props.item.text}</p>}
        </div>
    )
}

export default TodoItem