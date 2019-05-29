import React from 'react';
import Todo from "./Todo";
import './Todo.css';

class TodoList extends React.Component {

  render() {
        return (
            <tbody>
                {this.props.todoData.map((todoFromMap, index) => (
                   <tr key={index} id={index} className="todo-item"> 
                        <Todo todoOnProps={todoFromMap} />
                    </tr>
                ))}
            </tbody>
        )
    }
}
export default TodoList;
