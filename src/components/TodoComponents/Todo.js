import React from 'react';
import './Todo.css';

const Todo = props => {
    return (
      //wrap in anon function to call and pass args
      <div
        className={`item ${props.item.completed ? "completed" : ""}`}
        onClick={() => props.toggleItem(props.item.id)}
      > 
      &#123;
      task:
        <span className="string-highlight">'{props.item.task}'</span>,<br></br>
        id: <span className="string-highlight">'{props.item.id}'</span>,<br></br>
        completed: <span className="string-highlight status">'{props.item.completed ? "completed" : "incomplete"}'</span> &#125;
      </div>
    );
  };

export default Todo;
