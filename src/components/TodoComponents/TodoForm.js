import React from 'react';
import './Todo.css';

class TodoForm extends React.Component {
    constructor() {
      super();
      this.state = {
        item: ""
      };
    }
  
    handleChanges = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };
  
    addTodo = e => {
      e.preventDefault();
      this.props.addTodo(this.state.item)
      this.setState({
        item: ''
      })
    }
  
    render() {
      return (
        <form onSubmit={this.addTodo}>
          <input
            value={this.state.item}
            name="item"
            onChange={this.handleChanges}
          />
        </form>
      );
    }
  }
export default TodoForm;
