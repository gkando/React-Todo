import React from 'react';
import './Todo.css';

class Todo extends React.Component {
    render() {
        return (
        <>
            <td>{this.props.todoOnProps.task}</td>
        </>
        )
  }
}

export default Todo;
