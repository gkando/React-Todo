import React from 'react';
import Todo from "./Todo";
import './Todo.css';

const TodoList = props => {
    return (

        <div className='todo-list'>
            
            {props.todoData.map(item => {
                return (
                    <Todo key={item.id} toggleItem={props.toggleItem} item={item} />
                    );
            })}
        </div>
    )
}

export default TodoList;