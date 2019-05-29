import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import Todo from './components/TodoComponents/Todo';

export const Todos = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
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
          <tbody>
            {this.state.todoData.map(studentFromMap => (
              <TodoList studentOnProps={studentFromMap} />
            ))}
          </tbody>
        </table>
       
        {/* <TodoList /> */}
        <form onSubmit={this.addTodo}>
            <input 
            placeholder='Task'
            // onChange={event => console.log(event)}
            onChange={this.handleChanges}
            name='task'
            value={this.state.task} />


            {/* <button onClick={event => {console.log(event)}}> Add Todo </button> */}
            <button onClick={this.addTodo}> Add Todo </button>
        </form>

      </div>
    );
  }
}

export default App;




