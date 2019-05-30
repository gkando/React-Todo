import React from 'react';
import './Todo.css';

const Todo = props => {
    return (
      //wrap in anon function to call and pass args
      <div
        className={`item ${props.item.completed ? "completed" : ""}`}
        onClick={() => props.toggleItem(props.item.id)}
      >
        <p>{props.item.task}</p>
      </div>
    );
  };
  

export default Todo;
