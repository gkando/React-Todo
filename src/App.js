import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

export const Todos = [{task: "Harry Potter", id:   0}, {task: "Santa Shark", id:1}];

class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      message: "Welcome to your Todo App!",
      todoData: Todos,
      task: ''
    };
  }


  addTodo = e => {
    
    e.preventDefault();
    const newTodo = {
        task: this.state.task
    };
    console.log(newTodo)

    this.setState({
      todoData: [...this.state.todoData, newTodo]
    })}

  handleChanges = event => {
    // console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      
      <div>
        <h2>{this.state.message}</h2>
        <table className="todo-list">

          <TodoList todoData={this.state.todoData} />
    
        </table>
        <TodoForm addTodo={this.addTodo} handleChanges={this.handleChanges} task={this.state.task} />
      </div>
    );
  }
}

export default App;




