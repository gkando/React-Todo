import React from 'react';
import './Todo.css';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        };
    render() {
          return (
            <form onSubmit={this.props.addTodo}>
                <input 
                placeholder='Task'
                // onChange={event => console.log(event)}
                onChange={this.props.handleChanges}
                name='task'
                value={this.props.task} />
                {/* <button onClick={event => {console.log(event)}}> Add Todo </button> */}
                <button onClick={this.props.addTodo}> Add Todo </button>
                <button> Clear Completed </button>
            </form>
    )
    }
}
export default TodoForm;