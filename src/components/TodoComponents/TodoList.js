import React from 'react';
import Todo from "./Todo";
import { Todos } from "./data";
import './Todo.css';

class TodoList extends React.Component {

  render() {
    return (
        <tr className="student-card">
            <td>{this.props.studentOnProps.id} </td>
            <td>{this.props.studentOnProps.task}</td>
        </tr>
    )
    }
}
export default TodoList;
